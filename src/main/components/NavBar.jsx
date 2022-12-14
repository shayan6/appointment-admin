import { Col, Layout, Menu, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import React from "react";
const { Header } = Layout;

export default function NavBar() {
  const { settings } = useSelector((state) => state.common);
  const theme = settings.theme ? settings.theme : "light";
  const items = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
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
            <Typography.Text>Ant Design 5.0 </Typography.Text>
          </div>
        </Col>
        <Col span={20}>
          <Menu
            theme={theme}
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          />
        </Col>
      </Row>
    </Header>
  );
}
