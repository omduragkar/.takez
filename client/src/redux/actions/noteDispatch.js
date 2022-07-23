import { changeError, changeloading } from "../reducers/LoadingReducers";
import axios from 'axios';
import { setUser } from "../reducers/userReducers";
import { setNote } from "../reducers/notesReducers";



export const getAllnotes = (token)=>async (dispatch)=>{
    
    dispatch(changeloading(true))
    try{

        let notesData = await axios.get("http://localhost:5000/api/note/getNotes", {
            headers:{
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        console.log(notesData.data.findNote);
        dispatch(setNote(notesData.data.findNote));
        dispatch(changeloading(false));
    }catch(err){
        console.log(err.response)
        dispatch(changeloading(false));
        dispatch(changeError({
            err:true,
            message:err?.response?.data?err?.response.data.message:"Error in connection",
            type:err?.response?.data?err.response.data.type:null
        }))

    }
    
}
