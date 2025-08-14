const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const patientGetAPIs = express.Router()

patientGetAPIs.get('/patients', async (req, res) => {
  const term = req.query?.term
  try {
    let patients

    patients = (await prisma.patient.findMany({ include: { sessions: true } })).filter((item) =>
      term ? item.patientName?.includes(term) || item.residentialId?.includes(term) : item
    )

    res.json(patients)
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
})

patientGetAPIs.get('/patientDetail', async (req, res) => {
  const { id } = req.query
  try {
    const patient = await prisma.patient.findUnique({ where: { id: Number(id) } })

    res.json(patient)
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
})

patientGetAPIs.get('/patientDetail/patientFile', async (req, res) => {
  try {
    const patientId = Number(req.query.id)
    const files = await prisma.file.findMany({
      where: { patientId },
      select: {
        id: true,
        originalName: true,
        size: true,
        mimeType: true,
        path: true,
        uploadedAt: true
      }
    })

    res.json(files)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching files' })
  }
})

module.exports = patientGetAPIs
