import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    modal  : false
}






export const modal = createSlice({
    name : 'modal',
    initialState,

    reducers :{
        _setModal: (state, action) => {
          state.modal = action.payload
        }
    }
})


export const{_setModal} = modal.actions

export default modal.reducer