import { Button, Image, Popconfirm, notification, Space, Table } from "antd";
import { useState } from "react";
import "../index.css";
import { QuestionCircleOutlined } from "@ant-design/icons";

const AddCart = () => {
  const initialProducts = JSON.parse(localStorage.getItem("product")) || [];
  const [products, setProducts] = useState(initialProducts);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement , duration) => {
    api.info({
      message:<span className="font-freehand text-xl mb-10">ការផ្ញើរសារ</span>,
      description:<p className="font-freehand"> ការកម្មង់ទំនិញរបស់លោកអ្នកត្រូវបានទទួលជោគជ័យ</p>,
        
      placement,
      duration,
    });
  };

  const addCart = (index) => {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      newProducts[index].qty++;
      return newProducts;
    });
  };

  const subCart = (index) => {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      if (newProducts[index].qty > 0) {
        newProducts[index].qty -= 1;
      }
      return newProducts;
    });
  };

  const removeAllCart = () => {
    setProducts((prevProducts) => {
      const proAfterRemove = prevProducts.map((product) => ({
        ...product,
        qty: 0,
      }));
      return proAfterRemove;
    });
  };
  function handlePurchase()
  {
    openNotification("bottomRight", 5);
    removeAllCart()
    console.log("Purchase" )
    
  }
  const dataSource = null;
  //  products
  //   .filter(p => p.qty > 0)
  //   .map((product, index) => ({
  //     key: product.id,
  //     ProductName: product.name,
  //     price: <span>$ {product.price}</span>,
  //     qty: 1,
  //     image: product.image,
  //     addCart: () => addCart(index),
  //     subCart: () => subCart(index),
  //   }));

  const columns = [
    {
      title: <span className="font-freehand text-base">រូបភាព</span>,
      dataIndex: "image", 
      key: "image",
      render: (_, record) => (
        <Image width={80} style={{objectFit:"contain"}}  height={80} src={record.image} alt={record.name} />
      ),
    },
    {
      title: <span className="font-freehand text-base">ឈ្មោះទំនិញ</span>,
      dataIndex: "ProductName",
      key: "ProductName",
    },
    {
      title: <span className="font-freehand text-base w-60">តម្លៃ</span>,
      dataIndex: "price",
      key: "price",
    },
    {
      title: <span className="font-freehand text-base">ចំនួន</span>,
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: <span className="font-freehand text-base">បន្ថែម</span>,
      key: "add",
      render: (_, record) => (
        <Button onClick={record.addCart} type="primary">
          +
        </Button>
      ),
    },
    {
      title: <span className="font-freehand text-base">ដកចេញ</span>,
      key: "sub",
      render: (_, record) => (
        <button
          className="bg-red-600 w-10 rounded-md text-white h-8 hover:bg-red-500"
          onClick={record.subCart}
        >
          -
        </button>
      ),
    },
  ];

  return (
    <>
      <Popconfirm
      onConfirm={removeAllCart}
      okText={<span className="font-freehand"> យល់ព្រម</span>}
      cancelText={<span className="font-freehand"> អត់ទេ</span>}
    className="lg:w-40"
        title={<span className="font-freehand ">ការបញ្ជាក់</span>}
        
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <Button  className="font-freehand" danger>លុបទាំងអស់</Button>
      </Popconfirm>
      <Table dataSource={dataSource} columns={columns} />
      <div className="text-xl flex flex-col gap-5 items-center font-freehand">
        {/* <h1>ទឹកប្រាក់សរុប​ : $ {products.reduce((acc, product) => acc + product.qty * product.price, 0)}</h1>
        <h1>ចំនួនទំនិញ : {products.reduce((acc, product) => acc + product.qty, 0)} គ្រឿង</h1> */}
      </div>
      <footer>
        <div className="absolute bottom-0 left-0 right-0 bg-green-600 justify-center items-center  ">
          <h5 className=" hover:opacity-80 text-center p-5 text-lg text-white font-freehand">
            <Space>
            <Button
          type="primary"
          onClick={handlePurchase}
          
          style={{backgroundColor: "transparent",fontFamily:"freehand"}}
          
        >
          សូមធ្វើការបញ្ជារទិញ
        </Button>
            </Space>
          {contextHolder}
          </h5>
        </div>
      </footer>
    </>
  );
};

export default AddCart;
