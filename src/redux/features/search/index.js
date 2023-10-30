import { createSlice } from "@reduxjs/toolkit";


export const search = createSlice({
    name :'search',
    initialState : {
        searchTitle : '',
    },

    reducers : {

        _setSearchTitle: (state, action) => {
          state.searchTitle = action.payload
        },

       
    }
})

export const{_setSearchTitle} = search.actions
export default search.reducer