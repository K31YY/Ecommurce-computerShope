import { Divider, Table, Button, Modal, message, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";

const AdminCategory = () => {
  const [cate, setCate] = useState(
    JSON.parse(localStorage.getItem("cate")) || []
  );
  const [newCate, setNewCate] = useState({
    image: '',
    name: '',
    description: ''
  });
  const [editCate, setEditCate] = useState({
    id: '',
    no: '',
    image: '',
    name: '',
    description: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddCategory = () => {
    if (newCate.image && newCate.name && newCate.description) {
      const newCategory = {
        id: cate.length ? cate[cate.length - 1].id + 1 : 1,
        no: cate.length ? cate[cate.length - 1].no + 1 : 1,
        ...newCate,
      };
      setCate([...cate, newCategory]);
      setNewCate({ image: '', name: '', description: '' });
      setIsModalOpen(false);
    } else {
      message.error("Please fill all the input fields!");
    }
  };

  const handleEditCategory = () => {
    if (editCate.image && editCate.name && editCate.description) {
      const updatedCate = cate.map(item =>
        item.id === editCate.id ? editCate : item
      );
      setCate(updatedCate);
      setIsEditModalOpen(false);
    } else {
      message.error("Please fill all the input fields!");
    }
  };

  const handleDeleteCategory = (id) => {
    const updatedCate = cate.filter(item => item.id !== id);
    setCate(updatedCate);
    message.success("Record Deleted");
  };

  useEffect(() => {
    localStorage.setItem("cate", JSON.stringify(cate));
    sessionStorage.setItem("adminLocation", "category");
  }, [cate]);

  const columns = [
    { title: "No.", dataIndex: "no", key: "no" },
    {
      title: "Image", dataIndex: "image", key: "image",
      render: (text, record) => <img src={record.image} alt="Image" className="w-28 h-28 object-cover" />
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Action", key: "action",
      render: (text, record) => (
        <>
          <Button
            type="link"
            onClick={() => {
              setEditCate(record);
              setIsEditModalOpen(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete the category"
            onConfirm={() => handleDeleteCategory(record.id)}
            onCancel={() => message.error("Delete Cancelled")}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      )
    },
  ];

  return (
    <>
      <Divider className="text-xl">All Categories</Divider>
      <Button className="my-5" type="primary" onClick={() => setIsModalOpen(true)}>
        Add More Category
      </Button>
      <Modal
        title="Add More Category"
        visible={isModalOpen}
        onOk={handleAddCategory}
        onCancel={() => setIsModalOpen(false)}
        okText="Add"
      >
        <div>
          <label>Image: </label>
          <input
            type="text"
            placeholder="Category Image URL"
            value={newCate.image}
            onChange={(e) => setNewCate({ ...newCate, image: e.target.value })}
          />
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Category Name"
            value={newCate.name}
            onChange={(e) => setNewCate({ ...newCate, name: e.target.value })}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            placeholder="Category Description"
            value={newCate.description}
            onChange={(e) => setNewCate({ ...newCate, description: e.target.value })}
          />
        </div>
      </Modal>
      <Modal
        title="Edit Category"
        visible={isEditModalOpen}
        onOk={handleEditCategory}
        onCancel={() => setIsEditModalOpen(false)}
        okText="Update"
      >
        <div>
          <label>No.: </label>
          <input
            type="text"
            readOnly
            value={editCate.no}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            value={editCate.image}
            onChange={(e) => setEditCate({ ...editCate, image: e.target.value })}
          />
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={editCate.name}
            onChange={(e) => setEditCate({ ...editCate, name: e.target.value })}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={editCate.description}
            onChange={(e) => setEditCate({ ...editCate, description: e.target.value })}
          />
        </div>
      </Modal>
      <Table columns={columns} dataSource={cate} rowKey="id" />
    </>
  );
};

export default AdminCategory;
