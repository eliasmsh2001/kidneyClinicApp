import url from './httpUrl'

export const addNewSession = async (data) => {
  const response = await fetch(`${url}/sessions/newSession`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw Error('Something went wrong!')
  }

  const newData = response.json()
  return newData
}

export const getPatientSessions = async ({ id }) => {
  const response = await fetch(`${url}/sessions/getSessions?id=${id}`)

  if (!response.ok) {
    throw Error('could not get sessions')
  }

  const data = response.json()
  return data
}

export const getSesstionDetails = async ({ id }) => {
  const response = await fetch(`${url}/sessions/getSessionDetails?id=${id}`)

  if (!response.ok) {
    throw Error('could not get sessions')
  }

  const data = response.json()
  return data
}

export const deleteSession = async ({ id }) => {
  const response = await fetch(`${url}/sessions/deleteSession`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })

  if (!response.ok) {
    throw Error('Something went wrong!')
  }
  const data = response.json()
  return data
}

export const editSession = async ({ data, sessionHours, sessionId }) => {
  const response = await fetch(`${url}/sessions/editSession`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data, sessionHours, sessionId })
  })

  if (!response.ok) {
    throw Error('Something went wrong!')
  }
  const newData = response.json()
  return newData
}
