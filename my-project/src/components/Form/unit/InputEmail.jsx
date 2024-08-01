import React from 'react'

const InputEmail = () => {
    return (
        <div className='flex justify-center font-bold mt-10'>
            <label className="text-xl w-28">
                E-mail
            </label>

            <input type="text" placeholder='E-mail을 입력하세요' />
        </div>
    )
}

export default InputEmail