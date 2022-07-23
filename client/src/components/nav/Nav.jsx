import React from 'react'
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom"
import LeftPanel from './LeftPanel';
import { useSelector } from 'react-redux';

const Nav = () => {
    const user = useSelector(state=>state.userInfo);
    const history = useNavigate();
  return (
    !user.isLogin?
    <div className='fixed top-0 w-screen md:px-12 py-3 bg-green-300 z-10'>
        <div className="flex flex-row justify-between items-center mx-auto">
            <div onClick={()=>history("/")} className="flex gap-2 justify-center items-center">
                <IconButton>
                    <NoteAltIcon/>
                </IconButton>
                <h5 className='font-bold text-2xl'>Onotify</h5>
            </div>
            <div className="hidden md:flex">
                <ul className="flex gap-x-10 items-center">
                    <li>About</li>
                    <li><button className='btn' onClick={()=>history("/auth/login")}>Login</button></li>
                    <li><button className='btn' onClick={()=>history("/auth/signup")}>singup</button></li>
                </ul>
            </div>
            <div  id="buttonsm" className="hidden sm:hidden">
                <ul className="flex flex-col absolute top-0 left-0 w-full bg-green-300 p-5 gap-y-5 items-center">
                    <li>About</li>
                    <li><button className='btn' onClick={()=>history("/auth/login")}>Login</button></li>
                    <li><button className='btn' onClick={()=>history("/auth/signup")}>singup</button></li>
                </ul>
            </div>
            <div id="menubtn" className="block sm:hidden">
                <IconButton onClick={()=>{
                    document.getElementById("buttonsm").classList.toggle("hidden")
                    document.getElementById("menubtn").classList.toggle("hidden")
                    document.getElementById("closemenubtn").classList.toggle("hidden")
                }}>
                    <MenuIcon/>
                </IconButton>
            </div>
            <div id="closemenubtn" className="hidden sm:hidden" >
                <IconButton onClick={()=>{
                    document.getElementById("buttonsm").classList.toggle("hidden")
                    document.getElementById("closemenubtn").classList.toggle("hidden")
                    document.getElementById("menubtn").classList.toggle("hidden")

                }}> 
                    <CloseIcon/>
                </IconButton>
            </div>
        </div>
    </div>
    :
    <>
    <LeftPanel/>
    </>
  )
}

export default Nav