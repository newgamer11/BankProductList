import React from 'react'
import FormHeader from '../Form/FormHeader'
import InputName from '../Form/InputName'
import InputPhoneNumber from '../Form/InputPhoneNumber'
import InputEmail from '../Form/InputEmail'
import FormCheckboxes from '../Form/FormCheckboxes'
import FormButton from '../Form/FormButton'




const BankForm = () => {


    return (
        <>
            <FormHeader />
            <InputName />
            <InputPhoneNumber />
            <InputEmail />
            <FormCheckboxes />
            <FormButton />

        </>
    )
}

export default BankForm