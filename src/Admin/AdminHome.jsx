import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Dashboard',
      onClick: () => navigate('/dashboard')
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Products',
      onClick: () => navigate('/products')
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Categories',
      onClick: () => navigate('/categories')
    },
    {
      key: '4',
      icon: <ContainerOutlined />,
      label: 'Brands',
      onClick: () => navigate('/brands')
    },
    {
      key: '5',
      icon: <ContainerOutlined />,
      label: 'Users',
      onClick: () => navigate('/users')
    },
    {
      key: '6',
      icon: <ContainerOutlined />,
      label: 'E-Commerce',
      onClick: () => navigate('/Shop/Home')
    },
  ];

  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default AdminHome;
