import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { getPatientDetals } from '../../util/apis/patientsGetAPI'
import RedoIcon from '@mui/icons-material/Redo'
import PatientInfo from '../../components/PatientDetailsComponents/PatientInfo'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import AddIcon from '@mui/icons-material/Add'

const PatientDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useDispatch()

  const { data } = useQuery({
    queryKey: ['patients', 'patientDetails', id],
    queryFn: ({ signal }) => getPatientDetals({ signal, id })
  })

  const btns = [
    {
      key: 1,
      title: 'SESSIONS',
      style: clsx(' py-2 px-10  font-bold text-xs', {
        'bg-white text-mainText rounded-t-lg':
          location.pathname === `/patientsList/patientDetails/${id}`,
        'bg-secondaryText text-white': location.pathname !== `/patientsList/patientDetails/${id}`
      }),
      function: () => navigate(`/patientsList/patientDetails/${id}`)
    },
    {
      key: 2,
      title: 'TESTS',
      style: clsx(' py-2 px-10  font-bold text-xs', {
        'bg-white text-mainText  rounded-t-lg':
          location.pathname === `/patientsList/patientDetails/${id}/patientTests`,
        'bg-secondaryText text-white  ':
          location.pathname !== `/patientsList/patientDetails/${id}/patientTests`
      }),
      function: () => navigate('patientTests')
    },
    {
      key: 3,
      title: 'REPORT',
      style: clsx(' py-2 px-10  font-bold text-xs', {
        'bg-white text-mainText rounded-t-lg':
          location.pathname === `/patientsList/patientDetails/${id}/patientReport`,
        'bg-secondaryText text-white':
          location.pathname !== `/patientsList/patientDetails/${id}/patientReport`
      }),
      function: () => navigate('patientReport')
    }
  ]

  return (
    <main className="relative overflow-y-scroll h-[40rem]">
      <PatientInfo data={data} />

      <div className=" flex  flex-row-reverse justify-between bg-secondaryText ">
        <div className="flex flex-row-reverse">
          <button
            className="bg-alert  right-2 -top-5 z-20 text-white p-2 "
            onClick={() => navigate('..')}
          >
            {/* <RedoIcon style={{ height: 30, width: 30, fill: 'white' }} />
             */}
            GO BACK
          </button>
          <div className="pt-2 flex  flex-row-reverse pr-16">
            {btns.map((item) => (
              <button key={item.key} className={item.style} onClick={item.function}>
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => dispatch(dialogActions.hadleOpenDialog('newSession'))}
          className="bg-unique w-48 py-2 text-white flex justify-center items-center hover:opacity-45 duration-200 "
        >
          NEW SESSION <AddIcon style={{ fill: 'white' }} />
        </button>
      </div>
      <Outlet />
    </main>
  )
}

export default PatientDetailsPage
