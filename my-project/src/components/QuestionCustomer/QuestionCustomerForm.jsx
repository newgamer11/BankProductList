import React, { useEffect, useState } from 'react'
import InputName from '../Form/unit/InputName'
import InputEmail from '../Form/unit/InputEmail'
import InputText from '../Form/unit/InputText'
import FormButton from '../Form/unit/FormButton'
import CloseButton from '../Form/unit/CloseButton'




const QuestionCustomerForm = ({ onClose, onAdd,  }) => {



    //esc키를 누르면 모달창이 닫히도록 하는 Effect
    useEffect(() => {

        const keyDownHandler = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [onClose]);





    return (
        <div className='flex flex-col justify-center'>
            <CloseButton onClose={onClose} />
            <h1 className='mt-20 flex justify-center items-center fort-bold text-4xl' >
                문의 사항
            </h1>


            <InputName />
            <InputEmail />
            <InputText />
            <FormButton onAdd={onAdd} onClose={onClose} />


        </div>

    )
}

export default QuestionCustomerForm