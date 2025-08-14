const handleClose = () => {}
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useNavigate } from 'react-router'

export default function DeletePatientSuccess() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
    navigate('/patientsList')
  }

  return (
    <React.Fragment>
      <Dialog
        open={open === 'deletePatient'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'مسح الحالة'}</DialogTitle>
        <DialogContent> تمت عمية المسح بنجاح</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
