import clsx from 'clsx'
import React from 'react'

const SessionsList = ({ data, isPending, isError, setSelectedSession, setPageView }) => {
  return (
    <section className="flex flex-col h-full my-2">
      {isPending && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong</h1>}

      {data && (
        <table className="border-2 border-mainText mt-8">
          <thead>
            <tr className="border-2 border-mainText bg-mainText text-white font-bold">
              <th className="w-20 border-r-2">DATE</th>
              <th className="w-20 border-r-2">DAY</th>
              <th className="w-44 border-r-2 text-xs">TECH NAME</th>
              <th className="w-16 border-r-2">SESSION TYPE</th>
              <th className="w-16 border-r-2">STARTING TIME</th>
              <th className="w-12 border-r-2">DURATION</th>
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
                <td>{item?.sessionDuration} hrs</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default SessionsList
