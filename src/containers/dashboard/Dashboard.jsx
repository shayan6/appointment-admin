import React from "react";
import { Col, Row, Card } from "antd";

export default function Dashboard() {
  return (
    <Row>
      <Col span={24} className="header-container">
        header
      </Col>
      <Col span={24} className="content-container">
        content
      </Col>
    </Row>
  );
}
