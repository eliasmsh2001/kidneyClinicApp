import React from 'react'
import PatientsListMainTable from '../Tables/PatientsListMainTable'
import logoimg from '../../assets/images.jpg'

const PrintablePatientsList = ({ data, contentRef }) => {
  return (
    <main ref={contentRef}>
      <div className="fixed top-5 flex gap-64 px-8 py-4">
        <img src={logoimg} alt="" className=" size-36" />
        <div className="flex flex-col gap-2 items-center text-center text-mainText font-bold text-lg">
          <h1>العيادة المجمعة زاوية الدهماني</h1>
          <h1>قسم غسيل الكلى</h1>
          <h1>قائمة جميع الحالات المسجلة</h1>
        </div>
      </div>
      <div className="translate-y-52">
        <PatientsListMainTable data={data} />
      </div>
    </main>
  )
}

export default PrintablePatientsList
