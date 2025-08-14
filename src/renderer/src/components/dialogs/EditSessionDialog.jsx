import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import SessionHoursSection from './newSessionComponents/SessionHoursSection'
import { sessionsActions } from '../../util/slicers/sessionsSlicer'
import { useMutation } from '@tanstack/react-query'
import { addNewSession, editSession } from '../../util/apis/sessionsAPIs'
import { useParams } from 'react-router'
import { queryClient } from '../../util/apis/httpUrl'

export default function EditSessionDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const sessionHours = useSelector((item) => item.sessions.sessionHours)
  const sessionData = useSelector((item) => item.sessions.data)
  const inputStyle = `border-2 outline-0 border-stone-400 rounded-md p-1 focus:border-mainBlue text-mainText font-bold text-sm`
  const params = useParams()

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
    dispatch(sessionsActions.handleClearData())
  }

  const { mutate } = useMutation({
    mutationKey: ['editSession'],
    mutationFn: editSession,
    onSuccess: () => {
      queryClient.invalidateQueries(['sessions'])
      handleClose()
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    mutate({ data, sessionHours, sessionId: sessionData.id })
  }

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '1720px!important'
          }
        }}
        open={open === 'editSession'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'New Session'}</DialogTitle>
        <DialogContent>
          <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <section className="flex flex-wrap gap-4">
              <div className="flex flex-col">
                <label htmlFor="date" className="text-sm font-bold text-mainText">
                  Date
                </label>
                <input
                  placeholder={sessionData.date}
                  type="date"
                  name="date"
                  className={`${inputStyle} w-36`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="techName" className="text-sm font-bold text-mainText">
                  Technician's name
                </label>
                <input
                  placeholder={sessionData.techName}
                  type="text"
                  name="techName"
                  className={`${inputStyle} w-44`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="deviceNo" className="text-sm font-bold text-mainText">
                  Device NO.
                </label>
                <input
                  placeholder={sessionData.deviceNo}
                  type="text"
                  name="deviceNo"
                  className={`${inputStyle} w-32`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sessionType" className="text-sm font-bold text-mainText">
                  Session Type
                </label>
                <input
                  placeholder={sessionData.sessionType}
                  type="text"
                  name="sessionType"
                  className={`${inputStyle} w-44`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="startingTime" className="text-sm font-bold text-mainText">
                  Starting Time
                </label>
                <input
                  placeholder={sessionData.startingTime}
                  type="time"
                  name="startingTime"
                  className={`${inputStyle} w-44`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="anticoagulantUsed" className="text-sm font-bold text-mainText">
                  Anticoagulant Used
                </label>
                <input
                  placeholder={sessionData.anticoagulantUsed}
                  type="text"
                  name="anticoagulantUsed"
                  className={`${inputStyle} w-36`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="ktv" className="text-sm font-bold text-mainText">
                  KT/V
                </label>
                <input
                  placeholder={sessionData.ktv}
                  type="text"
                  name="ktv"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="urr" className="text-sm font-bold text-mainText">
                  URR
                </label>
                <input
                  placeholder={sessionData.urr}
                  type="text"
                  name="urr"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="ultrafiltrationRate" className="text-sm font-bold text-mainText">
                  Ultrafiltration Rate
                </label>
                <input
                  placeholder={sessionData.ultrafiltrationRate}
                  type="text"
                  name="ultrafiltrationRate"
                  className={`${inputStyle} w-36`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="wtPreHD" className="text-sm font-bold text-mainText">
                  WT. Pre HD
                </label>
                <input
                  placeholder={sessionData.wtPreHD}
                  type="text"
                  name="wtPreHD"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="wtPostHD" className="text-sm font-bold text-mainText">
                  WT. Post HD
                </label>
                <input
                  placeholder={sessionData.wtPostHD}
                  type="text"
                  name="wtPostHD"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="HDStarting" className="text-sm font-bold text-mainText">
                  HD. Starting
                </label>
                <input
                  placeholder={sessionData.HDStarting}
                  type="text"
                  name="HDStarting"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="heparinRate" className="text-sm font-bold text-mainText">
                  Heparin Rate
                </label>
                <input
                  placeholder={sessionData.heparinRate}
                  type="text"
                  name="heparinRate"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="heparinBolus" className="text-sm font-bold text-mainText">
                  Heparin Bolus
                </label>
                <input
                  placeholder={sessionData.heparinBolus}
                  type="text"
                  name="heparinBolus"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="UFGoal" className="text-sm font-bold text-mainText">
                  UF. Goal
                </label>
                <input
                  placeholder={sessionData.UFGoal}
                  type="text"
                  name="UFGoal"
                  className={`${inputStyle} w-24`}
                  onChange={() => null}
                />
              </div>
            </section>
            <section>
              <SessionHoursSection sessionHours={sessionHours} editting />
            </section>
            <div className="my-2 flex gap-4">
              <button className="bg-mainBlue text-sm text-white font-bold py-1 w-20">
                Confirm
              </button>
              <button
                onClick={() => handleClose()}
                type="button"
                className="bg-alert text-sm text-white font-bold py-1 w-20"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
