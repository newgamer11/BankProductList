import React from 'react'

const InputEmail = () => {
    return (
        <div className='flex justify-center font-bold mt-5'>
            <label className="text-2xl w-28">
                E-mail
            </label>

            <input type="text" placeholder='E-mail을 입력하세요' />
        </div>
    )
}

export default InputEmail