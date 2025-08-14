import React, { useState } from 'react'
import RedoIcon from '@mui/icons-material/Redo'
import clsx from 'clsx'
import { useMutation } from '@tanstack/react-query'
import { deleteSession } from '../../../util/apis/sessionsAPIs'
import { queryClient } from '../../../util/apis/httpUrl'
import { useDispatch } from 'react-redux'
import { sessionsActions } from '../../../util/slicers/sessionsSlicer'
import { dialogActions } from '../../../util/slicers/dialogSlicer'

const SessionDetails = ({ data, setPageView }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const dispatch = useDispatch()

  const { mutate } = useMutation({
    mutationKey: ['deleteSession'],
    mutationFn: deleteSession,
    onSuccess: () => {
      setIsDeleting(false)
      setPageView('list')
      queryClient.invalidateQueries({ queryKey: ['sessions'] })
    }
  })

  return (
    <section className="relative flex justify-center items-center flex-col">
      <button
        className="bg-alert absolute  right-2 rounded-full top-5 z-20 text-white p-2 "
        onClick={() => setPageView('list')}
      >
        <RedoIcon style={{ height: 30, width: 30, fill: 'white' }} />
      </button>

      <div className="flex justify-center gap-4 flex-wrap  py-2">
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Date: <span className="text-stone-500">{data?.date}</span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Technician's name: <span className="text-stone-500">{data?.techName}</span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Device No.: <span className="text-stone-500">{data?.deviceNo}</span>
        </h1>
      </div>
      <div className="flex justify-center gap-4 flex-wrap border-b-2 border-mainText py-2">
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Session Type: <span className="text-stone-500">{data?.sessionType}</span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Starting Time: <span className="text-stone-500">{data?.startingTime}</span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Duration: <span className="text-stone-500">{data?.sessionDuration} hrs</span>
        </h1>
      </div>

      <div className="flex justify-center gap-4 flex-wrap border-b-2 border-mainText py-4">
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Ultrafiltration Rate: <span className="text-stone-500">{data?.ultrafiltrationRate} </span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          KTV: <span className="text-stone-500">{data?.ktv} </span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          URR: <span className="text-stone-500">{data?.urr} </span>
        </h1>
      </div>
      <div className="flex justify-center gap-4 flex-wrap border-b-2 border-mainText py-2 w-[60rem]">
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          WT. Pre HD: <span className="text-stone-500">{data?.wtPreHD} </span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          WT. Post HD: <span className="text-stone-500">{data?.wtPostHD} </span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          HD. Starting: <span className="text-stone-500">{data?.HDStarting} </span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Hiparin Rate: <span className="text-stone-500">{data?.heparinRate} </span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          Hiparin Bolus: <span className="text-stone-500">{data?.heparinBolus} </span>
        </h1>
        --
        <h1 className="text-lg font-bold text-mainText">
          {' '}
          UF. Goal: <span className="text-stone-500">{data?.UFGoal} </span>
        </h1>
      </div>

      <table className="border-2 border-mainText mt-8">
        <thead>
          <tr className="border-2 border-mainText bg-mainText text-white font-bold">
            <th className="w-20 border-r-2">TIME</th>
            <th className="w-20 border-r-2">B.P</th>
            <th className="w-20 border-r-2 text-xs">PULSE RATE</th>
            <th className="w-16 border-r-2">TEMP</th>
            <th className="w-24 border-r-2">R.B.S</th>
            <th className="w-24 border-r-2">I.V.F</th>
            <th className="w-72 border-r-2">DRUGS</th>
            <th className="w-20 text-xs border-r-2">VOMITING</th>
            <th className="w-16 border-r-2 text-xs">CRAMPS</th>
            <th className="w-20 border-r-2 text-xs">HEMATOMA</th>
            <th className="w-20 border-r-2 text-xs">CHEST PAIN</th>
          </tr>
        </thead>
        <tbody>
          {data?.hours?.map((item, index) => (
            <tr
              className={clsx('border-b-2 border-mainText font-bold text-mainText text-center', {
                'bg-mainBlue/25': index % 2 === 0
              })}
              key={item?.id}
            >
              <td>{item?.time}</td>
              <td>{item?.bloodPressure}</td>
              <td>{item?.pulseRate}</td>
              <td>{item?.temperature}</td>
              <td>{item?.rbs}</td>
              <td>{item?.ivf}</td>
              <td>{item?.drugs}</td>
              <td>{item?.vomitting}</td>
              <td>{item?.cramps}</td>
              <td>{item?.hematoma}</td>
              <td>{item?.chestPain}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!isDeleting && (
        <div className="my-10 flex gap-4">
          <button
            className="bg-alert text-white font-bold w-36 p-2"
            onClick={() => setIsDeleting(true)}
          >
            DELETE SESSION
          </button>
          <button
            onClick={() => {
              dispatch(sessionsActions.prepareDataToEdit({ data: data, sessionHours: data?.hours }))
              dispatch(dialogActions.hadleOpenDialog('editSession'))
            }}
            className="bg-mainBlue text-white font-bold w-36 p-2"
          >
            EDIT SESSION
          </button>
        </div>
      )}

      {isDeleting && (
        <div className="my-10 flex flex-col items-center">
          <h1 className="text-alert font-bold">Are you sure you want to delete this session? </h1>
          <h1 className="text-mainText font-bold text-xs">data cannot be returned</h1>
          <div className="flex flex-row gap-4 my-5">
            <button
              onClick={() => mutate({ id: data?.id })}
              className="bg-alert text-white font-bold w-36 p-2"
            >
              Confirm
            </button>
            <button
              onClick={() => setIsDeleting(false)}
              className="bg-mainBlue text-white font-bold w-36 p-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default SessionDetails
