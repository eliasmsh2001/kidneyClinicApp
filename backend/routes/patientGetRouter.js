const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')

const prisma = new PrismaClient()

const patientGetAPIs = express.Router()

patientGetAPIs.get('/patients', async (req, res) => {
  const term = req.query?.term
  try {
    let patients

    patients = (await prisma.patient.findMany({ include: { sessions: true } })).filter((item) =>
      term
        ? item.patientName?.toLowerCase().includes(term?.toLowerCase()) ||
          item.residentialId?.includes(term)
        : item
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

    // console.log(patient)
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

patientGetAPIs.get('/patientAnalysis', async (req, res) => {
  const { id } = req.query

  try {
    const sessions = await prisma.session.findMany({
      where: { patientId: Number(id) },
      include: { hours: true }
    })

    let hours = []
    for (let i = 0; i < sessions.length; i++) {
      hours = hours.concat(sessions[i].hours)
    }
    if (sessions.length < 1 || hours.length < 0) {
      return res.json(null)
    }

    if (hours.length < 1) {
      return hours
    }

    // ==================================================================================
    // ========= AVERAGE BLOODPRESSURE ==================================================
    // ==================================================================================

    let systolicSum = 0
    let diastolicSum = 0
    let bpLength = 0

    for (let i = 0; i < hours.length; i++) {
      hours[i].bloodPressure
        ? (systolicSum += Number(
            hours[i].bloodPressure?.slice(0, hours[i].bloodPressure.indexOf('/')).trim()
          ))
        : 0
      hours[i].bloodPressure
        ? (diastolicSum += Number(
            hours[i].bloodPressure
              ?.slice(hours[i].bloodPressure.indexOf('/') + 1, hours[i].bloodPressure.length)
              .trim()
          ))
        : 0

      hours[i].bloodPressure && bpLength++
    }

    let avgSystolic = systolicSum / bpLength
    let avgDiastolic = diastolicSum / bpLength
    const averageBp = `${Math.round(avgSystolic)}/${Math.round(avgDiastolic)}`

    // ==================================================================================
    // ==================================================================================

    // ==================================================================================
    // ========= HIGHEST/LOWEST BLOODPRESSURE ==================================================
    // ==================================================================================

    // Find the reading with the lowest systolic value
    const lowestSystolic = hours.reduce((min, item) =>
      item.systolicBP < min.systolicBP ? item : min
    )

    const highstSystolic = hours.reduce((max, item) =>
      item.systolicBP > max.systolicBP ? item : max
    )

    // ==================================================================================
    // ==================================================================================

    // ==================================================================================
    // ========= PULSE RATE ==================================================
    // ==================================================================================

    let pulseRateReadings = []

    for (let i = 0; i < hours.length; i++) {
      hours[i].pulseRate &&
        Number(hours[i].pulseRate) > 0 &&
        pulseRateReadings.push(Number(hours[i].pulseRate))
    }

    function calculateAveragePulse(pulseReadings) {
      if (!pulseReadings.length) return 0

      const sum = pulseReadings.reduce((total, reading) => total + reading, 0)
      return Math.round(sum / pulseReadings.length)
    }

    const averagePulseRate = calculateAveragePulse(pulseRateReadings)
    const highestPulseRate = Math.max(...pulseRateReadings)
    const lowstPulseRate = Math.min(...pulseRateReadings)

    // ==================================================================================
    // ==================================================================================

    const analysis = {
      averageBp,
      lowestBp: lowestSystolic.bloodPressure,
      highestBp: highstSystolic.bloodPressure,
      averagePulseRate,
      highestPulseRate,
      lowstPulseRate
    }

    res.json(analysis)
  } catch (e) {
    console.log(e)
    res.status(400).json({ error: e.error })
  }
})

patientGetAPIs.get('/attendants', async (req, res) => {
  const days = [
    'sun', // Sunday
    'mon', // Monday
    'thu', // Tuesday
    'wed', // Wednesday
    'thu', // Thursday
    'fri', // Friday
    'sat' // Saturday
  ]

  const today = new Date()
  const dayIndex = today.getDay() // Returns 0-6 (0=Sunday, 1=Monday, etc.)
  const todayName = days[dayIndex]

  try {
    const patients = await prisma.patient.findMany({ include: { sessions: true } })
    const filteredPatients = patients.filter((item) =>
      item.schedule.toLowerCase().includes(todayName)
    )

    const tweakedPatients = filteredPatients.map((obj) => {
      return {
        ...obj,
        latestSesstion:
          obj.sessions.length > 0
            ? obj.sessions.reduce((latest, current) => {
                return current.date > latest.date ? current : latest
              }).date
            : 'No Sesstions',
        attended: obj.sessions.find(
          (item) => new Date(item.date).toDateString() === new Date().toDateString()
        )
          ? true
          : false
      }
    })

    res.json(tweakedPatients)
  } catch (e) {
    console.log(e)
    res.status(400).json({ error: e.error })
  }
})

module.exports = patientGetAPIs
