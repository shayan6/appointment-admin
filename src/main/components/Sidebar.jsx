import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  LinkOutlined,
  ReconciliationOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  FileDoneOutlined,
  DeliveredProcedureOutlined,
  DatabaseOutlined,
  DollarCircleOutlined,
  RedoOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  BugOutlined,
  SettingOutlined,
  SyncOutlined,
  RiseOutlined,
  BookOutlined,
  CloudDownloadOutlined,
  // BarsOutlined,
} from "@ant-design/icons";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/logo.svg";
import logoFull from "../../images/logo-full.jpg";
import { NavLink } from "react-router-dom";
import { toggleCollapse } from "../actions";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import common from "../../libraries/common_lib";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { collapsed, settings, menu } = useSelector((state) => state.common);
  const theme = settings.theme ? settings.theme : "light";
  const { Sider } = Layout;

  const SidebarJson = [
    {
      name: "Dashboard",
      icon: <DashboardOutlined />,
      path: "Dashboard",
      display: true,
      children: null,
      isActive: true,
    },
    {
      name: "Connectors",
      icon: <LinkOutlined />,
      path: "Connectors",
      display: true,
      children: null,
    },
    {
      name: "Failed Records",
      icon: <ReconciliationOutlined />,
      path: "FailedRecords",
      display: true,
      children: null,
    },
    {
      name: "Synchronize Now",
      icon: <SyncOutlined />,
      path: null,
      display: true,
      children: [
        {
          name: "Sales Order Import",
          icon: <BookOutlined />,
          path: "SalesOrderImport",
          display: true,
        },
      ],
    },
    {
      name: "Selective Sync",
      icon: <RiseOutlined />,
      path: null,
      display: true,
      children: [
        {
          name: "Import Sales Order",
          icon: <CloudDownloadOutlined />,
          path: "SelectiveSyncImport",
          display: true,
        },
      ],
    },
    {
      name: "Inventory Adjustment",
      icon: <CodeSandboxOutlined />,
      path: "dummylink1",
      // display: true,
      children: null,
    },
    {
      name: "Item Fulfillments",
      icon: <FileDoneOutlined />,
      path: "dummylink2",
      // display: true,
      children: null,
    },
    {
      name: "Item Reciept",
      icon: <DeliveredProcedureOutlined />,
      path: "dummylink3",
      // display: true,
      children: null,
    },
    {
      name: "Master Data",
      icon: <DatabaseOutlined />,
      path: "dummylink4",
      // display: true,
      children: null,
    },
    {
      name: "Purchase Order",
      icon: <DollarCircleOutlined />,
      path: "dummylink5",
      // display: true,
      children: null,
    },
    {
      name: "Return Authorization",
      icon: <RedoOutlined />,
      path: "dummylink6",
      // display: true,
      children: null,
    },
    {
      name: "Sales Order",
      icon: <FileTextOutlined />,
      path: "dummylink7",
      // display: true,
      children: null,
    },
    {
      name: "Transfer Order As PO",
      icon: <UserOutlined />,
      path: "dummylink8",
      // display: true,
      children: null,
    },
    {
      name: "Transfer Order As SO",
      icon: <FileProtectOutlined />,
      path: "dummylink9",
      // display: true,
      children: null,
    },
    {
      name: "F3 Debugger",
      icon: <BugOutlined />,
      path: "Debugger",
      display: settings?.showDebugger,
      children: null,
      // external: true,
    },
    {
      name: "Settings",
      icon: <SettingOutlined />,
      path: "Settings",
      display: true,
      children: null,
      // external: true,
    },
  ];

  menu.map((el) => {
    if (el.group === "Synchronize Now") {
      SidebarJson[3].children.push({
        name: el.title,
        icon: <i className={el.icon}></i>,
        path: el.url,
        display: true,
      });
    } else {
      SidebarJson[4].children.push({
        name: el.title,
        icon: <i className={el.icon}></i>,
        path: `SelectiveSync${el.url}?title=${el.title}`,
        display: true,
      });
    }
  });

  return (
    <Sider
      theme={theme}
      trigger={null}
      width={220}
      collapsible
      collapsed={collapsed}
      collapsedWidth={60}
    >
      <div
        className="logo"
        style={{ background: `url(${collapsed ? logo : logoFull})` }}
      />
      <span
        className="toggle-collapse"
        onClick={() => dispatch(toggleCollapse({ collapsed }))}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </span>

      <Menu theme={theme} mode="inline" defaultSelectedKeys={["1"]}>
        {SidebarJson.map((el, i) => {
          if (el.display && !el.children) {
            return (
              <Menu.Item key={`sidebar-item-${i}`} icon={el.icon}>
                {el.external ? (
                  <a href={el.path} target="_blank" rel="noreferrer">
                    {el.name}
                  </a>
                ) : (
                  <NavLink to={el.path}>{el.name}</NavLink>
                )}
              </Menu.Item>
            );
          } else if (el.display && el.children.length > 0) {
            return (
              <Menu.SubMenu
                key={`sidebar-submenu-${i}`}
                title={el.name}
                icon={el.icon}
              >
                {el.children.map((sublist, j) => (
                  <Menu.Item
                    style={{ paddingLeft: "32px" }}
                    key={`sidebar-sublist-item-${i}-${j}`}
                    icon={sublist.icon}
                  >
                    {sublist.external ? (
                      <a href={sublist.path} target="_blank" rel="noreferrer">
                        {sublist.name}
                      </a>
                    ) : (
                      <NavLink to={sublist.path}>{sublist.name}</NavLink>
                    )}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          }
        })}
      </Menu>
    </Sider>
  );
}
