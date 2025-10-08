import clsx from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router'

const AttendantsListTable = ({ data }) => {
  const cellStyle = `text-sm font-semibold text-mainText border-l-2 border-black/35 px-2 py-1`
  const navigate = useNavigate()

  return (
    Array.isArray(data) && (
      <table className=" rounded-xl border-2 border-mainBlue ">
        <thead>
          <tr className="bg-mainBlue text-white text-sm font-bold">
            <th className="w-32 py-1">PATIENT NO.</th>
            <th className="w-72 py-1">PATIENT NAME</th>
            <th className="w-52 py-1">SOCIAL SECURITY</th>
            <th className="w-26 py-1">LATEST SESSION</th>
            <th className=" "></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <React.Fragment key={item.id}>
                <tr
                  className={clsx('border-y-2 border-black/35 ', {
                    'bg-mainText/15': index % 2 === 0 && !item?.attended,
                    'bg-green-300': item?.attended
                  })}
                >
                  <td className={`${cellStyle} w-32`}>{item.id}</td>
                  <td className={`${cellStyle} w-72`}>{item?.patientName}</td>
                  <td className={`${cellStyle} w-52`}>{item?.residentialId}</td>
                  <td className={`${cellStyle} w-36`}>{item?.latestSesstion}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/patientsList/patientDetails/${item.id}`)
                      }}
                      className="bg-green-500 text-sm font-bold text-white p-2 hover:opacity-40 duration-200"
                    >
                      DETAILS
                    </button>
                    {/* <button className="bg-alert text-sm font-bold text-white p-2 hover:opacity-40 duration-200">
                      ABSENT
                    </button> */}
                  </td>
                </tr>
                {(data.indexOf(item) + 1) % 15 === 0 && <div className="break-before-page" />}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    )
  )
}

export default AttendantsListTable
