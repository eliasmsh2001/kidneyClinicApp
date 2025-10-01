import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMutation, useQuery } from '@tanstack/react-query'
import { uploadPatientFiles } from '../../util/apis/patientsPostAPIs'
import { getPatientFiles } from '../../util/apis/patientsGetAPI'
import RedoIcon from '@mui/icons-material/Redo'
import url, { queryClient } from '../../util/apis/httpUrl'
import DeleteIcon from '@mui/icons-material/Delete'

const PatientFile = () => {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadStatus, setUploadStatus] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: uploadPatientFiles,
    mutationKey: ['patientDetails', id],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patientDetails', 'patientFiles'] })
    }
  })

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('قم باختيار ملف أولا')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('patientId', id)

    mutate(formData)
  }

  const { data, isError, refetch } = useQuery({
    queryKey: ['patientDetails', 'patientFiles'],
    queryFn: ({ signal }) => getPatientFiles({ id, signal })
  })

  return (
    <div className="relative flex justify-center">
      <button
        className="bg-alert absolute right-2 -top-10 text-white p-2 rounded-full "
        onClick={() => navigate(`/patientsList/patientDetails/${id}`)}
      >
        <RedoIcon style={{ height: 30, width: 30, fill: 'white' }} />
      </button>
      {data && data.length > 0 && (
        <button
          className="bg-alert absolute right-16 -top-10 text-white p-2 rounded-full "
          onClick={() => dispatch(dialogActions.hadleOpenDialog('deletePatientFileConfirmation'))}
        >
          <DeleteIcon style={{ height: 30, width: 30, fill: 'white' }} />
        </button>
      )}
      {isError && <button onClick={() => refetch()}>reload</button>}
      {data?.length < 1 && !isError && (
        <div className="flex flex-col items-center justify-center gap-4">
          {!selectedFile && (
            <div>
              <h1 className="text-alert text-center text-lg font-bold">لا يوجد ملف</h1>
              <h1 className="text-stone-500 text-center text-sm font-semibold">قم بإدخال ملف</h1>
            </div>
          )}
          <input className="w-[6.2rem]" type="file" onChange={handleFileChange} />
          {selectedFile && <h1>{selectedFile.name}</h1>}
          <button
            className="bg-mainBlue rounded-full p-2 text-white font-bold hover:opacity-55 duration-200"
            onClick={handleUpload}
          >
            Upload
          </button>
          {uploadStatus && (
            <p className="text-alert text-center text-lg font-bold">{uploadStatus}</p>
          )}
        </div>
      )}
      {data &&
        data.map((file) => (
          <embed key={file.id} src={`${url}/${file.path}`} width="100%" height="680px" />
        ))}
    </div>
  )
}

export default PatientFile
