import clsx from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router'

const PatientsListMainTable = ({ data }) => {
  const cellStyle = `text-sm font-semibold text-mainText border-l-2 border-black/35 px-2 py-1`
  const navigate = useNavigate()

  return (
    <table className=" rounded-xl border-2 border-mainBlue ">
      <thead>
        <tr className="bg-mainBlue text-white text-sm font-bold">
          <th className="w-32 py-1">PATIENT NO.</th>
          <th className="w-72 py-1">PATIENT NAME</th>
          <th className="w-52 py-1">SOCIAL SECURITY</th>
          <th className="w-14 py-1">AGE</th>
          <th className="w-52 py-1">FAILURE CAUSE</th>
          <th className="w-32 py-1">
            FIRST DIALYSIS <br /> <span className="text-xs">(elsewhere)</span>
          </th>
          <th className="w-36 py-1">
            FIRST DIALYSIS <br /> <span className="text-xs">(in clinic)</span>
          </th>
          <th className="w-36 py-1">SCHEDULE</th>
          <th className="w-36 py-1">TOTAL SESSIONS</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr
                onClick={() => {
                  navigate(`patientDetails/${item.id}`)
                }}
                className={clsx(
                  'border-y-2 border-black/35 hover:bg-secondaryText/15 duration-200 cursor-pointer',
                  { 'bg-mainText/15': index % 2 === 0 }
                )}
              >
                <td className={`${cellStyle} w-32`}>{item.id}</td>
                <td className={`${cellStyle} w-72`}>{item?.patientName}</td>
                <td className={`${cellStyle} w-52`}>{item?.residentialId}</td>
                <td className={`${cellStyle} w-14`}>{item?.age}</td>
                <td className={`${cellStyle}`}>{item?.sicknessCause}</td>
                <td className={`${cellStyle}`}>{item?.firstEverTreatment}</td>
                <td className={`${cellStyle}`}>{item?.firstTreatmentHere}</td>
                <td className={`${cellStyle}`}>
                  {item?.schedule === 'sunTueThu' ? 'San/Tue/Thu' : 'Sat/Mon/Wed'}
                </td>
                <td className={`${cellStyle}`}>{item?.sessions?.length}</td>
              </tr>
              {(data.indexOf(item) + 1) % 20 === 0 && <div className="break-before-page" />}
            </React.Fragment>
          ))}
      </tbody>
    </table>
  )
}

export default PatientsListMainTable
