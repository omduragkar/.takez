import {createSlice} from "@reduxjs/toolkit"



const loadingReducers = createSlice({
    name: 'user',
    initialState: {
      loading:false,
        error:false,
        message:null,
        type:null
    },
    reducers: {
      changeloading: (state, action) => {
        state.loading = action.payload
      },
      changeError: (state, action) => {
        state.error = action.payload.err;
        state.message = action.payload.message
        state.type = action.payload.type
      },

    }
})

export const { changeloading,changeError } = loadingReducers.actions;
export default loadingReducers.reducer;