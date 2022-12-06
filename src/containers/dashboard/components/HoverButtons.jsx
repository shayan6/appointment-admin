import { Card, Col, Divider, Row, Space, Typography } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

export default function HoverButtons() {
  const { Text } = Typography;
  return (
    <Row gutter={18}>
      <Col span={24}>
        <Divider />
      </Col>
      <Col span={6}>
        <Card className="el-tablo">
          <Row>
            <Col span={12}>
              <span className="iconCircle">
                <UserOutlined />
              </span>
            </Col>
            <Col span={12} className="text-right">
              <Space direction="vertical" size={6}>
                <Text className="value">1,632</Text>
                <Text className="label">Users</Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={6}>
        <Card className="el-tablo">
          <Row>
            <Col span={12}>
              <span className="iconCircle">
                <UserOutlined />
              </span>
            </Col>
            <Col span={12} className="text-right">
              <Space direction="vertical" size={6}>
                <Text className="value">1,632</Text>
                <Text className="label">Users</Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={6}>
        <Card className="el-tablo">
          <Row>
            <Col span={12}>
              <span className="iconCircle">
                <UserOutlined />
              </span>
            </Col>
            <Col span={12} className="text-right">
              <Space direction="vertical" size={6}>
                <Text className="value">1,632</Text>
                <Text className="label">Users</Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={6}>
        <Card className="el-tablo">
          <Row>
            <Col span={12}>
              <span className="iconCircle">
                <UserOutlined />
              </span>
            </Col>
            <Col span={12} className="text-right">
              <Space direction="vertical" size={6}>
                <Text className="value">1,632</Text>
                <Text className="label">Users</Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
