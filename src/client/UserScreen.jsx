import brand from "../brand"
import product from "../product"
import category from "../category";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import shoplogo from "../assets/Images/pngegg.png";
const UserScreen = () => {
  const goto = useNavigate("");
  const [isloading, setIsloading] = useState(false);
  const location = useLocation();
  
  // console.log(product)
  function doesLocalStorageItemExist(id) {
    return localStorage.getItem(id) !== null;
  }
  if(!doesLocalStorageItemExist("brand")){
    localStorage.setItem("brand", JSON.stringify(brand))
  }
  if(!doesLocalStorageItemExist("cate")){
    localStorage.setItem("cate", JSON.stringify(category))
  }
  if(!doesLocalStorageItemExist("product")){
    localStorage.setItem("product", JSON.stringify(product))
  }
  
  function navColor(path)
  {
   return location.pathname === path ? "black" : "white";
  }

  // navigation to different pages with delay time
  const  navigate = (path) =>
    {
  {
   return () =>
  {
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false);
      goto(path) 
    },1000)
    }
  }
}

  if(isloading){
    return (
      <div className="h-screen flex text-2xl text-center m-0 bg-black align justify-center items-center "><Loading3QuartersOutlined  className="animate-spin" style={{ color:"white", fontSize:40 , marginRight:10}}/>
      <span  className="text-white font-Apple Color Emoji">Waiting...</span></div>
    )
  }
  // nav's name store as array including khmer and english
  const nav = [
    {  "id":1,  "type":"",  "kh" : "Home",  'eng' : ""},
    {"id":2,"type":"/Ecommerce","kh" : "Product",'eng' : "/Products"},
    { "id":3, "type":"/Ecommerce", 'kh':'Categories', 'eng':'/Category'  },
    { "id":4, "type":"/Ecommerce", 'kh' : 'Brands', 'eng':'/Brand' },
  ]
  return (
    <>
    <div className="flex  w-screen  h-20 justify-between gap-x-10 lg:h-20 align-middle header sm:h-20 sticky top-0 z-10">
      <nav className=" ml-10 font-Apple Color Emoji flex gap-5 ">
        <div className="flex  flex-wrap items-center self-center">
          <img className="lg:w-30 lg:h-10  sm:object-cover " src={shoplogo} alt="" />
          </div>
        {
          
            nav.map((n) => {
              return(
                <button  key={n.id} className="font-Apple Color Emoji  mr-3" style={{ color:navColor(`${n.type}${n.eng}`), border:"none" ,flexWrap:"wrap", fontSize:18 , fontWeight:"bold"}} 
                onClick={navigate(`${n.type}${n.eng}`)}><span>{n.kh}</span></button>
              )
            })
        }
      </nav>
    </div>
      <Outlet/>
     <Footer />
   
    </>
  )
  
}

export default UserScreen