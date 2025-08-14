const handleClose = () => {}
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useNavigate, useParams } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { deletePatient } from '../../util/apis/patientsPostAPIs'

export default function DeletePatientDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  const { mutate } = useMutation({
    mutationFn: deletePatient,
    mutationKey: ['patients'],
    onSuccess: () => {
      dispatch(dialogActions.hadleOpenDialog('deletePatient'))
      queryClient.invalidateQueries({ queryKey: ['patients'] })
      navigate('..')
    }
  })

  return (
    <React.Fragment>
      <Dialog
        open={open === 'deletePatientConfirmation'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'مسح الحالة'}</DialogTitle>
        <DialogContent> هل أنت متأكد من مسح هذه الحالة؟</DialogContent>
        <DialogActions>
          <Button onClick={() => mutate({ id })}>تأكيد المسح</Button>
          <Button onClick={handleClose}>إلغاء العملية</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
