import React, { useState, useRef } from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import PrintIcon from '@mui/icons-material/Print'
import { useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getAllPatient } from '../../util/apis/patientsGetAPI'
import PatientsListMainTable from '../../components/Tables/PatientsListMainTable'
import { useReactToPrint } from 'react-to-print'
import PrintablePatientsList from '../../components/printableComponents/PrintablePatientsList'

const PatientsOverView = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState(null)
  const contentRef = useRef(null)

  const { data, isError, error } = useQuery({
    queryKey: ['patients', searchTerm],
    queryFn: ({ signal }) => getAllPatient({ signal, searchTerm })
  })

  const onSearchChange = (value) => {
    setSearchTerm(value)
  }

  const reactToPrintFn = useReactToPrint({ contentRef })

  return (
    <section className="flex flex-col gap-4 items-start px-8 overflow-y-scroll h-auto">
      <div className="flex justify-start gap-4 x-4 items-center">
        <input
          onChange={(event) => onSearchChange(event.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Search by name or social security number...."
          className="w-96 py-2 px-4 border-2 border-stone-400 outline-0 focus:border-mainBlue text-mainText font-semibold rounded-full z-10"
        />

        <div className="flex gap-4 ">
          <button
            onClick={() => navigate('newPatient')}
            className="bg-unique rounded-full p-2 flex justify-center items-center hover:opacity-75 duration-200"
          >
            <PersonAddAlt1Icon style={{ height: 30, width: 30, fill: 'white' }} />
          </button>
          <button
            onClick={reactToPrintFn}
            className="bg-unique rounded-full p-2 flex justify-center items-center hover:opacity-75 duration-200"
          >
            <PrintIcon style={{ height: 30, width: 30, fill: 'white' }} />
          </button>
        </div>
      </div>

      <div className="hidden">
        {data && !isError && data.length > 0 && (
          <PrintablePatientsList data={data} contentRef={contentRef} />
        )}
      </div>

      <div className="h-full px-4">
        {data && !isError && data.length > 0 ? (
          <PatientsListMainTable data={data} />
        ) : (
          <h1 className="text-center w-[80rem] text-alert font-bold text-lg">
            لم يتم العثور على حالات
          </h1>
        )}
      </div>
    </section>
  )
}

export default PatientsOverView
