import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductAnimation from './ProductAnimation'
import { Empty } from 'antd'
const RelatedProduct = ({products}) => {
    const CheckAt = useNavigate("")
    const handleProduct = (product) => {
        CheckAt(`/Ecommerce/Product/${product.id}`)
    }
  return (
    <>
     <h1 className="font-Apple Color Emoji text-xl m-10 underline">ទំនិញដែលពាក់ព័ន្ធ :</h1>
        {/* map through the related products and display them */}
      {products && products.length > 0 ? 
        <div  className="product-details p-4  rounded-lg shadow-lg flex justify-center gap-20 mb-10">
          
          <div className="lg:grid lg:grid-cols-3 lg:ml-10 lg:grid-rows-2 lg:gap-10">
            {
                 products.map((product, index) => (
                    <ProductAnimation 
                      key={index}
                // variable name product is declare the same as parameter name of ProductAnimation
                      products={product}
                      handleProduct={handleProduct}
                      index={index}
                    /> 
            ))}
          </div>
        </div> : <div className='grid lg:grid-rows-3 '> <Empty /> </div> }
    </>
  )
}

export default RelatedProduct