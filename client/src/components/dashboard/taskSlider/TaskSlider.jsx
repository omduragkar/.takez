import { Typography } from '@mui/material'
import React, { useState } from 'react'
import ModalForAdd from '../ModalForAdd';
import ModalForCardDetails from '../ModalForCardDetails';
import Cards from './Cards'

const TaskSlider = ({
  handleDragStart,
  handleDragEnter,
  handleDragEnd,
  dragging,
  rowsData,
  handleEnd,
  setList
}) => {
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const handleOpenModal = () => {
    setOpenM(true);
  };
  const handleEndModal = () => {
    console.log("calling")
    setOpenM(!openM);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div 
    id={rowsData.id}
    className='bg-slate-100 w-full max-h-fit rounded-xl p-5'
    onDragOver={e=>dragging?handleDragEnter(e,{boxId:rowsData.id}):null}
    >
      <div>
        <div className='flex justify-between items-center m-5'>
          <Typography variant='h6'>{rowsData.title}</Typography>
          <button className="outlinebtn p-3 ">{rowsData.list.length}</button>
        </div>
        <button className="outlinebtn w-full" onClick={()=>{
          handleOpen()
        }}>+</button>
      </div>
      <div className=" pt-52 md:pt-5 flex flex-col gap-5 overflow-y-scroll h-3/4">
        {rowsData.list.map((cardData)=>(
          <>
            <Cards 
              cardData={cardData} 
              boxId={rowsData.id}
              dragging={dragging} 
              handleDragEnter={handleDragEnter}
              handleDragStart={handleDragStart}
              handleEnd={handleEnd}
              handleOpenModal={handleOpenModal}
            />
            <ModalForCardDetails 
              row={rowsData.title}
              cardData={{...cardData, boxId:rowsData.id}}
              handleCloseM={handleEndModal}
              openM={openM}
            />  
          </>
        ))}
      </div>
      <ModalForAdd handleClose={handleClose} open={open} setList={setList} rowsData={rowsData}/>
    </div>
  )
}

export default TaskSlider