import React, { useEffect } from "react";
import { Layout, Card, Row, Col } from "antd";
import { Bar } from "@ant-design/charts";
import { Pie } from "@ant-design/charts";

const { Content } = Layout;

const Dashboard = () => {
  const data = [
    { type: "W-1", value: 10 },
    { type: "W-2", value: 20 },
    { type: "W-3", value: 30 },
    { type: "W-4", value: 40 },
    { type: "W-5", value: 50 },
    { type: "W-6", value: 60 },
    { type: "W-7", value: 70 },
    { type: "W-8", value: 80 },
    { type: "W-9", value: 90 },
    { type: "W-10", value: 100 },
    { type: "W-11", value: 110 },
    { type: "W-12", value: 120 },
  ];

  const barConfig = {
    data,
    xField: "type",
    yField: "value",
    xAxis: { label: { autoHide: true, autoRotate: false } },
  };

  const pieData = [
    { type: "ASUS", value: 27 },
    { type: "MSI", value: 25 },
    { type: "DELL", value: 18 },
    { type: "ACER", value: 15 },
    { type: "MacBook", value: 10 },
    { type: "LENOVO", value: 5 },
  ];

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: { fontSize: 14, textAlign: "center" },
    },
    interactions: [{ type: "element-active" }],
  };

  useEffect(() => sessionStorage.setItem("adminLocation", "dashboard"), []);

  return (
    <>
      <h1 className="ml-10 text-2xl">Overview</h1>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <Card title="Items" bordered={false}>
                    100
                  </Card>
                </Col>
                <Col span={6}>
                  <Card title="Orders" bordered={false}>
                    100
                  </Card>
                </Col>
                <Col span={6}>
                  <Card title="Customers" bordered={false}>
                    100
                  </Card>
                </Col>
                <Col span={6}>
                  <Card title="Revenue" bordered={false}>
                    100
                  </Card>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 24 }}>
                <Col span={12}>
                  <Card title="Sales Summary" bordered={false}>
                    <Bar {...barConfig} />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Sales by Categories" bordered={false}>
                    <Pie {...pieConfig} />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;