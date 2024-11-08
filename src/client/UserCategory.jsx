import React from 'react'

const UserCategory = () => {
  
  const cate = JSON.parse(localStorage.getItem('cate'))
  
  return (
    <>
        <h6 className='font-Apple Color Emoji text-3xl text-center underline m-10'>All Products</h6>

    <div className="justify-around">
     
      <div className='grid lg:grid-cols-2  lg:grid-rows-5  lg:gap-10'>
       {
        cate.map((cate,index) =>  {return(
         <div key={index} className=' flex flex-col w-[100%]  items-center p-10' >
          <img className=' h-80 object-fill w-96' src={cate.image} alt="" />
          <h2 className='text-cente '>{cate.name}</h2>
         </div>
        ) })
       }
      </div> 
    </div>
      </>
  )
}

export default UserCategory