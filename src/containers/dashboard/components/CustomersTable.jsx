import { Button, Col, Divider, Row, Space, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";

export default function CustomersTable() {
  return (
    <Row>
      <Col span={24}>
        <Divider orientation="left" orientationMargin="0%">
          Customers
        </Divider>
        <div className="table-responsive">
          <table className="table table-padded">
            <thead>
              <tr>
                <th>Assigned Doctor</th>
                <th>Cutomer</th>
                <th>Last Comment</th>
                <th>Reply Date</th>
                <th className="text-center">Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="user-with-avatar">
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
                  <div className="smaller lighter">
                    I have enabled the software for you, you can try now...
                  </div>
                </td>
                <td>
                  <span>Today</span>
                  <span className="smaller lighter">1:52am</span>
                </td>
                <td className="nowrap">
                  <span className="status-pill smaller green"></span>
                  <span>
                    <Tag color="blue">Active</Tag>
                  </span>
                </td>
                <td className="row-actions">
                  <Space size={24}>
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
                  <div className="user-with-avatar">
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
                  <div className="smaller lighter">
                    Please approve this request so we can move...
                  </div>
                </td>
                <td>
                  <span>Jan 19th</span>
                  <span className="smaller lighter">3:22pm</span>
                </td>
                <td className="nowrap">
                  <span className="status-pill smaller red"></span>
                  <span>
                    <Tag color="green">Closed</Tag>
                  </span>
                </td>
                <td className="row-actions">
                  <Space size={24}>
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
                  <div className="user-with-avatar">
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
                  <div className="smaller lighter">
                    We will need some login credentials to make...
                  </div>
                </td>
                <td>
                  <span>Yesterday</span>
                  <span className="smaller lighter">7:45am</span>
                </td>
                <td className="nowrap">
                  <span className="status-pill smaller yellow"></span>
                  <span>
                    <Tag color="orange">Pending</Tag>
                  </span>
                </td>
                <td className="row-actions">
                  <Space size={24}>
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
                  <div className="user-with-avatar">
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
                  <div className="smaller lighter">
                    I have enabled the software for you, you can try now...
                  </div>
                </td>
                <td>
                  <span>Jan 23rd</span>
                  <span className="smaller lighter">2:12pm</span>
                </td>
                <td className="nowrap">
                  <span className="status-pill smaller yellow"></span>
                  <span>
                    <Tag color="orange">Pending</Tag>
                  </span>
                </td>
                <td className="row-actions">
                  <Space size={24}>
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
                  <div className="user-with-avatar">
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
                  <div className="smaller lighter">
                    I have tried this solution but it does not open...
                  </div>
                </td>
                <td>
                  <span>Jan 12th</span>
                  <span className="smaller lighter">9:51am</span>
                </td>
                <td className="nowrap">
                  <span className="status-pill smaller green"></span>
                  <span>
                    <Tag color="green">Active</Tag>
                  </span>
                </td>
                <td className="row-actions">
                  <Space size={24}>
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
                  <div className="user-with-avatar">
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
                  <div className="smaller lighter">
                    I have enabled the software for you, you can try now...
                  </div>
                </td>
                <td>
                  <span>Jan 9th</span>
                  <span className="smaller lighter">12:45pm</span>
                </td>
                <td className="nowrap">
                  <span className="status-pill smaller yellow"></span>
                  <span>
                    <Tag color="orange">Pending</Tag>
                  </span>
                </td>
                <td className="row-actions">
                  <Space size={24}>
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
      </Col>
    </Row>
  );
}
