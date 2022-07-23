import {createSlice} from "@reduxjs/toolkit"



const userReducer = createSlice({
    name: 'user',
    initialState: localStorage.getItem("user")?
    {isLogin:true,...JSON.parse(localStorage.getItem("user"))}
    :
    {
      isLogin:false,
      name:null,
      email:null,
    },
    reducers: {
      setUser: function (state, action) {
        console.log(action.payload)
        return {
          ...action.payload,
          isLogin:true
        }
      },
      setLogout: function(state, action){
        localStorage.removeItem("user");
        return {
          isLogin:false,
          name:null, email:null
        }
      }
    }
})

export const {setUser, setLogout } = userReducer.actions;
export default userReducer.reducer;