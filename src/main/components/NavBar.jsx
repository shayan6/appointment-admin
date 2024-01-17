import { Col, Layout, Menu, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import React from "react";
const { Header } = Layout;

export default function NavBar() {
  const { settings } = useSelector((state) => state.common);
  const theme = settings.theme ? settings.theme : "light";
  const items = ["Profile", "Settings", "Logout"].map((key) => ({
    key,
    label: `${key}`,
  }));

  return (
    <Header className={theme === "light" ? "ant-layout-sider-light" : "ant-layout-sider-dark"}>
      <Row>
        <Col span={4}>
          <div className="logo">
            <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <Typography.Text>Appointment system</Typography.Text>
          </div>
        </Col>
        <Col span={20}>
          <Menu
            theme={theme}
            mode="horizontal"
            defaultSelectedKeys={["Settings"]}
            items={items}
          />
        </Col>
      </Row>
    </Header>
  );
}
