import { notification, Button, Image, Drawer, Badge, Space } from "antd";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RelatedProduct from "./RelatedProduct";
import AddCart from "./AddCart";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductDetails = () => {
  const products = JSON.parse(localStorage.getItem('product'))
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  const [qty ,setQty] = useState(0);
  const [storeQty , setStoreQty] = useState(0)
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const APro = products.find((p) => p.id === parseInt(id));

  const relatedProduct = products.filter(
    (product) =>
      product.category.includes(APro.category) &&
      product.id !== parseInt(APro.id)
  );

  const addToCart = () => {
    const existProId = cart.findIndex((item) => item.id === APro.id);
    let updatedCart;
    let newProduct = false;

    if (existProId > -1) {
      updatedCart = [...cart];
      updatedCart[existProId].qty += 1;
      
    } else {
      updatedCart = [...cart, { ...APro, qty: 1 }];
      newProduct = true;
    }
    setStoreQty(qty)
    setQty(pre => pre+1)
    console.log(qty)
    
    setCart(updatedCart);
    if (newProduct) {
      notification.success({
        message: (
          <span className="font-Apple Color Emoji">
           At Cart
          </span>
        ),
        description: `${APro.name} has been added to the cart.`,
        duration: 2,
      });
    }
  };

  const increaseQty = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].qty += 1;
      return newCart;
    });
  };

  const decreaseQty = (index) => {
    setQty(storeQty)
    console.log(qty)

    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (newCart[index].qty > 0) {
        newCart[index].qty -= 1;
        if (newCart[index].qty === 0) {
          newCart.splice(index, 1);
          notification.error({
            message: (
              <h1 className="font-Apple Color Emoji">
               Exit to At Cart
              </h1>
            ),
            description: `${APro.name} has been removed from the cart.`,
            duration: 2,
          });
        }
      }
      return newCart;   
    });
  };

  return (
    <>
      <h1 className="text-center font-Apple Color Emoji text-2xl m-10 underline">
        Information of Product
      </h1>
      <div className="product-details p-4 rounded-lg shadow-lg flex justify-center gap-20 mb-10">
        <div>
          <Image
            src={APro.image}
            alt={APro.name}
            title={APro.name}
            style={{
              height: "25rem",
              width: "25rem",
              objectFit: "contain",
              margin: 10,
            }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="font-Poppins text-3xl text-center">{APro.brand}</h6>
          <h1 className="font-Apple Color Emoji">
           Model <span className="font-Poppins">: {APro.name}</span>
          </h1>
          <h1 className="font-bold font-Apple Color Emoji">
            Type <span className="font-Poppins">: {APro.category}</span>
          </h1>
          <h6 className="font-Apple Color Emoji">
            Price: <s className="font-Poppins">$ {APro.cost}</s>
          </h6>
          <h6 className="font-Apple Color Emoji">
            Discount: <span className="font-Poppins">$ {APro.price}</span>
          </h6>
          <Button
            type="primary"
            className="font-Apple Color Emoji w-32"
            onClick={addToCart}
          >
           At Cart
          </Button>
          <details className="cursor-pointer w-96">
            <summary className="font-Apple Color Emoji">About</summary>
            <blockquote>{APro.desc}</blockquote>
          </details>
        </div>
      </div>
      <RelatedProduct products={relatedProduct} />

      <div className="fixed top-0 right-10 z-10 ">
        <Badge className="mt-5" count={qty}>
          <ShoppingCartOutlined
              onClick={showLargeDrawer}
            style={{ fontSize: 40, color: "white" }}
          />
        </Badge>
      </div>
      <Drawer
        title="ការបញ្ជារទិញ"
        placement="right"
        fontfamily="freehand"
        size={size}
        onClose={onClose}
        open={open}
      >
          <AddCart
              cart={cart}
              setCart={setCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              setQty={setQty}
              
            />
      </Drawer>
    </>
  );
};

export default ProductDetails;
