import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from '../../UI/Modal';
import BankForm from './BankForm';

const Bankbodyitem = ({ array }) => {
    const [isopen, setopen] = useState(false);
    const onclose = () => setopen(false);

    return (
        <div className='flex justify-center w-full '>
            <div className='w-1/2 bg-white flex flex-row justify-between border-2 border-black'>
                <div>
                    <p>{array.title}</p>
                    <p>{array.summary}</p>
                    <p>{array.category}</p>
                </div>
                <button onClick={() => setopen(true)}>
                    ⚙
                </button>
            </div>
            {isopen && createPortal(
                <Modal>
                    <BankForm />
                </Modal>
                , document.body)}
        </div>
    )
}

export default Bankbodyitem


