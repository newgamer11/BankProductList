import React from 'react'

const Modal = ({ children }) => {
    console.log("확인용");
    return (
        <>
            <div className=' w-full h-full backdrop-blur-xl flex justify-center items-center z-10'>
            </div>
            <div className='fixed transform -translate-x-1/2 -translate-y-1/2 bg-white w-2/4 h-2/4 z-20'>
                {children}
            </div>
        </>
    )
}

export default Modal