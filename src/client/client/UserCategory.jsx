import React from 'react'

const UserCategory = ({cate}) => {
  
  
  return (
    <>
        <h6 className='font-freehand text-3xl text-center underline m-10'>ប្រភេទនៃទំនិញ</h6>

    <div className="justify-around">
     
      <div className='grid lg:grid-cols-3  lg:grid-rows-5  lg:gap-10'>
       {
        cate.map((cate,index) =>  {return(
         <div key={index} className=' flex flex-col items-center p-10' >
          <img className='w-80 h-80 object-cover' src={cate.image} alt="" />
          <h2 className='text-center '>{cate.name}</h2>
         </div>
        ) })
       }
      </div> 
    </div>
      </>
  )
}

export default UserCategory