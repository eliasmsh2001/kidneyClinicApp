import url from './httpUrl'

export const getAllPatient = async ({ signal, searchTerm }) => {
  let res

  if (!searchTerm) {
    res = await fetch(`${url}/patients/get/patients`)
  }

  if (searchTerm) {
    res = await fetch(`${url}/patients/get/patients?term=${searchTerm}`)
  }

  if (!res.ok) {
    throw Error('Failed while fetching patients')
  }

  const data = await res.json()
  return data
}

export const getPatientDetals = async ({ id }) => {
  if (!id) {
    throw Error('This Path Does Not Exit!!')
  }

  const res = await fetch(`${url}/patients/get/patientDetail?id=${id}`)

  if (!res.ok) {
    throw Error('This Patient Does Not Exist')
  }

  const data = await res.json()
  return data
}

export const getPatientAnalysis = async ({ id }) => {
  if (!id) {
    throw Error('This Path Does Not Exit!!')
  }

  const res = await fetch(`${url}/patients/get/patientAnalysis?id=${id}`)

  if (!res.ok) {
    throw Error('This Patient Does Not Exist')
  }

  const data = await res.json()
  return data
}

export const getPatientFiles = async ({ id }) => {
  if (!id) {
    throw Error('This Path Does Not Exit!!')
  }

  const res = await fetch(`${url}/patients/get/patientDetail/patientFile?id=${id}`)

  if (!res.ok) {
    throw Error('This Patient Does Not Exist')
  }

  const data = await res.json()
  return data
}

export const getTodaysAttendance = async () => {
  const response = await fetch(`${url}/patients/get/attendants`)

  if (!response.ok) {
  }

  const data = await response.json()
  return data
}
