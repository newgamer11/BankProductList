import React, { useState } from 'react'
import InputName from '../Form/InputName'
import InputEmail from '../Form/InputEmail'
import InputText from '../Form/InputText'
import FormButton from '../Form/FormButton'
import CloseButton from '../Form/CloseButton'




const QuestionCustomerForm = ({ onClose }) => {

        




    return (
        <div className='flex flex-col justify-center'>
            <CloseButton onClose={onClose} />
            <h1 className='mt-20 flex justify-center items-center fort-bold text-4xl'>
                문의 사항
            </h1>


            <InputName />
            <InputEmail />
            <InputText />
            <FormButton onClose={onClose} />


        </div>

    )
}

export default QuestionCustomerForm