import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from '../../UI/Modal';
import QuestionCustomerForm from './QuestionCustomerForm';

const QuestionCustomer = () => {

  const [isOpen, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <div>
      <div className='flex justify-end mr-12 p-6'>
        <button className='cursor-pointer ml-10 text-base font-bold border-none rounded bg-blue-500 p-2 hover:bg-blue-700 text-white' onClick={() => setOpen(true)}>
          문의 사항
        </button>
      </div>

      {isOpen && createPortal(
        <Modal>
          <QuestionCustomerForm onClose={onClose} />
        </Modal>
        , document.body
      )}

    </div>



  )
}

export default QuestionCustomer