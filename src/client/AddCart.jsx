import { Button, Image, Popconfirm, notification, Space, Table } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const AddCart = ({ cart, setCart, increaseQty, decreaseQty  ,setQty }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement, duration) => {
    api.success({
      message: <h1 className="font-Apple Color Emoji text-xl mb-10">Message</h1>,
      description: <h1 className="font-Apple Color Emoji">Your order was successful!</h1>,
      placement,
      duration,
    });
  };
  function handleDeleteAll()
  {
    setCart([]);
    setQty(0);
  } 

  const handlePurchase = () => {
    if (cart.some(pro => pro.qty > 0)) {
      openNotification("topRight", 5);
      handleDeleteAll()
    } else {
      api.error({
        message: <p className="font-Apple Color Emoji mb-10">Message</p>,
        description: <p className="font-Apple Color Emoji">Not in At Cart</p>,
        duration: 5
      });
    }
  };

  // Transforming the cart array for the Table component
  const dataSource = cart.map((product, index) => ({
    key: product.id,
    ProductName: product.name,
    price: <h1>$ {product.price}</h1>,
    qty: product.qty,
    image: product.image,
    addCart: () => increaseQty(index),
    subCart: () => decreaseQty(index),
  }));

  const columns = [
    {
      title: <h1 className="font-Apple Color Emoji ">Image</h1>,
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <Image width={80} style={{ objectFit: "contain" }} height={80} src={record.image} alt={record.name} />
      ),
      responsive: ['lg'],
    },
    {
      title: <h1 className="font-Apple Color Emoji ">Product Name</h1>,
      dataIndex: "ProductName",
      key: "ProductName",
    },
    {
      title: <h1 className="font-Apple Color Emoji ">Price </h1>,
      dataIndex: "price",
      key: "price",
      responsive: ['md'],
      width: 100
    },
    {
      title: <h1 className="font-Apple Color Emoji ">Qty</h1>,
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: <h1 className="font-Apple Color Emoji ">Add more</h1>,
      key: "add",
      render: (_, record) => (
        <Button onClick={record.addCart} type="primary">
          +
        </Button>
      ),
    },
    {
      title: <h1 className="font-Apple Color Emoji ">Remove</h1>,
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
        onConfirm={handleDeleteAll}
        okText={<h1 className="font-freehand">OK </h1>}
        cancelText={<h1 className="font-Apple Color Emoji">No</h1>}
        className="w-full lg:w-40"
        title={<h1 className="font-Apple Color Emoji">Confirmation</h1>}
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      >
        <Button className="font-Apple Color Emoji w-full lg:w-auto" danger>Delete all</Button>
      </Popconfirm>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        style={{textAlgin: "center"}}
        
      />
      <div className="text-xl flex flex-col gap-5 items-center mt-20 font-Apple Color Emoji">
        <h1>Total Amount​ : $ {cart.reduce((acc, product) => acc + product.qty * product.price, 0)}</h1>
        <h1>Qty : {cart.reduce((acc, product) => acc + product.qty, 0)} Accessories</h1>
      </div>
      <footer>
        <div className="absolute bottom-0 w-[100%] right-0 bg-green-600 flex justify-center items-center">
          <h5 className="hover:opacity-80 text-center p-5 text-lg text-white font-Apple Color Emoji w-full lg:w-auto">
            <Space>
              <Button
                type="primary"
                onClick={handlePurchase}
                style={{ backgroundColor: "transparent", fontFamily: "freehand" }}
                className="w-full lg:w-auto"
              >
                Please place an Order
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
