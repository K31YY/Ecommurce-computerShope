import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserBrand = () => {
  const Brand = JSON.parse(localStorage.getItem('brand')) || [];
  const InitialProduct = JSON.parse(localStorage.getItem('product')) || [];
  const [product, setProduct] = useState(InitialProduct);
  const [brandFilter, setBrandFilter] = useState('');
  const goto = useNavigate();

  const handleProduct = (product) => {
    console.log(product);
    goto(`/Ecommerce/Brand/${product.id}`);
  };

  const filtering = () => {
    let filteredProduct = InitialProduct;
    if (brandFilter) {
      filteredProduct = InitialProduct.filter(p => p.brand.includes(brandFilter));
      console.log(filteredProduct);
    }
    setProduct(filteredProduct);
  };

  useEffect(() => {
    filtering();
  }, [brandFilter]);

  const handleBrand = (brand) => {
    // console.log(brand);
    setBrandFilter(brand);
  };

  return (
    <>
      <h6 className='font-Apple Color Emoji text-2xl text-center underline m-10'>Each Brand of Goods</h6>
      <div className="flex flex-wrap  justify-evenly mb-96">
        {Brand.map((b, index) => (
          <div key={index} onClick={() => handleProduct(b)}>
            <img  className='w-52 h-52 object-cover rounded-full ' src={b.image} alt={b.name} />
          </div>
        ))}
      </div>
      
    </>
  );
};

export default UserBrand;
