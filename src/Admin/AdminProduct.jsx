import { Divider, Table, Button, Modal, message, Popconfirm } from "antd";
import React, { useEffect, useRef, useState } from "react";

const AdminProduct = () => {
  if (!doesLocalStorageItemExist("brand")) {
    localStorage.setItem("brand", JSON.stringify([]));
  }
  if (!doesLocalStorageItemExist("cate")) {
    localStorage.setItem("cate", JSON.stringify([]));
  }

  const productImage = useRef();
  const productName = useRef();
  const productCost = useRef();
  const productPrice = useRef();
  const productQuantity = useRef();
  const productCategory = useRef();
  const productBrand = useRef();
  const productDesc = useRef();

  const [editProductNo, setEditProductNo] = useState("");
  const [editProductImg, setEditProductImg] = useState("");
  const [editProductName, setEditProductName] = useState("");
  const [editProductCost, setEditProductCost] = useState("");
  const [editProductPrice, setEditProductPrice] = useState("");
  const [editProductQuantity, setEditProductQuantity] = useState("");
  const [editProductCate, setEditProductCate] = useState("");
  const [editProductBrand, setEditProductBrand] = useState("");
  const [editProductDesc, setEditProductDesc] = useState("");
  const [edited, setEdited] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const EdithandleCancel = () => {
    setIsEditModalOpen(false);
  };

  const [product, setProduct] = useState(
    doesLocalStorageItemExist("product")
      ? [...JSON.parse(localStorage.getItem("product"))]
      : [],
  );

  const [selectRow, setSelectRow] = useState();

  useEffect(() => {
    if (selectRow) {
      const filterProduct = product.filter((a) => {
        return a.id != selectRow.id;
      });

      setProduct(() => [...filterProduct]);
    }
  }, [selectRow]);

  const [selectEditRow, setEditSelectRow] = useState();

  useEffect(() => {
    if (selectEditRow) {
      setEditProductNo(selectEditRow.no);
      setEditProductImg(selectEditRow.image);
      setEditProductName(selectEditRow.name);
      setEditProductCost(selectEditRow.cost);
      setEditProductPrice(selectEditRow.price);
      setEditProductQuantity(selectEditRow.qty);
      setEditProductCate(selectEditRow.category);
      setEditProductBrand(selectEditRow.brand);
      setEditProductDesc(selectEditRow.desc);
    }
  }, [selectEditRow]);

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      id: "no",
    },
    {
      title: "Image",
      dataIndex: "image",
      id: "image",
      render: (_, record) => (
        <img
          className="w-32 h-28 object-contain"
          src={record.image}
          alt="Image"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      id: "name",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      id: "cost",
    },
    {
      title: "Price",
      dataIndex: "price",
      id: "price",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      id: "qty",
    },
    {
      title: "Category",
      dataIndex: "category",
      id: "category",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      id: "brand",
    },
    {
      title: "Description",
      dataIndex: "desc",
      id: "desc",
    },
    {
      title: "Action",
      dataIndex: "action",
      id: "action",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setIsEditModalOpen(true);
                setEditSelectRow({ ...record });
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => {
                message.success("Record Deleted");
                return setSelectRow(record);
              }}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (
      productImage.current.value != "" &&
      productName.current.value != "" &&
      productCost.current.value != "" &&
      productPrice.current.value != "" &&
      productQuantity.current.value != "" &&
      productDesc.current.value != ""
    ) {
      setProduct((cv) => [
        ...cv,
        {
          id: product.length != 0 ? product[product.length - 1].id + 1 : 1,
          no: product.length != 0 ? product[product.length - 1].id + 1 : 1,
          image: productImage.current.value,
          name: productName.current.value,
          cost: productCost.current.value,
          price: productPrice.current.value,
          qty: productQuantity.current.value,
          category: productCategory.current.value,
          brand: productBrand.current.value,
          desc: productDesc.current.value,
        },
      ]);

      productImage.current.value = "";
      productName.current.value = "";
      productCost.current.value = "";
      productPrice.current.value = "";
      productQuantity.current.value = "";
      productCategory.current.value = "";
      productBrand.current.value = "";
      productDesc.current.value = "";
      setIsModalOpen(false);
    } else {
      message.error("Please fill all the input field below !!");
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cancel = () => {
    message.error("Record Canceled Delete");
  };

  function doesLocalStorageItemExist(id) {
    return localStorage.getItem(id) !== null;
  }

  useEffect(() => {
    if (edited) {
      const editRow = product.map((a) => {
        if (a.no === edited.no) {
          return (a = {
            id: a.no,
            no: a.no,
            image: edited.image,
            name: edited.name,
            cost: edited.cost,
            price: edited.price,
            qty: edited.qty,
            category: edited.category,
            brand: edited.brand,
            desc: edited.desc,
          });
        } else {
          return a;
        }
      });

      setProduct([...editRow]);
    }
  }, [edited]);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify([...product]));
    sessionStorage.setItem("adminLocation", "product");
  }, [product]);

  const data = product;

  function getAll(abc) {
    const all = JSON.parse(localStorage.getItem(abc));

    return all.map((a) => {
      return <option value={a.name}>{a.name}</option>;
    });
  }
  function getAllEditedCate(abc) {
    if (selectEditRow) {
      const all = JSON.parse(localStorage.getItem(abc));

      return all.map((a) => {
        if (a.name == selectEditRow.category) {
          return (
            <option value={a.name} selected>
              {a.name}
            </option>
          );
        } else {
          return <option value={a.name}>{a.name}</option>;
        }
      });
    }
  }
  function getAllEditedBrand(abc) {
    if (selectEditRow) {
      const all = JSON.parse(localStorage.getItem(abc));

      return all.map((a) => {
        if (a.name == selectEditRow.brand) {
          return (
            <option value={a.name} selected>
              {a.name}
            </option>
          );
        } else {
          return <option value={a.name}>{a.name}</option>;
        }
      });
    }
  }

  return (
    <>
      <Modal
        title="Edit Product"
        open={isEditModalOpen}
        onOk={() => {
          if (
            editProductImg != "" &&
            editProductName != "" &&
            editProductCost != "" &&
            editProductPrice != "" &&
            editProductQuantity != "" &&
            editProductCate != "" &&
            editProductBrand != "" &&
            editProductDesc != ""
          ) {
            setEdited(() => {
              return {
                no: editProductNo,
                image: editProductImg,
                name: editProductName,
                cost: editProductCost,
                price: editProductPrice,
                qty: editProductQuantity,
                category: editProductCate,
                brand: editProductBrand,
                desc: editProductDesc,
              };
            });
            setIsEditModalOpen(false);
          } else {
            message.error("Please fill all the input field below !!");
          }
        }}
        onCancel={EdithandleCancel}
        okText="Update"
      >
        <img
          className="mx-auto block size-[120px] object-cover"
          src={editProductImg ? editProductImg : null}
          alt="Image"
        />
        <div id="frm-add">
          <label htmlFor="noEdit">No. : </label>
          <input
            type="text"
            readOnly
            onChange={(e) => setEditProductNo(e.target.value)}
            value={editProductNo ? editProductNo : null}
            name="noEdit"
            id="noEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="imageEdit">Image : </label>
          <input
            type="text"
            placeholder="Product Image"
            readOnly={false}
            onChange={(e) => setEditProductImg(e.target.value)}
            value={editProductImg ? editProductImg : null}
            name="imageEdit"
            id="imageEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="nameEdit">Name : </label>
          <input
            type="text"
            readOnly={false}
            placeholder="Product Name"
            onChange={(e) => setEditProductName(e.target.value)}
            value={editProductName ? editProductName : null}
            name="nameEdit"
            id="nameEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="costEdit">Cost : </label>
          <input
            type="number"
            min="0"
            max="1000"
            step="0.01"
            readOnly={false}
            placeholder="Product Cost"
            onChange={(e) => setEditProductCost(e.target.value)}
            value={editProductCost ? editProductCost : null}
            name="costEdit"
            id="costEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="priceEdit">Price : </label>
          <input
            type="number"
            min="0"
            max="1000"
            step="0.01"
            readOnly={false}
            placeholder="Product Price"
            onChange={(e) => setEditProductPrice(e.target.value)}
            value={editProductPrice ? editProductPrice : null}
            name="priceEdit"
            id="priceEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="qtyEdit">Quantity : </label>
          <input
            type="number"
            min="0"
            max="1000"
            readOnly={false}
            placeholder="Product Quantity"
            onChange={(e) => setEditProductQuantity(e.target.value)}
            value={editProductQuantity ? editProductQuantity : null}
            name="qtyEdit"
            id="qtyEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="cateEdited">Category : </label>
          <select
            name="cateEdited"
            id="cateEdited"
            onChange={(e) => setEditProductCate(e.target.value)}
          >
            {getAllEditedCate("cate")}
          </select>
        </div>
        <div id="frm-add">
          <label htmlFor="brandEdited">Brand : </label>
          <select
            name="brandEdited"
            id="brandEdited"
            onChange={(e) => setEditProductBrand(e.target.value)}
          >
            {getAllEditedBrand("brand")}
          </select>
        </div>
        <div id="frm-add">
          <label htmlFor="descEdit">Description : </label>
          <input
            type="text"
            readOnly={false}
            placeholder="Product Description"
            onChange={(e) => setEditProductDesc(e.target.value)}
            value={editProductDesc ? editProductDesc : null}
            name="descEdit"
            id="descEdit"
          />
        </div>
      </Modal>
      <Divider className="text-xl">All Product</Divider>
      <Button className="my-5" type="primary" onClick={showModal}>
        Add More Product
      </Button>
      <Modal
        title="Add More Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Add"}
      >
        <div id="frm-add">
          <label htmlFor="image">Image : </label>
          <input
            ref={productImage}
            type="text"
            name="image"
            placeholder="type image url"
            id="image"
            
          />
        </div>
        <div id="frm-add">
          <label htmlFor="name">Name : </label>
          <input
            ref={productName}
            type="text"
            placeholder="product name"
            name="name"
            id="name"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="cost">Cost : </label>
          <input
            type="number"
            min="0"
            max="1000"
            step="0.01"
            ref={productCost}
            placeholder="product cost"
            name="cost"
            id="cost"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="price">Price : </label>
          <input
            ref={productPrice}
            type="number"
            min="0"
            max="1000"
            step="0.01"
            placeholder="product price"
            name="price"
            id="price"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="quantity">Quantity : </label>
          <input
            ref={productQuantity}
            type="number"
            min="0"
            max="1000"
            placeholder="Product Quantity"
            name="quantity"
            id="quantity"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="category">Category : </label>
          <select ref={productCategory} name="category" id="category">
            {getAll("cate")}
          </select>
        </div>
        <div id="frm-add">
          <label htmlFor="brand">Brand : </label>
          <select ref={productBrand} name="brand" id="brand">
            {getAll("brand")}
          </select>
        </div>
        <div id="frm-add">
          <label htmlFor="desc">Description : </label>
          <input
            ref={productDesc}
            type="text"
            placeholder="Product Desc"
            name="desc"
            id="desc"
          />
        </div>
      </Modal>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default AdminProduct;