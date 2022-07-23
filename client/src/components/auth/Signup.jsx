import { Checkbox, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { userSignup } from '../../redux/actions/userActions';
import { changeError } from '../../redux/reducers/LoadingReducers';

const Signup = () => {
  const [vis, setVis] = useState(false);
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const setSignup =(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  } 
  const signup = ()=>{
    console.log(data);
    if(!data.name || !data.email || !data.password || !data.confirmPassword){
      dispatch(changeError({
        error:true,
        message:"Please fill all the details"
      }))
    }else{
      dispatch(userSignup(data));
    }
  }
  
  return (
    <div className='flex flex-col justify-center p-3 space-y-3'>
      <TextField 
        name={"name"}
        value={data.name || ""}
        onChange={e=>setSignup(e)}
        type="Name" label="name" required />  
      <TextField 
        name={"email"}
        value={data.email || ""}
        onChange={e=>setSignup(e)}
        type="email" label="email" required />  
      <TextField 
        name={"password"}
        value={data.password || ""}
        onChange={e=>setSignup(e)}
        type={vis?"text":"password"} label="password" required InputProps={{
        endAdornment:
        <div onClick={()=>{
          setVis(vis=>!vis)
        }}>
          <VisibilityIcon />
        </div>
      }}/>  
      <TextField 
        name={"confirmPassword"}
        value={data.confirmPassword || ""}
        onChange={e=>setSignup(e)}
        type={vis?"text":"password"} label="confirm Password" required InputProps={{
        endAdornment:
        <div onClick={()=>{
          setVis(vis=>!vis)
        }}>
          <VisibilityIcon />
        </div>
      }}/>  
      <div className='flex justify-start items-center'>
        <Checkbox checked={data.isRemember} onChange={e=>{
          console.log(e.target.checked || true)
          setData({...data, isRemember:e.target.checked});
        }} />
        <Typography>Remember Me</Typography>
      </div>
      <button onClick={signup} className="btn">Signup</button>
    </div>
  )
}

export default Signup