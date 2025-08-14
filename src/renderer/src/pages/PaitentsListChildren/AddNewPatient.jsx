import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import PatientFrom from '../../components/ReuseableComponents/PatientFrom'
import { useMutation } from '@tanstack/react-query'
import { postNewPatient } from '../../util/apis/patientsPostAPIs'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { queryClient } from '../../util/apis/httpUrl'
import RedoIcon from '@mui/icons-material/Redo'

const AddNewPatient = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [AddingError, setAddingError] = useState('')

  const { mutate } = useMutation({
    mutationFn: postNewPatient,
    mutationKey: ['patients'],
    onSuccess: () => {
      dispatch(dialogActions.hadleOpenDialog('newPatientSuccess'))
      queryClient.invalidateQueries({ queryKey: ['patients'] })
    },
    onError: (error) => {
      console.log(error.message)
      setAddingError(error.message)
    }
  })

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    mutate(data)
  }
  return (
    <section className="relative">
      <button
        className="bg-alert absolute right-5 -top-10 text-white p-2 rounded-full"
        onClick={() => navigate('..')}
      >
        <RedoIcon style={{ height: 30, width: 30, fill: 'white' }} />
      </button>
      <h1 className="text-center px-24  text-mainText text-xl font-bold">حالة جديدة</h1>
      <PatientFrom handleSubmit={handleSubmitForm} error={AddingError} />
    </section>
  )
}

export default AddNewPatient
