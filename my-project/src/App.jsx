import { useState } from 'react'
import './App.css'
import Bankbody from './components/bank/Bankbody'
import Bankheader from './components/bank/Bankheader'
import QuestionCustomer from './components/QuestionCustomer/QuestionCustomer';
import QuestionCustomerForm from './components/QuestionCustomer/QuestionCustomerForm';

//     id: self.crypto.randomUUID(),
function App() {
  const [selectcategory, setcategory] = useState("ALL");
  const [insdata, setdata] = useState('');
  const [pageopen, setpage] = useState('false');

  console.log(insdata);
  const array = [
    {
      id: 1,
      title: "예금상품1",
      summary: "100만원 이하 연 0.2% 이윤금리",
      category: "Deposit"
    },
    {
      id: 2,
      title: "적금상품1",
      summary: "100만원 이하 연 3.2% 이윤금리",
      category: "Saving"
    },
    {
      id: 3,
      title: "대출상품1",
      summary: "100만원 이하 연 4.2% 상환금리",
      category: "Loan"
    }
  ]

  const arrayCategory = () => {
    const originarray = [...array];
    return (selectcategory !== "ALL" ? originarray.filter(array => array.category === selectcategory) : insdata ?
      originarray.filter(array => array.title === insdata) : originarray)
  }


  return (
    <div className='bg-cyan-50 h-full w-full'>

      <QuestionCustomer />

      <div className='flex justify-center items-center w-full h-1/6 font-bold'>
        <h1 className='text-5xl'>00은행 상품 목록</h1>
      </div>

      <div>
        <Bankheader categoryfilter={setcategory} setdata={setdata} />
        <Bankbody arrays={arrayCategory()} />
      </div>
   
    </div>
  )
}

export default App
