import React from 'react'

const FormButton = ({ onClose }) => {



    const clickHanlder = () => {
        alert('정상적으로 접수되었습니다.');
        onClose();
    }

    return (

        <div className='flex items-center justify-center'>

            <button className='cursor-pointer flex justify-center items-center w-80 mt-10 bg-blue-500
    text-white font-bold py-2 px-4 rounded hover:bg-blue-700' onClick={clickHanlder}>
                제출하기
            </button>

        </div>
    )
}

export default FormButton
