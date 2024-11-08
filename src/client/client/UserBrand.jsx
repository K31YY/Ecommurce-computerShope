import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserBrand = ({ Brand }) => {
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
      <h6 className='font-freehand text-2xl text-center underline m-10'>ម៉ាកនីមួយៗនៃទំនិញ</h6>
      <div className="flex justify-evenly my-20">
        {Brand.map((b, index) => (
          <div key={index} onClick={() => handleProduct(b)}>
            <img  className='w-52 h-52 object-cover' src={b.image} alt={b.name} />
          </div>
        ))}
      </div>
      
    </>
  );
};

export default UserBrand;
