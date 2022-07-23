import { Modal, Box, TextField, IconButton, Input, Avatar } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const ModalForAdd = ({open, handleClose, setList, rowsData}) => {
    const [data, setData] = useState({});
    const add =()=>{
        let val
        setList(dat=>{
             val = dat.map(rows=>{
                if(rows.id ==rowsData.id){
                    rows.list = [data, ...rows.list]
                    return rows;
                }
                return rows;
            })
            return val;
        })
        localStorage.setItem("list", JSON.stringify([...val]))
        setData({})
        handleClose();
    }
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box sx={{ position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
            borderRadius:2
            
        }}>
            <div className='flex justify-between items-center py-3'>
                <p className="flex-1 text-xl font-bold">Add</p>
                <IconButton onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <div className='flex flex-col gap-5 '>
                <TextField name={"title"} label={"Title"}  onChange={(e)=>{
                        setData({...data, [e.target.name]:e.target.value})
                    }}/>
                <TextField name={"description"} label={"Description"} multiline rows={2} onChange={(e)=>{
                    setData({...data, [e.target.name]:e.target.value})
                }}/>
                <div className='w-full'>
                    <Input disabled placeholder='working on it!' label={"Add People"} sx={{width:"95%"}} endAdornment={<IconButton><SearchOutlinedIcon/></IconButton>} />
                    <div className='h-52 p-4 overflow-y-scroll flex flex-col gap-5'>
                        {[1,1,1,1,1,1,1,1,1,1,1,1,].map(v=>(
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <Avatar/>
                                    <p>Om Duragkar</p>
                                </div>
                                <div>
                                    <IconButton>
                                        <CloseIcon/>
                                    </IconButton>
                                </div>
                            </div>
                            ))}
                    
                    </div>
                </div>
                <button className="outlinebtn w-full" onClick={e=>add(e)}>Add</button>
            </div>
        </Box>
    </Modal>
  )
}

export default ModalForAdd