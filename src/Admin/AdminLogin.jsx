import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (pauseOnHover) => {
    api.open({
      message: "Error !",
      description: "Incorrect Username or Password...",
      showProgress: true,
      pauseOnHover,
    });
  };

  const onFinish = (values) => {
    if (values.username === "keiyy" && values.password === "keiyy009") {
      navigate("/admin");
      sessionStorage.setItem("isAdminLogin", true);
    } else {
      openNotification(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    openNotification(true);
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <div className="grid min-h-screen place-items-center">
        <div className="border-2 border-solid border-black px-10 py-5">
          <h1 className="my-10 text-center text-2xl">Admin Login</h1>
          <Form
            // id="form"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;