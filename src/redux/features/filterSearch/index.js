import { createSlice } from "@reduxjs/toolkit";


export const search = createSlice({
    name :'search',
    initialState : {
        filterSearchTitle : '',
    },

    reducers : {

        _setFilterSearchTitle: (state, action) => {
          state.filterSearchTitle = action.payload
        },
       

       
    }
})

export const{_setFilterSearchTitle} = search.actions
export default search.reducer