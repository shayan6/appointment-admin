import { Col, Input, Row, Space, Typography } from "antd";
import React from "react";

export default function Filters() {
  return (
    <Row gutter={[15, 15]} className="row-filters">
      <Col span={4}>
        <Space>
          <Typography.Text>Search</Typography.Text>
          <Input size="middle" placeholder="Search" />
        </Space>
      </Col>
    </Row>
  );
}
