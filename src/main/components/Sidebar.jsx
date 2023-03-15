import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  EnvironmentOutlined,
  ReconciliationOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleCollapse } from "../actions";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import common from "../../libraries/common_lib";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { collapsed, settings } = useSelector((state) => state.common);
  const theme = settings.theme ? settings.theme : "light";
  const { Sider } = Layout;
  const SidebarJson = [
    {
      name: "Dashboard",
      icon: <DashboardOutlined />,
      path: "Dashboard",
      display: true,
      isActive: true,
    },
    {
      name: "Appointments",
      icon: <CalendarOutlined />,
      path: "Appointments",
      display: true,
    },
    {
      name: "Locations",
      icon: <EnvironmentOutlined />,
      path: "Locations",
      display: true,
    },
    {
      name: "Services",
      icon: <ReconciliationOutlined />,
      path: "Services",
      display: true,
    },
    {
      name: "Staff",
      icon: <TeamOutlined />,
      path: null,
      display: true,
    },
    {
      name: "Settings",
      icon: <SettingOutlined />,
      path: null,
      display: true,
      children: [
        {
          name: "General",
          icon: <ToolOutlined />,
          path: "General",
          display: true,
        },
        {
          name: "Steps",
          icon: <ToolOutlined />,
          path: "Steps",
          display: true,
        },
      ],
    },
  ];

  return (
    <Sider
      theme={theme}
      width={220}
      collapsible
      collapsed={collapsed}
      collapsedWidth={60}
    >
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
          return null;
        })}
      </Menu>
    </Sider>
  );
}
