const handleClose = () => {}
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useNavigate, useParams } from 'react-router'

export default function EditPatientSuccess() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  return (
    <React.Fragment>
      <Dialog
        open={open === 'editPatientSuccess'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'تمت العملية بنجاح'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لقد تم تعديل بيانات هذه الحالة
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(dialogActions.hadleOpenDialog(''))
              navigate(`/patientsList/patientDetails/${id}`)
            }}
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
