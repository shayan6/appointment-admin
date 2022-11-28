import React from "react";
import { Col, Row, Layout, Card } from "antd";
import BreadCumb from "../../main/components/BreadCumb";
const { Content } = Layout;

export default function Dashboard() {
  return (
    <Row>
      <Col span={12}>
        <BreadCumb path="Dashboard"></BreadCumb>
      </Col>
      <Col span={24} className="content-container">
        <Content>
          <Card>
            Content
          </Card>
        </Content>
      </Col>
    </Row>
  );
}
