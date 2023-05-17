import { Col, DatePicker, Input, Row, Space, Typography } from "antd";
import React from "react";

export default function Filters() {
  return (
    <Row
      gutter={[15, 15]}
      className="row-filters"
      style={{ marginBottom: -16 }}
    >
      <Col span={12}>
        <Space>
          <Typography.Text>Date</Typography.Text>
          <DatePicker.RangePicker showTime />
        </Space>
      </Col>
      <Col span={6}>
        <Space>
          <Typography.Text>Location</Typography.Text>
          <Input size="middle" placeholder="Location" />
        </Space>
      </Col>
      <Col span={6}>
        <Space>
          <Typography.Text>Service</Typography.Text>
          <Input size="middle" placeholder="Service" />
        </Space>
      </Col>
    </Row>
  );
}
