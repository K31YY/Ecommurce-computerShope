import React from 'react';
import { Carousel, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import ProductAnimation from './ProductAnimation';
import asus from "../assets/Images/01__kv_rog_scar_se.jpg";
import msi from '../assets/Images/F9vkaVLW4AAOiGy.jpg';
import dell from '../assets/Images/gaming-laptop-20190417-1.jpg';
import mac from '../assets/Images/alienwareamdlaptop-1664995919535.jpg';
import acer from '../assets/Images/MacBook_Pro_13_in_Product_Page_L__en-US_01._CB635108325_.jpg';
const UserHome = () => {
const brand =JSON.parse( localStorage.getItem('brand'));
 const products = JSON.parse(localStorage.getItem('product'))
 console.log(products)
  const nav = useNavigate();

  const handleProduct = (product) => {
    nav(`/Ecommerce/Product/${product.id}`);
  };

  const popular = products.filter(p => p.id < 4);
  const slider = [asus, msi, dell, mac, acer];

  return (
    <>
      <Carousel className=' -z-10' autoplay autoplaySpeed={3000}>
        {slider.map((i, index) => 
          <div key={index}>
            <Image style={{ height: 700, width: "100vw", objectFit: "fill" }} src={i} alt={i} />
          </div>
        )}
      </Carousel>

      <h6 className='font-Segoe UI Emoji text-3xl text-center mt-10 underline'>All Product</h6>
      <article className="">
        <div className='grid lg:grid-cols-3 lg:grid-rows-3 md:grid-rows-10 md:grid-cols-2 sm:grid-cols-1 lg:mx-10 sm:mx-5 mt-10 gap-10 ProductBorder'>
          {products.map((product, index) => (
            <ProductAnimation
              key={index}
              products={product}
              handleProduct={handleProduct}
              index={index}
            />
          ))}
        </div>
      </article>

      <h6 className='font-Segoe UI Emoji text-3xl text-center underline mt-10'> The Best Selling Products</h6>
      <div className='grid lg:grid-cols-3 lg:grid-rows-2 md:grid-rows-10 md:grid-cols-2 sm:grid-cols-1 lg:mx-10 sm:mx-5 mt-10 gap-10 ProductBorder'>
        {popular.map((pro, index) => (
          <ProductAnimation
            key={index}
            products={pro}
            handleProduct={handleProduct}
            index={index}
          />
        ))}
      </div>

      <h2 className='text-center m-20 font-Segoe UI Emoji text-3xl'>Collaborative Partners</h2>
      <div className='marquee'>
        <div className="marquee-content">
          {brand.length > 0 ? (
            brand.map((b, index) => (
              <div key={index} className='flex justify-evenly gap-10'>
                <img className='w-32 h-32 lg:w-52 lg:h-52  object-cover' src={b.image} alt={b.name} />
              </div>
            ))
          ) : (
            <p>No brands available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default UserHome;
