import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import MainSidebar from '../components/EssentialComponents/MainSidebar'
import logoimg from '../assets/images.jpg'
import UseAuthContext from '../hooks/UseAuthContext'
import LogoutComfirmationDialog from '../components/dialogs/LogoutComfirmationDialog'
import CloseAppConfirmation from '../components/dialogs/CloseAppConfirmation'
import NewPatientSuccessDialog from '../components/dialogs/NewPatientSuccessDialog'
import EditPatientSuccess from '../components/dialogs/EditPatientSuccess'
import DeletePatientSuccess from '../components/dialogs/DeletePatientSuccess'
import DeletePatientDialog from '../components/dialogs/DeletePatientDialog'
import ConfirmDeleteFile from '../components/dialogs/ConfirmDeleteFile'
import NewSessionDialog from '../components/dialogs/NewSessionDialog'
import EditSessionDialog from '../components/dialogs/EditSessionDialog'

const RootLayout = () => {
  const today = new Date().toUTCString().slice(0, 16)
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5))
  const [username, setUserName] = useState()

  const { user } = UseAuthContext()
  //

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 5))
    }, 1000)
    setUserName(JSON.parse(localStorage.getItem('user'))?.existingUser?.username)

    // Cleanup the interval on component unmount

    return () => clearInterval(timerID)
  }, [time])

  return (
    <>
      <main className="relative flex  flex-row-reverse h-screen w-screen overflow-hidden">
        <MainSidebar />
        <section className=" flex flex-col gap-4 left-5 top-5 w-full">
          <div className="w-full flex gap-4 items-center justify-between px-8 py-4 border-b-2 border-black/25">
            <div className="flex items-center gap-4">
              <img src={logoimg} alt="" className=" size-32 " />
              <div className="flex flex-col gap-2 items-center  text-mainText font-bold text-lg">
                <h1>العيادة المجمعة زاوية الدهماني</h1>
                <h1>قسم غسيل الكلى</h1>
              </div>
            </div>

            <div className="text-lg font-bold text-mainText py-10 flex flex-row-reverse gap-4">
              {username && <h1> {username} مرحباً</h1>}
            </div>
            <div className="text-lg font-bold text-mainText py-10 flex flex-row-reverse gap-4">
              <h1>{time}</h1>
              <h1>{today}</h1>
            </div>
          </div>
          <Outlet />
        </section>
      </main>
      <LogoutComfirmationDialog />
      <CloseAppConfirmation />
      <NewPatientSuccessDialog />
      <EditPatientSuccess />
      <DeletePatientSuccess />
      <DeletePatientDialog />
      <ConfirmDeleteFile />
      <NewSessionDialog />
      <EditSessionDialog />
    </>
  )
}

export default RootLayout
