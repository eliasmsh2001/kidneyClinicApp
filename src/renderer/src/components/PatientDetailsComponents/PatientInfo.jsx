import React, { useState } from 'react'
import PersonalInfoPieces from './InfoPiece'
import femaleImg from '../../assets/female-placeholder.png'
import maleImg from '../../assets/male-placeholder.png'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import OtherInfoPiece from './OtherInfoPiece'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useNavigate, useParams } from 'react-router'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import clsx from 'clsx'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

const PatientInfo = ({ data }) => {
  const [isExpanded, setIsexpanded] = useState(true)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const btns = [
    {
      key: 1,
      title: 'الملفات',
      icon: <ContactPageIcon style={{ fill: 'white', width: 25, height: 25 }} />,
      style: ' bg-unique rounded-full p-1 hover:opacity-55 duration-200',
      function: () => navigate(`/patientsList/patientFiles/${id}`)
    },
    {
      key: 2,
      title: 'تعديل',
      icon: <EditIcon style={{ fill: 'white', width: 25, height: 25 }} />,
      style: ' bg-secondaryText rounded-full p-1 hover:opacity-55 duration-200',
      function: () => navigate(`/patientsList/editPatient/${id}`)
    },
    {
      key: 3,
      title: 'مسح',
      icon: <DeleteIcon style={{ fill: 'white', width: 25, height: 25 }} />,
      style: ' bg-alert rounded-full p-1 hover:opacity-55 duration-200',
      function: () => dispatch(dialogActions.hadleOpenDialog('deletePatientConfirmation'))
    }
  ]
  return (
    <section
      className={clsx('pb-s px-12 w-full border-b-2 flex gap-4 items-center relative', {
        'h-12 ': !isExpanded,
        'h-48 ': isExpanded
      })}
      dir="rtl"
    >
      {isExpanded ? (
        <img
          src={data?.gender === 'ذكر' ? maleImg : femaleImg}
          alt=""
          className="rounded-xl h-44"
        />
      ) : (
        <div className="w-44" />
      )}
      <div className="flex gap-4">
        <div className={clsx('flex gap-4 items-center px-8 absolute top-1 right-10')}>
          {btns.map((item) => (
            <button key={item.key} className={item.style} onClick={item.function}>
              {item.icon}
            </button>
          ))}
        </div>
        {isExpanded ? (
          <div
            className="h-full min-w-[35rem] py-6 px-4 gap-2 border-2 border-stone-500 flex  rounded-lg relative"
            dir="rtl"
          >
            <h1 className="absolute -top-4 right-5 bg-white px-1 text-stone-500 font-extrabold text-lg">
              بيانات شخصية
            </h1>
            <PersonalInfoPieces data={data} />
          </div>
        ) : (
          <div
            className=" h-12 px-6 gap-10 border-2 border-stone-500 flex rounded-lg  justify-center items-center"
            dir="rtl"
          >
            <div className="flex gap-2 min-w-48">
              <h1 className="text-mainBlue font-extrabold text-sm">اسم الحالة :</h1>
              <h1 className="text-stone-500 font-bold text-sm">{data?.patientName}</h1>
            </div>
            <div className="flex gap-2 ">
              <h1 className="text-mainBlue font-extrabold text-sm">الجنس :</h1>
              <h1 className="text-stone-500 font-bold text-sm">{data?.gender}</h1>
            </div>
            <div className="flex gap-2 ">
              <h1 className="text-mainBlue font-extrabold text-sm">الوزن :</h1>
              <h1 className="text-stone-500 font-bold text-sm">{data?.weight}</h1>
            </div>
            <div className="flex gap-2 ">
              <h1 className="text-mainBlue font-extrabold text-sm">الطول :</h1>
              <h1 className="text-stone-500 font-bold text-sm">{data?.hight}</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="text-mainBlue font-extrabold text-sm">فصيلة الدم :</h1>
              <h1 className="text-stone-500 font-bold text-sm">{data?.bloodType}</h1>
            </div>
          </div>
        )}
        {isExpanded && (
          <div
            className="h-full min-w-[20rem] py-6 px-4 border-2 border-stone-500 flex  rounded-lg relative"
            dir="rtl"
          >
            <h1 className="absolute -top-4 right-5 bg-white px-1 text-stone-500 font-extrabold text-lg">
              بيانات أخرى
            </h1>
            <OtherInfoPiece data={data} />
          </div>
        )}
      </div>
      <button
        onClick={() => setIsexpanded(!isExpanded)}
        className="h-6 w-24 rounded-md absolute -bottom-4 left-1/2 bg-mainBlue"
      >
        {isExpanded ? (
          <ArrowDropUpIcon style={{ fill: 'white' }} className="h-44" />
        ) : (
          <ArrowDropDownIcon style={{ fill: 'white' }} />
        )}
      </button>
    </section>
  )
}

export default PatientInfo
