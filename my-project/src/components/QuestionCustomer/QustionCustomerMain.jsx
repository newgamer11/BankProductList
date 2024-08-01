import React, { useState } from 'react'
import QCHeader from './QCHeader/QCHeader'
import QCBody from './QCBody/QCBody'



const dummyLists = [
  {
    id: 1,
    title: '예금상담문의',
    summary: 'React를 공부한다.',
    category: 'Deposit',
  },
  {
    id: 2,
    title: '적금상담문의',
    summary: '점심을 먹는다.',
    category: 'Saving',
  },
  {
    id: 3,
    title: '대출상담문의',
    summary: '커피를 마신다.',
    category: 'Loan',
  },
  {
    id: 4,
    title: '기타상담문의',
    summary: '커피를 마신다.',
    category: 'Other',
  }
]


const QustionCustomerMain = () => {
  const [lists, setLists] = useState(dummyLists);
  const [select, setFilter] = useState('ALL');


  //게시판 등록기능
  const addHandler = ({ title, summary, category }) => {
    const newList = {
      id: self.crypto.randomUUID(),
      title,
      summary,
      category
    }

    const updatedLists = [...Lists, newList];
    setLists(updatedLists);

  }

  //수정기능
  const updateHandelr = (updateList) => {
    const updateLists = lists.map(list => list.id === updateList.id ? updateList : List)
    setLists(updateLists);
  }

  //삭제기능
  const deleteHandler = (id) => setLists(lists.filter(list => list.id !== id))

  //필터링 기능
  const filterLists = () => select === 'ALL' ? lists : lists.filter(list => list.category === select)

  //필터링된 list
  const filteredLists = filterLists();



  return (
    <div className='flex flex-col w-full'>

      <div className='flex justify-center font-bold text-5xl mt-10 mb-10 border-none'>
        문의 게시판
      </div>

      <div className=''>

        <QCHeader onAdd={addHandler} category={select} onFilter={setFilter} />

        <QCBody lists={filteredLists} onUpdate={updateHandelr} ondelete={deleteHandler} />

      </div>

    </div>
  )
}

export default QustionCustomerMain