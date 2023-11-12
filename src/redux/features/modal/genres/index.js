import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    modal  : false
}






export const genreModal = createSlice({
    name : 'modal',
    initialState,

    reducers :{
        _setGenreModal: (state, action) => {
          state.modal = action.payload
        }
    }
})


export const{_setGenreModal} = genreModal.actions

export default genreModal.reducer