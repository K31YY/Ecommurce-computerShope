import { Divider, Table, Button, Modal, message, Popconfirm } from "antd";
import React, { useEffect, useRef, useState } from "react";

const AdminBrand = () => {
  let brandArr = JSON.parse(localStorage.getItem("brand")).length;
  console.log(brandArr);
  const brandImg = useRef();
  const brandName = useRef();
  const brandDesc = useRef();

  const [editBrandNo, setEditBrandNo] = useState("");
  const [editBrandImg, setEditBrandImg] = useState("");
  const [editBrandName, setEditBrandName] = useState("");
  const [editBrandDesc, setEditBrandDesc] = useState("");
  const [edited, setEdited] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const EdithandleCancel = () => {
    setIsEditModalOpen(false);
  };

  const [brand, setBrand] = useState(
    doesLocalStorageItemExist("brand")
      ? [...JSON.parse(localStorage.getItem("brand"))]
      : []
  );

  const [selectRow, setSelectRow] = useState();

  useEffect(() => {
    if (selectRow) {
      const filterBrand = brand.filter((a) => {
        return a.id != selectRow.id;
      });

      setBrand(() => [...filterBrand]);
    }
  }, [selectRow]);

  const [selectEditRow, setEditSelectRow] = useState();

  useEffect(() => {
    if (selectEditRow) {
      setEditBrandNo(selectEditRow.no);
      setEditBrandImg(selectEditRow.image);
      setEditBrandName(selectEditRow.name);
      setEditBrandDesc(selectEditRow.description);
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
      render: (_, record) => {
        return (
          <img
            src={record.image}
            className="w-28 h-28 object-cover "
            alt="Image"
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      id: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      id: "description",
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
      brandImg.current.value != "" &&
      brandName.current.value != "" &&
      brandDesc.current.value != ""
    ) {
      setBrand((cv) => [
        ...cv,
        {
          id: brand.length != 0 ? brand[brand.length - 1].id + 1 : 1,
          no: brand.length != 0 ? brand[brand.length - 1].id + 1 : 1,
          image: brandImg.current.value,
          name: brandName.current.value,
          description: brandDesc.current.value,
        },
      ]);

      brandImg.current.value = "";
      brandName.current.value = "";
      brandDesc.current.value = "";

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
      const editRow = brand.map((a) => {
        if (a.no === edited.no) {
          return (a = {
            id: a.no,
            no: a.no,
            image: edited.image,
            name: edited.name,
            description: edited.desc,
          });
        } else {
          return a;
        }
      });

      setBrand([...editRow]);
    }
  }, [edited]);

  useEffect(() => {
    localStorage.setItem("brand", JSON.stringify(brand));

    sessionStorage.setItem("adminLocation", "brand");
  }, [brand]);

  const data = brand;

  return (
    <>
      <Modal
        title="Edit Brand"
        open={isEditModalOpen}
        onOk={() => {
          if (
            editBrandImg != "" &&
            editBrandName != "" &&
            editBrandDesc != ""
          ) {
            setEdited(() => {
              return {
                no: editBrandNo,
                image: editBrandImg,
                name: editBrandName,
                desc: editBrandDesc,
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
          src={editBrandImg ? editBrandImg : null}
          alt="Image"
        />
        <div id="frm-add">
          <label htmlFor="noEdit">No. : </label>
          <input
            type="text"
            readOnly
            onChange={(e) => setEditBrandNo(e.target.value)}
            value={editBrandNo ? editBrandNo : null}
            name="noEdit"
            id="noEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="imageEdit">Image : </label>
          <input
            type="text"
            placeholder="Brand Image"
            readOnly={false}
            onChange={(e) => setEditBrandImg(e.target.value)}
            value={editBrandImg ? editBrandImg : null}
            name="imageEdit"
            id="imageEdit"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="nameEdit">Name : </label>
          <input
            type="text"
            readOnly={false}
            placeholder="Brand Name"
            onChange={(e) => setEditBrandName(e.target.value)}
            value={editBrandName ? editBrandName : null}
            name="nameEdit"
            id="nameEdit"
          />
        </div>

        <div id="frm-add">
          <label htmlFor="DescEdit">Description : </label>
          <input
            type="text"
            readOnly={false}
            placeholder="Brand Description"
            onChange={(e) => setEditBrandDesc(e.target.value)}
            value={editBrandDesc ? editBrandDesc : null}
            name="descEdit"
            id="descEdit"
          />
        </div>
      </Modal>
      <Divider className="text-xl">All Brand</Divider>
      <Button className="my-5" type="primary" onClick={showModal}>
        Add More Brand
      </Button>
      <Modal
        title="Add More Brand"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Add"}
      >
        <div id="frm-add">
          <label htmlFor="image">Image : </label>
          <input
            type="text"
            ref={brandImg}
            placeholder="Brand Image URL"
            name="image"
            id="image"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            ref={brandName}
            placeholder="Brand name"
            name="name"
            id="name"
          />
        </div>
        <div id="frm-add">
          <label htmlFor="desc">Description : </label>
          <input
            type="text"
            ref={brandDesc}
            name="desc"
            placeholder="Brand description"
            id="desc"
          />
        </div>
      </Modal>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};
export default AdminBrand;
