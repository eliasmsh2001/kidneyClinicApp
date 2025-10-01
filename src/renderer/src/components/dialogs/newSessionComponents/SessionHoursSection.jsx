import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sessionsActions } from '../../../util/slicers/sessionsSlicer'

const SessionHoursSection = ({ sessionHours, editting }) => {
  const dispatch = useDispatch()
  const inputStyle = `border-2 border-stone-400 outline-0 focus:border-mainBlue text-sm text-mainText px-2 py-1`

  return (
    <ul className="flex flex-col gap-4 mt-6 border-t-2 pt-10 border-mainBlue/50 relative">
      {sessionHours?.map((item) => (
        <li key={item.key} className="border-b-2 border-mainText flex gap-4 items-center pb-4">
          <h1 className="bg-mainText py-4 w-24 text-center text-white font-bold mx-6 rounded-lg">
            {item.time}
          </h1>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-mainText" htmlFor="bp">
              Blood Pressure
              <span className="mx-1 text-[.5rem] font-semibold italic text-alert">
                systolic/diastolic
              </span>
            </label>
            <input
              placeholder={editting ? item.bloodPressure : 'write...'}
              className={`${inputStyle} w-40 rounded-full`}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    bloodPressure: event.target.value
                  })
                )
              }
              type="text"
              id="bp"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-mainText" htmlFor="pRate">
              Pulse Rate{' '}
              <span className="mx-1 text-[.5rem] font-semibold italic text-alert">bpm</span>
            </label>
            <input
              placeholder={editting ? item.pulseRate : 'write...'}
              className={`${inputStyle} w-24 rounded-full`}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    pulseRate: event.target.value
                  })
                )
              }
              type="text"
              id="pRate"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-mainText" htmlFor="pRate">
              Temp
            </label>
            <input
              placeholder={editting ? item.temperature : 'write...'}
              className={`${inputStyle} w-24 rounded-full`}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    temperature: event.target.value
                  })
                )
              }
              type="text"
              id="temp"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-mainText" htmlFor="rbs">
              R.B.S
            </label>
            <input
              placeholder={editting ? item.rbs : 'write...'}
              className={`${inputStyle} w-24 rounded-full`}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    rbs: event.target.value
                  })
                )
              }
              type="text"
              id="rbs"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-mainText" htmlFor="ivf">
              I.V.F
            </label>
            <input
              placeholder={editting ? item.ivf : 'write...'}
              className={`${inputStyle} w-24 rounded-full`}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    ivf: event.target.value
                  })
                )
              }
              type="text"
              id="ivf"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-mainText" htmlFor="drugs">
              Drugs (separate the drugs with a - or , )
            </label>
            <input
              placeholder={editting ? item.drugs : 'write...'}
              className={`${inputStyle} w-64 rounded-full`}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    drugs: event.target.value
                  })
                )
              }
              type="text"
              id="drugs"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold text-mainText" htmlFor="Vomitting">
              Vomitting
            </label>
            <input
              placeholder={editting ? item.vomitting : 'write...'}
              className={`${inputStyle} w-20 rounded-full`}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    vomitting: event.target.value
                  })
                )
              }
              type="number"
              id="Vomitting"
            />
          </div>

          <label className="text-mainText font-bold flex items-center gap-1">
            <input
              type="checkbox"
              value="checked"
              checked={item?.cramps === 'checked'}
              onChange={(event) =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    cramps:
                      sessionHours[sessionHours.indexOf(item)].cramps === 'checked' ? '' : 'checked'
                  })
                )
              }
            />
            Cramps
          </label>
          <label className="text-mainText font-bold flex items-center gap-1">
            <input
              type="checkbox"
              value="checked"
              checked={item?.hematoma === 'checked'}
              onChange={() =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    hematoma:
                      sessionHours[sessionHours.indexOf(item)]?.hematoma === 'checked'
                        ? ''
                        : 'checked'
                  })
                )
              }
            />
            Hematoma
          </label>
          <label className="text-mainText font-bold flex items-center gap-1">
            <input
              type="checkbox"
              value="checked"
              checked={item.chestPain === 'checked'}
              onChange={() =>
                dispatch(
                  sessionsActions.handleChangeHoursData({
                    key: sessionHours.indexOf(item),
                    chestPain:
                      sessionHours[sessionHours.indexOf(item)]?.chestPain === 'checked'
                        ? ''
                        : 'checked'
                  })
                )
              }
            />
            Chest Pain
          </label>
        </li>
      ))}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={() => dispatch(sessionsActions.handleAddAnHour())}
          className="bg-unique text-white font-bold rounded-md  left-0 bottom-0 p-2"
        >
          Add an housr +
        </button>
        <button
          type="button"
          onClick={() => dispatch(sessionsActions.handleDeleteHour())}
          className="bg-alert text-white font-bold rounded-md  left-0 bottom-0 p-2"
        >
          Delete an hour
        </button>
      </div>
    </ul>
  )
}

export default SessionHoursSection
