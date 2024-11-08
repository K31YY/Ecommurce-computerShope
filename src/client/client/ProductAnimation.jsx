import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import StockProduct from "./StockProduct";
// child component
const ProductAnimation = ({ products, handleProduct, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 10% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* if you want to add more prop this is component that we must add too  */}
      <StockProduct
        key={index}
        image={products.image}
        name={products.name}
        productName={products.productName}
        cost={products.cost}
        price={products.price}
        onClick={() => handleProduct(products)}
      />
    </motion.div>
  );
};
export default ProductAnimation;
