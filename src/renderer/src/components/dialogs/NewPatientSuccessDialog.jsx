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
import { useNavigate } from 'react-router'

export default function NewPatientSuccessDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Dialog
        open={open === 'newPatientSuccess'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'تمت العملية بنجاح'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            تمت إضافة الحالة الجديدة بنجاح
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(dialogActions.hadleOpenDialog(''))
              navigate('patientsList')
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
