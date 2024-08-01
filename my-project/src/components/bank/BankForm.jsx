import React from 'react'
import FormHeader from '../Form/FormHeader'
import InputName from '../Form/InputName'
import InputPhoneNumber from '../Form/InputPhoneNumber'
import InputEmail from '../Form/InputEmail'
import FormCheckboxes from '../Form/FormCheckboxes'
import FormButton from '../Form/FormButton'
import CloseButton from '../Form/CloseButton'




const BankForm = ({ onClose, category }) => {

    return (
        <>
            <CloseButton onClose={onClose} />
            <FormHeader selectcategory={category}/>
            <InputName />
            <InputPhoneNumber />
            <InputEmail />
            <FormCheckboxes />
            <FormButton onClose={onClose} />


        </>
    )
}

export default BankForm