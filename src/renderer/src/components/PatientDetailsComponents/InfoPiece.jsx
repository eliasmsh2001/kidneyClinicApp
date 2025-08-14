import React from 'react'

const PersonalInfoPieces = ({ data }) => {
  const infoPieces = [
    {
      key: 1,
      label: 'الاسم',
      value: data?.patientName
    },
    {
      key: 2,
      label: 'الرقم الوطني',
      value: data?.residentialId
    },
    {
      key: 3,
      label: 'العمر (عند يوم التسجيل)',
      value: data?.age
    },
    {
      key: 4,
      label: 'الجنس',
      value: data?.gender
    },
    {
      key: 5,
      label: 'الحالة الإجتماعية',
      value: data?.social
    },
    {
      key: 6,
      label: 'تاريخ الميلاد',
      value: data?.birthDate
    },
    {
      key: 7,
      label: 'رقم الهاتف',
      value: data?.phoneNumber
    },
    {
      key: 8,
      label: 'عنوان السكن',
      value: data?.address
    },
    {
      key: 9,
      label: 'فصيلة الدم',
      value: data?.bloodType
    },
    {
      key: 10,
      label: 'الطول',
      value: data?.hight + 'CM'
    },
    {
      key: 11,
      label: 'الوزن',
      value: data?.weight + 'KG'
    }
  ]
  return (
    <div className="h-32 items-start flex flex-col flex-wrap  gap-3 ">
      {infoPieces.map((item) => (
        <div key={item.key} className="flex gap-2 min-w-48">
          <h1 className="text-mainBlue font-extrabold text-sm">{item.label} :</h1>
          <h1 className="text-stone-500 font-bold text-sm">{item.value}</h1>
        </div>
      ))}
    </div>
  )
}

export default PersonalInfoPieces
