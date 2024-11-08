import { Button , Drawer ,Space,Badge } from "antd"

import { Loading3QuartersOutlined,  LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddCart from "./AddCart";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import shoplogo from "../assets/DE 09 AUTO.png";
const UserScreen = () => {
  const goto = useNavigate("");
  const [isloading, setIsloading] = useState(false);
  const location = useLocation();
  // console.log(location)

  function navColor(path)
  {
   return location.pathname === path ? "black" : "white";
  }
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
      <span  className="text-white font-freehand">សូមធ្វើការរង់ចាំ</span></div>
    )
  }
  // nav's name store as array including khmer and english
  const nav = [
    {  "id":1,  "type":"",  "kh" : "ទំព័រដើម",  'eng' : ""},
    {"id":2,"type":"/Ecommerce","kh" : "ផលិតផល",'eng' : "/Products"},
    { "id":3, "type":"/Ecommerce", 'kh':'ប្រភេទទំនិញ', 'eng':'/Category'  },
    { "id":4, "type":"/Ecommerce", 'kh' : 'ម៉ាកទំនិញ', 'eng':'/Brand' },
  ]
  return (
    <>
    <div className="flex  w-screen  justify-between gap-x-10 lg:h-20 align-middle header sm:h-20 sticky top-0 z-10">
      <nav className=" ml-10 font-freehand flex gap-5 ">
        <div className="flex  flex-wrap items-center self-center">
          <img className="lg:w-32 lg:h-52 sm:w-16  sm:object-cover " src={shoplogo} alt="" />
          </div>
        {
          
            nav.map((n) => {
              return(
                <button  key={n.id} className="font-freehand" style={{ color:navColor(`${n.type}${n.eng}`), border:"none" ,flexWrap:"wrap", fontSize:18 , fontWeight:"bold"}} 
                onClick={navigate(`${n.type}${n.eng}`)}><span>{n.kh}</span></button>
              )
            })
        }
      </nav>
      <div className="gap-5 mr-16 flex align-middle cursor-pointer  ">
      
     
<Badge className="mt-5" count={5}>
      <ShoppingCartOutlined  onClick={showLargeDrawer}   style={{fontSize:40 , color: "white"}}/>
  </Badge>    
    <Drawer
        title="ការបញ្ជារទិញ"
        placement="right"
        fontfamily="freehand"
        size={size}
       
        onClose={onClose}
        open={open}
        extra={
          <Space>
           
           
          </Space>
        }
      >
        
      <AddCart/>
      </Drawer>
    
      </div>
    </div>
      <Outlet/>
    
     <Footer />
   
    </>
  )
}

export default UserScreen