import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    modal  : false
}






export const profileModal = createSlice({
    name : 'modal',
    initialState,

    reducers :{
        _setProfileModal: (state, action) => {
          state.modal = action.payload
        }
    }
})


export const{_setProfileModal} = profileModal.actions

export default profileModal.reducer