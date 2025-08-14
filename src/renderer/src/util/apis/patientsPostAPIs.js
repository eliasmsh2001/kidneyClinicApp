import url from './httpUrl'

export const postNewPatient = async (data) => {
  const response = await fetch(`${url}/patients/post/newPatient`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })

  if (!response.ok) {
    // throw Error('Failed to post a new patient!!')
    if (response.status === 403) {
      throw Error('!!تأكد من إدخال البيانات الأساسية')
    }
  }

  const newData = await response.json()
  return newData
}
export const editPatient = async ({ data, id }) => {
  const response = await fetch(`${url}/patients/post/editPatient`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data, id })
  })

  if (!response.ok) {
    throw Error('Failed to post a new patient!!')
  }

  const newData = await response.json()
  return newData
}
export const deletePatient = async ({ id }) => {
  const response = await fetch(`${url}/patients/post/deletePatient`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })

  if (!response.ok) {
    throw Error('Failed to post a new patient!!')
  }

  const newData = await response.json()
  return newData
}

export const uploadPatientFiles = async (formData) => {
  const response = await fetch(`${url}/patients/post/uploadFiles`, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw Error('Faild to upload files')
  }

  const data = await response.json()
  return data
}

export const deletePatientFiles = async ({ id }) => {
  const response = await fetch(`${url}/patients/post/patientFiles/deleteFile/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw Error('something went wrong!')
  }

  const data = await response.json()
  return data
}
