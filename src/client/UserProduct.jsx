import React, { useState, useEffect } from 'react';
import { Button , Input } from 'antd';
import ProductAnimation from './ProductAnimation';
import { useNavigate } from 'react-router-dom';


const UserProduct = () => {
  const allProduct = JSON.parse(localStorage.getItem('product'));
  const [product, setProduct] = useState(allProduct);
  const [searchProduct, setSearchProduct] = useState(''); // filter via search
  const [categoryFilter, setCategoryFilter] = useState(''); // filter via click by category
  const [selectCategory, setSelectCategory] = useState(''); // for change color 
  const goDetails = useNavigate()
 
 
  function handleNavigate(p)
  {
    goDetails(`/Ecommerce/Product/${p.id}`)
  }
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchProduct(e.target.value.toLowerCase());
  };

  // Filter products based on search input and category
  const filterProducts = () => {
    let filteredProducts = allProduct;

    if (searchProduct) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchProduct)
      );
    }

    if (categoryFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    setProduct(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [searchProduct, categoryFilter]);

  const handleCategory = (category) => {
    
    setCategoryFilter(category);
    setSelectCategory(category);
  };
  const categoryLabels = [
    {
      "cate" : "" ,
       "label" : "ALL PRODUCTS"
      },
      {
        "cate" : "ASUS",
       "label" : "ASUS"
      },
      {
        "cate" : "MSI",
       "label" : "MSI"
      },
      {
        "cate" : "DELL",
       "label" : "DELL"
      },
      {
       "cate" : "ACER",
      "label" : "ACER"
       },
      {
        "cate" : "MACBOOK",
        "label" : "MACBOOK"
      },
      // {
      //   "cate" : "ASUSU",
      //  "label" : "ASUS"
      // },
      // {
      //   "cate" : "MSI",
      //  "label" : "MSI"
      // }


  ]
  return (
    <>
      <div >
        <div className=' m-5 w-screen  flex justify-center  '>
          <form className='w-96 flex  items-center'>
            <input
              type="search"
              placeholder="Search By name"
              onChange={handleSearchChange}
            /><i style={{fontSize:20, marginInline:10}} className="fas fa-search"></i>
            {/* <h1 className='text-center my-5 text-3xl'> Choose the category</h1> */}
            
          </form>
        </div>
        <div className='w-screen lg:flex lg:gap-10 lg:mx-5 m-10 flex-wrap grid-cols-2   '>
              
              {
                categoryLabels.map((category, index) => (
                  <Button 
                  // this ternary operator is used for exchange the style btn when click to another category 
                    style={{backgroundColor: selectCategory === category.cate ? 'blue' : '' , 
                      color: selectCategory === category.cate? 'white' : 'black' , width: 150,
                      fontSize: 18 
                    }}

                  key={index}   onClick={() => handleCategory(category.cate)  }>
                    {category.label}
                  </Button>
                ))
              }
            </div>

        <div className="grid lg:grid-cols-3 lg:grid-rows-7 sm:grid-cols-1 md:grid-cols-2 md p-10 gap-10 ProductBorder">
          
          {product.map((product, index) => (
            
            <ProductAnimation
              key={index}
              products={product}
              handleProduct={handleNavigate}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserProduct;
