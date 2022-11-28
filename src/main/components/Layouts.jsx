import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout as MainLayout, Menu, theme } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "../../containers/dashboard/Dashboard";
import { Header } from "antd/es/layout/layout";
// import PageLoader from "./PageLoader";

export default function Layouts() {
  const { Footer } = MainLayout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MainLayout>
      {/* <PageLoader /> */}
      <HashRouter>
        <Header className="site-layout-background ant-layout-sider-light">
          <div className="logo" />
          <Menu
            theme={theme}
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={["1", "2", "3"].map((key) => ({
              key,
              label: `nav ${key}`,
            }))}
          />
        </Header>
        <MainLayout className="site-layout">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
          <Footer style={{ textAlign: "center" }}>
            Powered by Shayan Shaikh
          </Footer>
        </MainLayout>
      </HashRouter>
    </MainLayout>
  );
}
