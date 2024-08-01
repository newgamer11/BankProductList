import React from 'react'

const InputName = () => {
    return (
        <div className='flex justify-center font-bold mt-16'>
            <label className="text-xl w-28">
                이름
            </label>
            <input type="text" placeholder='이름을 입력하세요' />
        </div>

    )
}

export default InputName