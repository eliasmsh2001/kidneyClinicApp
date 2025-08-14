const express = require('express')
const { PrismaClient } = require('../generated/prisma/client')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const patientPostAPIs = express.Router()
const prisma = new PrismaClient()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads')
}

const upload = multer({ storage })
patientPostAPIs.post('/newPatient', async (req, res) => {
  const { data } = req.body

  if (!data.name || data.name == '' || data.name.length < 2) {
    return res.status(403).json({ success: false, message: 'Please Enter A Name!' })
  }

  try {
    const newPatient = await prisma.patient.create({
      data: {
        patientName: data.name,
        age: data.age,
        residentialId: data.residentialId ? data.residentialId.trim() : 'Unknown',
        birthDate: data.birthDate ? data.birthDate : 'Unknown',
        phoneNumber: data.phoneNumber ? data.phoneNumber.trim() : 'Unknown',
        address: data.address ? data.address.trim() : 'Unknown',
        bloodType: data.bloodType ? data.bloodType : 'Unknown',
        hight: data.hight !== '' ? data.hight : 'Unknown',
        weight: data.weight !== '' ? data.weight : 'Unknown',
        social: data.social ? data.social.trim() : 'Unknown',
        gender: data.gender ? data.gender.trim() : 'Unknown',
        sicknessCause: data.sicknessCause ? data.sicknessCause.trim() : 'Unknown',
        firstEverTreatment: data.firstEverTreatment,
        firstTreatmentHere: data.firstTreatmentHere,
        note: data.note ? data.note.trim() : null,
        filterNo: data.filterNum ? data.filterNum.trim() : 'Unknown'
      }
    })
    res.json(newPatient)
  } catch (e) {
    res.status(400).json({ status: 400, message: 'Failed to Add a Patient!' })
  }
})
patientPostAPIs.put('/editPatient', async (req, res) => {
  const { data, id } = req.body

  try {
    const patient = await prisma.patient.findUnique({ where: { id: Number(id) } })
    const newPatient = await prisma.patient.update({
      where: { id: Number(id) },
      data: {
        patientName:
          data.name && data.name.length > 0 && data.name !== '' ? data.name : patient.patientName,
        age: data.age && data.age.length > 0 && data.age !== '' ? data.age : patient.age,
        residentialId:
          data.residentialId && data.residentialId.length && data.residentialId !== '' > 0
            ? data.residentialId.trim()
            : patient.residentialId,
        birthDate:
          data.birthDate && data.birthDate.length && data.birthDate !== '' > 0
            ? data.birthDate
            : patient.birthDate,
        phoneNumber:
          data.phoneNumber && data.phoneNumber.length > 0 && data.phoneNymber !== ''
            ? data.phoneNumber.trim()
            : patient.phoneNumber,
        address:
          data.address && data.address.length > 0 && data.address !== ''
            ? data.address.trim()
            : patient.address,
        bloodType:
          data.bloodType && data.bloodType.length > 0 && data.bloodType !== ''
            ? data.bloodType
            : patient.bloodType,
        hight:
          data.hight && data.hight.length > 0 && data.hight !== '' ? data.hight : patient.hight,
        weight:
          data.weight && data.weight.length > 0 && data.weight !== ''
            ? data.weight
            : patient.weight,
        social:
          data.social && data.social.length > 0 && data.social !== ''
            ? data.social.trim()
            : patient.social,
        gender:
          data.gender && data.gender.length > 0 && data.gender !== ''
            ? data.gender.trim()
            : patient.gender,
        sicknessCause:
          data.sicknessCause && data.sicknessCause.length > 0 && data.sicknessCause !== ''
            ? data.sicknessCause.trim()
            : patient.sicknessCause,
        firstEverTreatment:
          data.firstEverTreatment &&
          data.firstEverTreatment.length > 0 &&
          data.firstEverTreatment !== ''
            ? data.firstEverTreatment
            : patient.firstEverTreatment,
        firstTreatmentHere:
          data.firstTreatmentHere &&
          data.firstTreatmentHere.length > 0 &&
          data.firstTreatmentHere !== ''
            ? data.firstTreatmentHere
            : patient.firstTreatmentHere,
        note:
          data.note && data.note.length > 0 && data.note !== '' ? data.note.trim() : patient.note,
        filterNo:
          data.filterNum && data.filterNum.length > 0 && data.filterNum !== ''
            ? data.filterNum.trim()
            : patient.filterNo
      }
    })
    res.json(newPatient)
  } catch (e) {
    res.status(400).json({ error: e.error })
  }
})

patientPostAPIs.delete('/deletePatient', async (req, res) => {
  const { id } = req.body

  try {
    const file = await prisma.file.findFirst({ where: { patientId: Number(id) } })
    if (file) {
      const deletedFiles = await prisma.file.delete({ where: { id: file.id } })
      fs.unlinkSync(deletedFiles.path)
    }

    const deletedPatient = await prisma.patient.delete({
      where: { id: Number(id) }
    })

    res.json(deletedPatient)
  } catch (e) {
    res.status(400).json({ error: e.error })
    // console.log(e)
  }
})

patientPostAPIs.post('/uploadFiles', upload.single('file'), async (req, res) => {
  const file = req.file
  try {
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' })
      console.log('no file')
    }
    const patientId = req.body.patientId
    if (!patientId) {
      return res.status(400).json({ message: 'User ID is required' })
      console.log('no id')
    }
    const filePath = `uploads/${file.filename}`
    const newFile = await prisma.file.create({
      data: {
        originalName: file.originalname,
        storedName: file.filename,
        size: file.size,
        mimeType: file.mimetype,
        path: filePath,
        patientId: Number(patientId)
      }
    })
    res.json({
      message: 'File uploaded successfully',
      fileId: newFile.id
    })
  } catch (e) {
    // console.log('Upload error:', e)
    res.status(500).json({ message: 'File upload failed' })
  }
})

patientPostAPIs.delete('/patientFiles/deleteFile/:fileId', async (req, res) => {
  try {
    const fileId = Number(req.params.fileId)

    // First get the file to find its path
    const file = await prisma.file.findFirst({
      where: { patientId: fileId }
    })

    if (!file) {
      return res.status(404).json({ message: 'File not found' })
    }

    // Delete from database
    const deletedFile = await prisma.file.delete({
      where: { id: file.id }
    })

    // Delete from filesystem
    fs.unlinkSync(file.path)

    res.json(deletedFile)
  } catch (error) {
    console.error('Delete error:', error)
    res.status(500).json({ message: 'Error deleting file' })
  }
})

module.exports = patientPostAPIs
