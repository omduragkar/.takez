import { Modal, Box,  IconButton, } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ModalForCardDetails = ({openM, handleCloseM, cardData, row}) => {
  return (
    <Modal
        open={openM}
        onClose={handleCloseM}
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
                <p className="flex-1 text-xl font-bold">Detail</p>
                <IconButton onClick={handleCloseM}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <div className='flex flex-col gap-5 '>
              <p className="flex-1 text-xl font-bold">{cardData.title}</p>
              <p className="flex-1 text-xl font-bold">{cardData.description}</p>
              <p className="flex-1 text-xl font-bold">Status: {row}</p>
            </div>
        </Box>
    </Modal>
  )
}
export default ModalForCardDetails