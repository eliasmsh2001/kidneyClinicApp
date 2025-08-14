import { createSlice } from '@reduxjs/toolkit'

const dialogSlicer = createSlice({
  name: 'dialog',
  initialState: { dialog: '' },
  reducers: {
    hadleOpenDialog(state, action) {
      state.dialog = action.payload
    }
  }
})

export default dialogSlicer
export const dialogActions = dialogSlicer.actions
