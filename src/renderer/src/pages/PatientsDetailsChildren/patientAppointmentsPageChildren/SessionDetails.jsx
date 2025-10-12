import React, { useState } from 'react'
import RedoIcon from '@mui/icons-material/Redo'
import clsx from 'clsx'
import { useMutation } from '@tanstack/react-query'
import { deleteSession, editbalance } from '../../../util/apis/sessionsAPIs'
import { queryClient } from '../../../util/apis/httpUrl'
import { useDispatch } from 'react-redux'
import { sessionsActions } from '../../../util/slicers/sessionsSlicer'
import { dialogActions } from '../../../util/slicers/dialogSlicer'
import CheckIcon from '@mui/icons-material/Check'

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

  const { mutate: editPatientBalance } = useMutation({
    mutationKey: ['editBalance'],
    mutationFn: editbalance,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sessionDetails'] })
      queryClient.invalidateQueries({ queryKey: ['sessions'] })
    },

    onError(error) {
      // console.log(error)
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

      <div className="flex justify-center gap-4 flex-wrap min-w-[76rem] max-w-[90rem] py-2 bg-mainText px-8 rounded-md">
        <h1 className="text-lg font-bold text-white">
          {' '}
          Date: <span className="text-stone-300">{data?.date}</span>
        </h1>
        <h1 className="text-lg font-bold text-white">
          {' '}
          Technician's name: <span className="text-stone-300">{data?.techName}</span>
        </h1>
        <h1 className="text-lg font-bold text-white">
          {' '}
          Device No.: <span className="text-stone-300">{data?.deviceNo}</span>
        </h1>
        <h1 className="text-lg font-bold text-white">
          {' '}
          Session Type: <span className="text-stone-300">{data?.sessionType}</span>
        </h1>
        <h1 className="text-lg font-bold text-white">
          {' '}
          Starting Time: <span className="text-stone-300">{data?.startingTime}</span>
        </h1>
        <h1 className="text-lg font-bold text-white">
          {' '}
          Duration:{' '}
          <span className="text-stone-300">
            {data?.sessionDuration} hr{data?.sessionDuration > 1 && 's'}
          </span>
        </h1>
      </div>

      {/* ===================================================================================================
      ===================================================================================================
      =================================================================================================== */}

      <div className="w-[70rem] flex justify-between items-start border-b-2 border-mainText py-4">
        <div className="flex flex-col h-44 justify-start items-start gap-4 flex-wrap ">
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            Anticoagulant Used: <span className="text-stone-500">{data?.anticoagulantUsed} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            Ultrafiltration Rate:{' '}
            <span className="text-stone-500">{data?.ultrafiltrationRate} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            KTV: <span className="text-stone-500">{data?.ktv} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            URR: <span className="text-stone-500">{data?.urr} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            WT. Pre HD: <span className="text-stone-500">{data?.wtPreHD} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            WT. Post HD: <span className="text-stone-500">{data?.wtPostHD} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            HD. Starting: <span className="text-stone-500">{data?.HDStarting} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            Hiparin Rate: <span className="text-stone-500">{data?.heparinRate} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            Hiparin Bolus: <span className="text-stone-500">{data?.heparinBolus} </span>
          </h1>
          <h1 className="text-lg font-bold text-mainText">
            {' '}
            UF. Goal: <span className="text-stone-500">{data?.UFGoal} </span>
          </h1>
        </div>

        <div className="py-2 flex flex-col gap-2 items-end">
          <div className="flex items-center justify-center gap-4">
            <label className="text-mainText font-bold text-xl" htmlFor="">
              Patient Intake
            </label>
            <input
              className="border-2 border-mainText outline-0 w-32 p-2 rounded-md"
              type="text"
              name=""
              id=""
              placeholder={data?.intake}
              onChange={(e) =>
                editPatientBalance({ sessionId: data?.id, field: 'intake', value: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <label className="text-mainText font-bold text-xl" htmlFor="">
              Patient Output
            </label>
            <input
              className="border-2 border-mainText outline-0 w-32 p-2 rounded-md"
              type="text"
              name=""
              id=""
              placeholder={data?.output}
              onChange={(e) =>
                editPatientBalance({ sessionId: data?.id, field: 'output', value: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-center gap-4 text-mainText">
            <h1 className=" font-bold text-xl" htmlFor="">
              Patient Balance
            </h1>{' '}
            --&gt;
            <h2
              className=" bg-mainBlue text-white text-xl text-center font-extrabold w-32 p-2 rounded-md my-4"
              type="text"
              name=""
              id=""
            >
              {data?.balance}
            </h2>
          </div>
        </div>
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
              <td>{item?.cramps === 'checked' ? <CheckIcon /> : ''}</td>
              <td>{item?.hematoma === 'checked' ? <CheckIcon /> : ''}</td>
              <td>{item?.chestPain === 'checked' ? <CheckIcon /> : ''}</td>
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
