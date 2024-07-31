import React from 'react'


const Modal = ({ children, onClose }) => {
    return (
        <>
            <div className='fixed top-0 left-0 w-full h-full backdrop-blur-xl z-10' onClick={onClose}>
            </div>
            <div className='fixed z-10 transform -translate-x-1/2 -translate-y-1/2 bg-white w-2/4 h-2/4 top-1/2 left-1/2'>
                {children}
            </div>
        </>
    )
}

export default Modal
