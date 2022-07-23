import { changeError, changeloading } from "../reducers/LoadingReducers";

import { v4 as uuidv4 } from 'uuid';

import { setUser } from "../reducers/userReducers";
let savedData = localStorage.getItem("userData")
let data = savedData?JSON.parse(savedData):require('../../json/user.json');



export const userSignup = (userData)=>async (dispatch)=>{
    dispatch(changeloading(true));
    const id = uuidv4();
    let savingData = JSON.stringify(
        {
            name:userData.name,
            email:userData.email,
            password:userData.password,
            userId:id,
        });
    savingData = JSON.parse(savingData)
    data = [savingData, ...data];
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("user", JSON.stringify(savingData));
    dispatch(setUser({
        userId:id,
        name:userData.name,
        email:userData.email,
        isLogin:true
    }))
    dispatch(changeloading(false));
}


export const userLogin =  (userData)=>async (dispatch)=>{
    dispatch(changeloading(true));
    let recievedata = data.filter(user=>user.email == userData.email);
    if(recievedata && recievedata[0]){
        if(recievedata[0].password == userData.password)
        {
            localStorage.setItem("user", JSON.stringify(recievedata[0]));

            dispatch(setUser({
                userId:recievedata[0].userId,
                name:recievedata[0].name,
                email:recievedata[0].email,
                isLogin:true
            }))

        }else{
            dispatch(changeError({
                status:"Wrong email and/or Password",
                type:"password"
            }));
            
        }
    }else{
        dispatch(changeError({
            status:"User not created!",
            type:"email"
        }));
        
        
    }
    dispatch(changeloading(false));
}
    