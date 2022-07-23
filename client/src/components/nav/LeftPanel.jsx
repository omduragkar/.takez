import { IconButton, Typography } from '@mui/material'
import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import { useDispatch } from "react-redux"
import {setLogout} from "../../redux/reducers/userReducers"
const LeftPanel = () => {
    const dispatch = useDispatch();
  return (
    <div className='fixed top-0 left-0 h-screen py-5 border-r-2'>
        <div className='flex flex-col justify-between h-full'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 pl-2">
                    <HomeOutlinedIcon/>
                    <Typography id="mainhead" variant={"h4"}>.taskez</Typography>
                </div>
                <IconButton
                onClick={()=>{
                    document.querySelectorAll(".textleft").forEach(v=>{
                        v.classList.toggle("hidden");
                    })
                    document.getElementById("mainhead").classList.toggle("hidden")
                }}
                > 
                    <MenuIcon/>
                </IconButton>
            </div>
            <div className='flex-1 flex flex-col justify-center w-full'>
                <div className='leftPaneldivs'>
                    <HomeOutlinedIcon/>
                    <p className='textleft'>Overview</p>
                </div>
                <div className='leftPaneldivs'>
                    <EqualizerOutlinedIcon/>
                    <p className='textleft'>Stats</p>
                </div>
            
                <div className='leftPaneldivs activeLeftPanel'>
                    <FolderCopyOutlinedIcon/>
                    <p className='textleft'>
                        Projects
                    </p>
                </div>
            
                <div className='leftPaneldivs'>
                    <TextsmsOutlinedIcon/>
                    <p className='textleft'>
                        Chat
                    </p>
                </div>
            
                <div className='leftPaneldivs'>
                    <CalendarMonthOutlinedIcon/>
                    <p className='textleft'>
                        Calendar
                    </p>
                </div>
                
            </div>
            <div className='flex-1 flex flex-col justify-end gap-5'>
                <div className="leftPaneldivs">
                    <SettingsOutlinedIcon/>
                    <p className='textleft'>
                        Settings
                    </p>
                </div>
                <div className="leftPaneldivs" onClick={e=>{
                    dispatch(setLogout())
                }}>
                    <LogoutOutlinedIcon/>
                    <p className='textleft'>
                        Log Out
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default LeftPanel