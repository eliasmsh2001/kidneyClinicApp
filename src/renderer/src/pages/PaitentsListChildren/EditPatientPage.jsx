import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getPatientDetals } from '../../util/apis/patientsGetAPI'
import { editPatient } from '../../util/apis/patientsPostAPIs'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useDispatch } from 'react-redux'
import EditPatientFrom from '../../components/ReuseableComponents/EditPatientForm'
import RedoIcon from '@mui/icons-material/Redo'
import { queryClient } from '../../util/apis/httpUrl'

const EditPatientPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [schedule, setSchedule] = useState('sunTueThu')

  const { data } = useQuery({
    queryKey: ['patients', 'patientDetails', id],
    queryFn: ({ signal }) => getPatientDetals({ signal, id })
  })

  const { mutate } = useMutation({
    mutationFn: editPatient,
    mutationKey: ['patients'],
    onSuccess: () => {
      dispatch(dialogActions.hadleOpenDialog('editPatientSuccess'))
      queryClient.invalidateQueries({ queryKey: ['patients', 'patientDetails', id] })
      navigate(`/patientsList/patientDetails/${id}`)
    }
  })

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    mutate({ data, id, schedule })
  }

  return (
    <div className="relative">
      <button
        className="bg-alert absolute right-2 -top-10 text-white p-2 rounded-full"
        onClick={() => navigate(`/patientsList/patientDetails/${id}`)}
      >
        <RedoIcon style={{ height: 30, width: 30, fill: 'white' }} />
      </button>
      <EditPatientFrom
        handleSubmit={handleSubmitForm}
        data={data}
        schedule={schedule}
        setSchedule={setSchedule}
      />
    </div>
  )
}

export default EditPatientPage
