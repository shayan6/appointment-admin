import { Button, Space, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";

export default function CustomersTable() {
  return (
    <div class="table-responsive">
      <table class="table table-padded">
        <thead>
          <tr>
            <th>Assigned Doctor</th>
            <th>Cutomer</th>
            <th>Last Comment</th>
            <th>Reply Date</th>
            <th class="text-center">Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img
                  alt=""
                  src="https://avatars.githubusercontent.com/u/42208796?v=4"
                />
                <span>John Mayers</span>
              </div>
            </td>
            <td>
              <span>Shayan Shaikh</span>
            </td>
            <td>
              <div class="smaller lighter">
                I have enabled the software for you, you can try now...
              </div>
            </td>
            <td>
              <span>Today</span>
              <span class="smaller lighter">1:52am</span>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller green"></span>
              <span>
                <Tag color="blue">Active</Tag>
              </span>
            </td>
            <td class="row-actions">
              <Space size={8}>
                <Button>
                  <EditOutlined />
                </Button>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Space>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img
                  alt=""
                  src="https://avatars.githubusercontent.com/u/42208796?v=4"
                />
                <span>Mike Bishop</span>
              </div>
            </td>
            <td>
              <span>Shayan Shaikh</span>
            </td>
            <td>
              <div class="smaller lighter">
                Please approve this request so we can move...
              </div>
            </td>
            <td>
              <span>Jan 19th</span>
              <span class="smaller lighter">3:22pm</span>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller red"></span>
              <span>
                <Tag color="green">Closed</Tag>
              </span>
            </td>
            <td class="row-actions">
              <Space size={8}>
                <Button>
                  <EditOutlined />
                </Button>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Space>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img
                  alt=""
                  src="https://avatars.githubusercontent.com/u/42208796?v=4"
                />
                <span>Terry Crews</span>
              </div>
            </td>
            <td>
              <span>Shayan Shaikh</span>
            </td>
            <td>
              <div class="smaller lighter">
                We will need some login credentials to make...
              </div>
            </td>
            <td>
              <span>Yesterday</span>
              <span class="smaller lighter">7:45am</span>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller yellow"></span>
              <span>
                <Tag color="red">Pending</Tag>
              </span>
            </td>
            <td class="row-actions">
              <Space size={8}>
                <Button>
                  <EditOutlined />
                </Button>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Space>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img
                  alt=""
                  src="https://avatars.githubusercontent.com/u/42208796?v=4"
                />
                <span>Phil Collins</span>
              </div>
            </td>
            <td>
              <span>Shayan Shaikh</span>
            </td>
            <td>
              <div class="smaller lighter">
                I have enabled the software for you, you can try now...
              </div>
            </td>
            <td>
              <span>Jan 23rd</span>
              <span class="smaller lighter">2:12pm</span>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller yellow"></span>
              <span>
                <Tag color="red">Pending</Tag>
              </span>
            </td>
            <td class="row-actions">
              <Space size={8}>
                <Button>
                  <EditOutlined />
                </Button>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Space>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img
                  alt=""
                  src="https://avatars.githubusercontent.com/u/42208796?v=4"
                />
                <span>Katy Pilsner</span>
              </div>
            </td>
            <td>
              <span>Shayan Shaikh</span>
            </td>
            <td>
              <div class="smaller lighter">
                I have tried this solution but it does not open...
              </div>
            </td>
            <td>
              <span>Jan 12th</span>
              <span class="smaller lighter">9:51am</span>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller green"></span>
              <span>
                <Tag color="green">Active</Tag>
              </span>
            </td>
            <td class="row-actions">
              <Space size={8}>
                <Button>
                  <EditOutlined />
                </Button>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Space>
            </td>
          </tr>
          <tr>
            <td>
              <div class="user-with-avatar">
                <img
                  alt=""
                  src="https://avatars.githubusercontent.com/u/42208796?v=4"
                />
                <span>Wes Morgan</span>
              </div>
            </td>
            <td>
              <span>Shayan Shaikh</span>
            </td>
            <td>
              <div class="smaller lighter">
                I have enabled the software for you, you can try now...
              </div>
            </td>
            <td>
              <span>Jan 9th</span>
              <span class="smaller lighter">12:45pm</span>
            </td>
            <td class="nowrap">
              <span class="status-pill smaller yellow"></span>
              <span>
                <Tag color="red">Pending</Tag>
              </span>
            </td>
            <td class="row-actions">
              <Space size={8}>
                <Button>
                  <EditOutlined />
                </Button>
                <Button>
                  <DeleteOutlined />
                </Button>
              </Space>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
