import React from 'react'

const Footer = () => {
  const teammates = ["Kheourt sokhy" ,'Moun rotha','Seng Chanratha',"Lonly Piny",'Samnang lyhout']
  // 1st of footer store in array -->
  const footer1 = ["Stores", "Cafe", "Store Locator", "Purchase Programs",
    "Bulk Order Program", "Education", "Only at this store", "Store Rewards"];
// 2nd of footer store in array -->
const footer2 = [ "Technology", "Super Car", "Concepts", "Esports", "Collabs"];
// 3rd of footer store in array -->
const footer3 = [ "Get Help", "Registeration", "Store Support", "Our Care", "Manage  ID", 'Support Video', 'Recycling', 'Accessibility'];
 // 4 th of footer store in array -->
const footer4 = [ 'About', 'Careers', 'Newsrooms', 'zVenture', 'Contact Us'] ;
// 5 th of footer store in array -->
const footer5 = ['fa-facebook','fa-instagram','fa-threads','fa-x-twitter','fa-youtube','fa-tiktok','fa-discord']; 
  return (
    
      <footer  className=" w-screen absolute left-0">
      <div className='flex justify-between flex-wrap p-10 mt-10  text-white footer'>
       <div>
        <h2 className='text-3xl  ' >Shop</h2>
          <ul>
            {footer1.map((f1,index) => <li className='size-10 w-48 pt-3 ' key={index}>{f1}</li>)}
          </ul>
       </div>
       <div>
        <h2  className='text-3xl '>Explore</h2>
          <ul>
            {footer2.map((f2,index) => <li className="size-10 w-32 pt-3 " key={index}>{f2}</li>)}
          </ul>
       </div>
       <div>
        <h2  className='text-3xl '>Support</h2>
          <ul>
            {footer3.map((f3,index) => <li className="size-10 w-48 pt-3 " key={index}>{f3}</li>)}
          </ul>
       </div>
       <div>
        <h2  className='text-3xl '>Company</h2>
          <ul>
            {footer4.map((f4,index) => <li className='size-10 w-28 pt-3  ' key={index}>{f4}</li>)}
          </ul>
       </div>
       <div >
        <h2 className='text-3xl ' >Follow Us</h2>
          <ul className='flex flex-col '>
            {footer5.map((f5,index) => <li  className={`fab ${f5} pt-3 size-10 text-xl ` } key={index}></li>)}
          </ul>
       </div>
        <div>
          <h2 className='text-3xl '>Prepared By :</h2>
          <ul>     
            
           {teammates.map((teammate,index) => <li className="size-10 w-40 pt-3 " key={index}>{teammate}</li>)}
          </ul>
        </div>
        
      </div>

    </footer>
    
  )
}

export default Footer