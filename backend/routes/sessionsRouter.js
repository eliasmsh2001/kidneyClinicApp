const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const sessionsRouter = express.Router()

sessionsRouter.post('/newSession', async (req, res) => {
  const { data, sessionHours, patientId } = req.body

  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${year}-${month}-${day}`

  try {
    const newSesstion = await prisma.session.create({
      data: {
        date: data.date ? data.date : currentDate,
        day: 'Unknown',
        techName: data.techName ? data.techName : 'Unknown',
        deviceNo: data.deviceNo ? data.deviceNo : 'Unknown',
        deviceNo: data.bloodPressure ? data.bloodPressure : 'Unknown',
        sessionType: data.sessionType ? data.sessionType : 'Unknown',
        startingTime: data.startingTime ? data.startingTime : 'Unknown',
        anticoagulantUsed: data.anticoagulantUsed ? data.anticoagulantUsed : 'Unknown',
        ktv: data.ktv ? data.ktv : 'Unknown',
        urr: data.urr ? data.urr : 'Unknown',
        ultrafiltrationRate: data.ultrafiltrationRate ? data.ultrafiltrationRate : 'Unknown',
        wtPreHD: data.wtPreHD ? data.wtPreHD : 'Unknown',
        wtPostHD: data.wtPostHD ? data.wtPostHD : 'Unknown',
        HDStarting: data.HDStarting ? data.HDStarting : 'Unknown',
        heparinRate: data.heparinRate ? data.heparinRate : 'Unknown',
        heparinBolus: data.heparinBolus ? data.heparinBolus : 'Unknown',
        UFGoal: data.UFGoal ? data.UFGoal : 'Unknown',
        sessionDuration: String(sessionHours?.length - 1),
        patientId: Number(patientId)
      }
    })

    function parseBloodPressure(bpString) {
      const match = bpString.match(/^(\d+)\/(\d+)$/)
      if (!match) {
        throw new Error('Invalid blood pressure format')
      }
      return {
        systolic: parseInt(match[1], 10),
        diastolic: parseInt(match[2], 10)
      }
    }

    const newSesstionHours = await prisma.sessionHours.createMany({
      data: sessionHours.map(({ key, bloodPressure, ...item }) => ({
        ...item,
        sessionId: newSesstion.id,
        // patientId: Number(patientId),
        bloodPressure: bloodPressure
          ? `${parseBloodPressure(bloodPressure).systolic}/${parseBloodPressure(bloodPressure).diastolic}`
          : '',
        systolicBP: bloodPressure ? parseBloodPressure(bloodPressure).systolic : '',
        diastolicBP: bloodPressure ? parseBloodPressure(bloodPressure).diastolic : ''
      }))
    })

    res.json(newSesstion, newSesstionHours)
  } catch (e) {
    console.log(e)
  }
})

sessionsRouter.get('/getSessions', async (req, res) => {
  const { id } = req.query
  try {
    const sessions = await prisma.session.findMany({
      where: { patientId: Number(id) },
      include: { hours: true }
    })

    const sortedSessions = sessions.sort((a, b) => b.id - a.id)

    res.json(sortedSessions)
  } catch (e) {
    console.log(e)
  }
})

sessionsRouter.get('/getSessionDetails', async (req, res) => {
  const { id } = req.query
  try {
    const session = await prisma.session.findUnique({
      where: { id: Number(id) },
      include: { hours: true }
    })

    res.json(session)
  } catch (e) {
    console.log(e)
  }
})

sessionsRouter.delete('/deleteSession', async (req, res) => {
  const { id } = req.body
  try {
    const deletedSessionHours = await prisma.sessionHours.deleteMany({ where: { sessionId: id } })
    const deletedSession = await prisma.session.deleteMany({ where: { id } })

    res.json(deletedSession, deletedSessionHours)
  } catch (e) {
    console.log(e)
  }
})
sessionsRouter.put('/editSession', async (req, res) => {
  const { data, sessionHours, sessionId } = req.body
  console.log(sessionHours)
  try {
    const existingSession = await prisma.session.findUnique({ where: { id: Number(sessionId) } })

    const updatedSesstion = await prisma.session.update({
      where: { id: Number(sessionId) },
      data: {
        date: data.date && data.date.length > 1 ? data.date : existingSession.date,
        day: 'Unknown',
        techName:
          data.techName && data.techName.length > 1 ? data.techName : existingSession.techName,
        deviceNo:
          data.deviceNo && data.deviceNo.length > 1 ? data.deviceNo : existingSession.deviceNo,
        sessionType:
          data.sessionType && data.sessionType.length > 1
            ? data.sessionType
            : existingSession.sessionType,
        startingTime:
          data.startingTime && data.startingTime.length > 1
            ? data.startingTime
            : existingSession.startingTime,
        anticoagulantUsed:
          data.anticoagulantUsed && data.anticoagulantUsed
            ? data.anticoagulantUsed
            : existingSession.anticoagulantUsed,
        ktv: data.ktv && data.ktv.length > 0 ? data.ktv : existingSession.ktv,
        urr: data.urr && data.urr.length > 1 ? data.urr : existingSession.urr,
        ultrafiltrationRate:
          data.ultrafiltrationRate && data.ultrafiltrationRate.length > 1
            ? data.ultrafiltrationRate
            : existingSession.ultrafiltrationRate,
        wtPreHD: data.wtPreHD && data.wtPreHD.length > 1 ? data.wtPreHD : existingSession.wtPreHD,
        wtPostHD:
          data.wtPostHD && data.wtPostHD.length > 1 ? data.wtPostHD : existingSession.wtPostHD,
        HDStarting:
          data.HDStarting && data.HDStarting.length > 1
            ? data.HDStarting
            : existingSession.HDStarting,
        heparinRate:
          data.heparinRate && data.heparinRate.length > 1
            ? data.heparinRate
            : existingSession.heparinRate,
        heparinBolus:
          data.heparinBolus && data.heparinBolus.length > 1
            ? data.heparinBolus
            : existingSession.heparinBolus,
        UFGoal: data.UFGoal && data.UFGoal.length > 1 ? data.UFGoal : existingSession.UFGoal,
        sessionDuration: String(sessionHours?.length - 1)
      }
    })

    const deletedHours = await prisma.sessionHours.deleteMany({
      where: { sessionId: Number(sessionId) }
    })

    function parseBloodPressure(bpString) {
      const match = bpString.match(/^(\d+)\/(\d+)$/)
      if (!match) {
        throw new Error('Invalid blood pressure format')
      }
      return {
        systolic: parseInt(match[1], 10),
        diastolic: parseInt(match[2], 10)
      }
    }

    const updatedHours = await prisma.sessionHours.createMany({
      data: sessionHours.map(({ key, bloodPressure, ...item }) => ({
        ...item,
        sessionId: Number(sessionId),
        // patientId: Number(patientId),
        bloodPressure: bloodPressure
          ? `${parseBloodPressure(bloodPressure).systolic}/${parseBloodPressure(bloodPressure).diastolic}`
          : '',
        systolicBP: bloodPressure ? parseBloodPressure(bloodPressure).systolic : 0,
        diastolicBP: bloodPressure ? parseBloodPressure(bloodPressure).diastolic : 0
      }))
    })

    res.json(updatedSesstion, updatedHours)
  } catch (e) {
    console.log(e)
  }
})

sessionsRouter.put('/editBalance', async (req, res) => {
  const { sessionId, field, value } = req.body

  const session = await prisma.session.findUnique({ where: { id: Number(sessionId) } })

  let intake = session.intake ? session.intake : 0
  let output = session.output ? session.output : 0
  try {
    if (field === 'intake') {
      intake = (await prisma.session.update({ where: { id: sessionId }, data: { intake: value } }))
        .intake
    }

    if (field === 'output') {
      output = (await prisma.session.update({ where: { id: sessionId }, data: { output: value } }))
        .output
    }

    const edittedSesh = await prisma.session.update({
      where: { id: sessionId },
      data: { balance: Number(intake) - Number(output) }
    })

    console.log(edittedSesh.balance)

    res.json(edittedSesh)
  } catch (e) {
    console.log(e)
  }
})

module.exports = sessionsRouter
