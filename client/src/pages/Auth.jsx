import React, { useEffect } from 'react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/Signup'
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
import { Alert, CircularProgress } from '@mui/material'

const Auth = ({login}) => {
  const state = useSelector(state=>state);
  const history = useNavigate();
  useEffect(()=>{
    if(state?.userInfo?.isLogin){
      history("/dashboard");
    }
  },[history, state?.userInfo?.isLogin])
  return (
    <div className='flex flex-col-reverse mt-28 sm:flex-row items-center sm:px-14'>
        <div className='flex-1'>
            <img src='/images/security.svg' alt="login" className='w-full'/>
        </div>
        <div className='flex-1 flex-col'>
          <div className='border-2 p-5 rounded-md'>
            <div className='flex gap-5'>
              <p 
              className={login?'font-semibold text-slate-900 text-xl border-b-2 border-green-600 py-2  cursor-not-allowed'
              :
              ' py-2 font-semibold text-slate-400 text-xl cursor-pointer'
              }
                onClick={()=>{history("/auth/login")}}
              >Login</p>
              <p 
              className={login?'font-semibold text-slate-400 text-xl py-2  cursor-pointer'
              :
              ' py-2 font-semibold text-slate-900 text-xl border-b-2 border-green-600 cursor-not-allowed'
              }
                onClick={()=>{history("/auth/signup")}}
              >Signup</p>
            </div>
              <div>
                {
                  console.log(state)
                }
              {
                (state.loader.error && state.loader.message) &&
                <Alert variant='outlined' color='error' sx={{margin:2}}>{state.loader.message}</Alert>
              }
              {
                state.loader.loading ?
                <div className='w-full h-3/4 flex justify-center items-center'>

                  <CircularProgress />
                </div>
                :
                <div>
                  {
                    login?
                    <Login/>
                    :
                    <Signup/>
                  }
                </div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Auth