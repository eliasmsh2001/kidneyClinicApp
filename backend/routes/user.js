const express = require('express')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('../generated/prisma/client')
const jwt = require('jsonwebtoken')

const userRoute = express.Router()
const prisma = new PrismaClient()

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1h' })
}

userRoute.post('/signup', async (req, res) => {
  const data = req.body

  try {
    if (!data.username || !data.password) {
      throw Error('Fill in the fields first')
    }
    const existingUser = await prisma.user.findMany({
      where: {
        username: data.username
      }
    })

    if (existingUser.length > 0) {
      throw Error('This name already exists!')
    } else {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(data.password, salt)

      const newuser = await prisma.user.create({
        data: {
          username: data.username,
          usersecret: hash,
          authority: 'user'
        }
      })

      const token = createToken(newuser.id)

      res.status(200).json({ newuser, token })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

userRoute.post('/login', async (req, res) => {
  const data = req.body

  const admin = await prisma.user.findFirst({ where: { username: 'Admin' } })

  if (!admin) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash('admin', salt)

    const newuser = await prisma.user.create({
      data: {
        username: 'Admin',
        usersecret: hash,
        authority: 'admin'
      }
    })
  }

  try {
    if (!data.username || !data.password) {
      throw Error('Fill in the fields first')
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        username: data.username
      }
    })

    if (!existingUser) {
      throw Error('Incorrect username!')
    }

    const match = await bcrypt.compare(data.password, existingUser.usersecret)

    if (!match) {
      throw Error('Incorrect Password')
    }

    const token = createToken(existingUser.id)
    res.status(200).json({ existingUser })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = userRoute
