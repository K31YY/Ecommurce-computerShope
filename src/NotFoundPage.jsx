import React from 'react'
import notfoundpage from './assets/Images/notfoundpage.jpg'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
const NotFoundPage = () => {
    const goback = useNavigate()
  return (
    <div className='flex justify-center bg-white m-auto items-center h-screen'>
       <div className='flex flex-col justify-center items-center'>
       <img  width={1000} src={notfoundpage} alt="" />
       <Button onClick={() => goback("/")} style={{width:150, padding:10, fontFamily:"freehand" , border:"2px solid ", position: "absolute" , top:"85lvh"}}>ត្រឡប់ទៅ​កម្មវិធី</Button>
       </div>
    </div>
  )
}

export default NotFoundPage