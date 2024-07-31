import React from 'react'
import FormHeader from '../Form/FormHeader'
import InputName from '../Form/InputName'
import InputPhoneNumber from '../Form/InputPhoneNumber'
import InputEmail from '../Form/InputEmail'
import FormCheckboxes from '../Form/FormCheckboxes'



const BankForm = () => {


    return (
        <>
            <FormHeader />
            <InputName />
            <InputPhoneNumber />
            <InputEmail />
            <FormCheckboxes />

            <button className='mt-10 flex justify-center items-center bg-blue-500
             text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
                제출하기
            </button>

        </>
    )
}

export default BankForm