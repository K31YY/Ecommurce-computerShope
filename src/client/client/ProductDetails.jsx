import { Button, Image } from "antd";
import { useParams } from "react-router-dom";
import RelatedProduct from "./RelatedProduct";


const ProductDetails = ({products}) => {


  // const products = JSON.parse(localStorage.getItem('product')) || [];
  // const filteredProducts = products.filter(product => product.category.includes("Keyboard"));
  const { id } = useParams();
  const APro = products.find((p) => p.id === parseInt(id));
  
  // this variable is filter only product that related to the once that we click for show detail
  const relatedProduct = products.filter(product => product.category.includes(APro.category) && product.id !== parseInt(APro.id));
  
  
  

  return (
    <>
      <h1 className="text-center font-freehand text-2xl m-10 underline">ព័ត៌មានបន្ថែមនៃទំនិញ</h1>
      <div className="product-details p-4 rounded-lg shadow-lg flex justify-center gap-20 mb-10">
        <div>
          <Image
            src={APro.image}
            alt={APro.name}
            title={APro.name}
            style={{ height: '25rem', width: '25rem', objectFit: 'contain', margin: 10 }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="font-Poppins text-3xl text-center">{APro.brand}</h6>
          <h1 className="font-freehand">ម៉ូដែលនៃទំនិញ <span className="font-Poppins">: {APro.name}</span></h1>
          <h1 className="font-bold font-freehand">ប្រភេទទំនិញ <span className="font-Poppins">: {APro.category}</span></h1>
          <h6 className="font-freehand">តម្លៃដើម: <s className="font-Poppins">$ {APro.cost}</s></h6>
          <h6 className="font-freehand">បញ្ចុះនៅសល់: <span className="font-Poppins">$ {APro.price}</span></h6>
          <Button className="font-freehand w-40 p-5">ដាក់ចូលកន្ដ្រក</Button>
          <details className="cursor-pointer w-96">
            <summary className="font-freehand">អំពីទំនិញ</summary>
            <h1>{APro.desc}</h1>
          </details>
        </div>
      </div>
      <RelatedProduct products={relatedProduct}/>
    </>
  );
};

export default ProductDetails;
