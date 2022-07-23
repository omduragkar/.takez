import { Avatar, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ModalForCardDetails from '../ModalForCardDetails';
const Cards = ({handleDragStart,handleOpenModal, handleDragEnter, handleEnd, cardData,boxId, dragging}) => {

  return (
    <div 
        className={'p-5 bg-white rounded-xl shadow-lg'}
        draggable={true}
        onDragOver={e=>dragging?handleDragEnter(e, {...cardData, boxId}):null}
        onDragEnd={e=>handleEnd(e, {...cardData, boxId})}
        onDragStart={e=>handleDragStart(e, {boxId,...cardData})}
        onClick={handleOpenModal}
        id={cardData.id}
    >
        <Typography variant={"h6"}>
            {cardData.title}
        </Typography>
        <p className='text-slate-700 py-2'>
            {cardData.description}

        </p>
        <div className='flex justify-between items-center text-slate-500'>
            <Avatar/>
            <IconButton>
                <ChatBubbleOutlineOutlinedIcon/>
            </IconButton>
        </div>
        
    </div>

  )
}

export default Cards