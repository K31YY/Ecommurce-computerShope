import {Badge } from "antd"


const StockProduct = ({image,  price,name , cost ,onClick}) => {
  // const [ i , setI] = useState(0)
  return (
   
  <>
  
 <div className="cursor-pointer">
 <div onClick={onClick} className=" flex   border-2 product-info duration-300  justify-around items-center p-4 space-x-4 rounded-lg shadow-lg">
    <img  title="សូមធ្វើការចុចដើម្បីទទួលបានព័ត៌មានបន្ថែម" id='image' src={image} alt="" className="w-52 h-52 object-contain rounded-lg"/>
    <div className="space-y-2 flex flex-col items-center flex-wrap text-center">
      <h1 className="">{name}</h1>
      <s className="text-red-600 text-xl" >$ {cost}.00</s>
      <Badge style={{position:"absolute", top:20,right:"2rem" ,background:"red" ,fontSize:10}} count={"In Stock"}>
        <button className="border-2 border-solid py-3  m-5 rounded-xl hover:border-blue-700 text-blue-700 hover:text-white hover:bg-blue-700 text-lg duration-300 px-7">$ {price}.00</button>
      </Badge>
      
    </div>
  
  </div>
 </div>

     {/* {i} */}
     </> 
   
  
  )
}

export default StockProduct