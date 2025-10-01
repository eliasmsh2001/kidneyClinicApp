import clsx from 'clsx'
import React from 'react'

const SessionsList = ({ analysis, data, isPending, isError, setSelectedSession, setPageView }) => {
  return (
    <section className="flex gap-32 h-full my-2 justify-center">
      {isPending && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong</h1>}

      {data && (
        <table className="border-2 border-mainText mt-8 w-[70rem]">
          <thead>
            <tr className="border-2 border-mainText bg-mainText text-white font-bold">
              <th className="w-20 border-r-2">DATE</th>
              <th className="w-20 border-r-2">DAY</th>
              <th className="w-32 border-r-2 text-xs">TECH NAME</th>
              <th className="w-24 border-r-2">SESSION TYPE</th>
              <th className="w-16 border-r-2">STARTING TIME</th>
              <th className="w-12 border-r-2 border-mainText">DURATION</th>
              <th className="w-12 border-r-2 border-mainText">BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                onClick={() => {
                  setSelectedSession(item.id)
                  setPageView('details')
                }}
                className={clsx(
                  'border-b-2 border-mainText font-bold text-mainText text-center hover:bg-stone-200 opacity-80 duration-200 cursor-pointer',
                  {
                    'bg-mainBlue/25': index % 2 === 0
                  }
                )}
                key={item?.id}
              >
                <td>{item?.date}</td>
                <td>{item?.day}</td>
                <td>{item?.techName}</td>
                <td>{item?.sessionType}</td>
                <td>{item?.startingTime}</td>
                <td>
                  {item?.sessionDuration} hr{data?.sessionDuration > 1 && 's'}
                </td>
                <td>{item?.balance} </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* // =====================================================================
      // =====================================================================
      // =====================================================================
      // ===================================================================== */}

      {analysis && (
        <ul className="flex flex-col items-start gap-4 mt-8">
          <li className="text-alert font-extrabold text-xs text-center w-full italic">
            BLOOD PRESSURE
          </li>
          <li className="flex gap-2 items-center justify-center">
            <h1 className="text-mainText font-extrabold">AVERAGE BP</h1> --&gt;
            <h1 className="text-white bg-mainBlue font-extrabold p-2 rounded-md">
              {analysis?.averageBp}
            </h1>
          </li>
          <li className="flex gap-2 items-center justify-center">
            <h1 className="text-mainText font-extrabold">LOWEST BP</h1> --&gt;
            <h1 className="text-white bg-mainBlue font-extrabold p-2 rounded-md">
              {analysis?.lowestBp}
            </h1>
          </li>
          <li className="flex gap-2 items-center justify-center  ">
            <h1 className="text-mainText font-extrabold">HIGHEST BP</h1> --&gt;
            <h1 className="text-white bg-mainBlue font-extrabold p-2 rounded-md">
              {analysis?.highestBp}
            </h1>
          </li>
          <li className="text-alert font-extrabold text-xs text-center w-full italic pt-4 border-t-2 border-mainBlue">
            PULSE RATE
          </li>
          <li className="flex gap-2 items-center justify-center  ">
            <h1 className="text-mainText font-extrabold">AVERAGE PR</h1> --&gt;
            <h1 className="text-white bg-mainBlue font-extrabold p-2 rounded-md">
              {analysis?.averagePulseRate} bpm
            </h1>
          </li>
          <li className="flex gap-2 items-center justify-center  ">
            <h1 className="text-mainText font-extrabold">HIGHEST PR</h1> --&gt;
            <h1 className="text-white bg-mainBlue font-extrabold p-2 rounded-md">
              {analysis?.highestPulseRate} bpm
            </h1>
          </li>
          <li className="flex gap-2 items-center justify-center  ">
            <h1 className="text-mainText font-extrabold">LOWEST PR</h1> --&gt;
            <h1 className="text-white bg-mainBlue font-extrabold p-2 rounded-md">
              {analysis?.lowstPulseRate} bpm
            </h1>
          </li>
        </ul>
      )}
    </section>
  )
}

export default SessionsList
