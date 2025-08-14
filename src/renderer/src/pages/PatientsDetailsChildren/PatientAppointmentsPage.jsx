import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPatientSessions, getSesstionDetails } from '../../util/apis/sessionsAPIs'
import { useParams } from 'react-router'
import SessionsList from './patientAppointmentsPageChildren/SessionsList'
import SessionDetails from './patientAppointmentsPageChildren/SessionDetails'

const PatientAppointmentsPage = () => {
  const params = useParams()
  const [selectedSession, setSelectedSession] = useState('')
  const [pageView, setPageView] = useState('list')

  const {
    data: allSessions,
    isError: sessionsIsError,
    error,
    isPending: sessionsIsPending
  } = useQuery({
    queryKey: ['sessions'],
    queryFn: () => getPatientSessions({ id: params.id })
  })

  const {
    data: sesstionDetails,
    isError: sessionDetailsIsError,
    isPending: sesssionDetailsIsPanding,
    error: sessionDetailsError
  } = useQuery({
    queryKey: ['sessionDetails', selectedSession],
    queryFn: () => getSesstionDetails({ id: selectedSession })
  })

  return (
    <section className="p-4 ">
      {pageView === 'list' && (
        <SessionsList
          data={allSessions}
          isPending={sessionsIsPending}
          isError={sessionsIsError}
          setSelectedSession={setSelectedSession}
          setPageView={setPageView}
        />
      )}
      {pageView === 'details' && (
        <SessionDetails data={sesstionDetails} setPageView={setPageView} />
      )}
    </section>
  )
}

export default PatientAppointmentsPage
