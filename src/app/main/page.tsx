import React from 'react'
import Navbar from './components/navbar'
import Basket from './components/basket'
import '@/styles/main.scss'
import { categoriesApi } from '@/services/main/main.services'

async function getData() {
  const res = await fetch(categoriesApi);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Main = async () => {
  const data = await getData()

  return (
    <div className='homepage'>
      <Navbar categories={data} />
      <div className='main'>

      </div>
      <Basket />
    </div>
  )
}

export default Main