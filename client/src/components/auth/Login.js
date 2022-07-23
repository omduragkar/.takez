import { Checkbox, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userLogin } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [vis, setVis] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const setLogin =(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  } 
  const login = ()=>{
    console.log(data);
    dispatch(userLogin(data))
  }
  return (
    <div className='flex flex-col justify-center p-3 space-y-3'>
      <TextField 
        type="email"
        value={data.email || ""}
        onChange={e=>setLogin(e)}
        name={"email"} 
        label="email"
      />  
      <TextField 
        name={"password"} 
        onChange={e=>setLogin(e)}
        type={vis?"text":"password"}
        value={data.password || ""}
        label="password" required InputProps={{
        endAdornment:
        <div onClick={()=>{
          setVis(vis=>!vis)
        }}>
          <VisibilityIcon />
        </div>
      }}/> <div className='flex justify-start items-center'>
        <Checkbox checked={data.isRemember} onChange={e=>{
          console.log(e.target.checked || true)
          setData({...data, isRemember:e.target.checked});
        }}/>
        <Typography >Remember Me</Typography>
      </div>
      <button className="btn" onClick={login}>Login</button>
    </div>
  )
}

export default Login