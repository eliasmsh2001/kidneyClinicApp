import React from 'react'

const OtherInfoPiece = ({ data }) => {
  const info = [
    {
      key: 12,
      label: 'أسباب الفشل',
      value: data?.sicknessCause ? data?.sicknessCause : 'Unknown'
    },
    {
      key: 13,
      label: 'تاريخ أول غسيل',
      value: data?.firstEverTreatment ? data?.firstEverTreatment : 'Unknown'
    },
    {
      key: 14,
      label: 'أول غسيل بالمجمع',
      value: data?.firstTreatmentHere ? data?.firstTreatmentHere : 'Unknown'
    },
    {
      key: 15,
      label: 'رقم الفلتر',
      value: data?.filterNo ? data?.filterNo : 'Unknown'
    }
  ]

  return (
    <div className="h-32 items-start flex flex-col flex-wrap  gap-3 ">
      {info.map((item) => (
        <div key={item.key} className="flex gap-2 min-2-48 ">
          <h1 className="text-mainBlue font-extrabold text-sm">{item.label} :</h1>
          <h1 className="text-stone-500 font-bold text-sm">{item.value}</h1>
        </div>
      ))}
    </div>
  )
}

export default OtherInfoPiece
