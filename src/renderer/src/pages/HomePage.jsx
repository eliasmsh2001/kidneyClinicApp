import { useQuery } from '@tanstack/react-query'
import { getTodaysAttendance } from '../util/apis/patientsGetAPI'
import AttendantsListTable from '../components/Tables/AttendantsListTable'

const HomePage = () => {
  const { data, isError } = useQuery({
    queryKey: ['attendance'],
    queryFn: getTodaysAttendance
  })
  return (
    <section className="flex flex-col items-center gap-4 py-10">
      {data && Array.isArray(data) && !isError && data?.length >= 1 && (
        <h1 className="text-lg text-mainText font-bold text-center">TODAY's ATTEMDANCE</h1>
      )}
      {data && !isError && Array.isArray(data) && !isError && data?.length >= 1 && (
        <AttendantsListTable data={data} />
      )}
      {isError ||
        (data?.length < 1 && (
          <h1 className="text-lg text-alert font-bold text-center my-8">
            Something went wrong! Coule not find Attendats, or no patients was registered for today
          </h1>
        ))}
    </section>
  )
}

export default HomePage
