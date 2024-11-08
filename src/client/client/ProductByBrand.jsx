import { Button, Image } from "antd";
import { useParams } from "react-router-dom";

import RelatedProduct from "./RelatedProduct";

const ProductByBrand = ({Brand,products }) => {
  

  const { id } = useParams(); 
  const APro = Brand.find((p) => p.id === parseInt(id));
const filterbyBrand = products.filter((p) => p.brand.includes(APro.name))
console.log(filterbyBrand)

  if (!APro) return <div>Product not found</div>;

  return (
    <>
      <h1 className="text-center font-freehand text-2xl m-10">ទំនិញម៉ាក<p className="font-Poppins">{APro.name}</p></h1>
      
      <div className="product-details p-4 rounded-lg shadow-lg flex justify-center gap-20 mb-10">
      </div>
      <RelatedProduct products={filterbyBrand}  />
    </>
  );
};

export default ProductByBrand;
