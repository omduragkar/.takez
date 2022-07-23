import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Input, InputAdornment, TextField } from '@mui/material';
import { AvatarGroup } from '@mui/material';
const Toppanel = ({user}) => {
  return (
    <div className='flex justify-between items-center p-5'>
        <div className='flex justify-center items-center'>
            <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <SearchOutlinedIcon />
                    </InputAdornment>
                }
                placeholder={"Search Something"}
            />
        </div>
        <div>
            <AvatarGroup>
                <Avatar>O</Avatar>
                <Avatar>M</Avatar>
                <Avatar>N</Avatar>
                <Avatar>P</Avatar>
                <Avatar>+7</Avatar>
            </AvatarGroup>
        </div>
        <div className="flex items-center gap-3">
            <p className='text-slate-700 font-bold text-lg'>Hi, {user.name}</p>
            <Avatar alt={user.name} src={user.avatar}/>

        </div>

    </div>
  )
}

export default Toppanel