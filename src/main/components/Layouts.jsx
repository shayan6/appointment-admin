import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout as MainLayout } from "antd";
import Sidebar from "./Sidebar";
import Dashboard from "../../containers/dashboard/Dashboard";
import NavBar from "./NavBar";
import Settings from "../../containers/settings/Settings";
import { Content } from "antd/es/layout/layout";
// import PageLoader from "./PageLoader";

export default function Layouts() {
  const { Footer } = MainLayout;

  return (
    <MainLayout>
      {/* <PageLoader /> */}
      <HashRouter>
        <NavBar />
        <MainLayout className="site-layout">
          <Sidebar />
          <Content>
            <Routes>
              <Route path="*" element={<Dashboard />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
            <Footer style={{ textAlign: "center" }}>Powered by Shayan Shaikh</Footer>
          </Content>
        </MainLayout>
      </HashRouter>
    </MainLayout>
  );
}
