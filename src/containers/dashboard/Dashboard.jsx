import React from "react";
import { Col, Row, Layout, Card, Divider } from "antd";
import BreadCumb from "../../main/components/BreadCumb";

export default function Dashboard() {
  return (
    <Row>
      <Col span={24}>
        <BreadCumb path="Dashboard"></BreadCumb>
      </Col>
      <Col span={15}>
        <Row>
          <Col span={24}>
            <Card>Filters</Card>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={6}>
            <Card>User</Card>
          </Col>
          <Col span={6}>
            <Card>User</Card>
          </Col>
          <Col span={6}>
            <Card>User</Card>
          </Col>
          <Col span={6}>
            <Card>User</Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={12}>
            <Card>Graph</Card>
          </Col>
          <Col span={12}>
            <Card>Graph</Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={24}>
            <Card>Table</Card>
          </Col>
        </Row>
      </Col>
      <Col span={1} style={{ textAlign: 'center' }} >
        <Divider type="vertical" style={{ height: '100%' }} />
      </Col>
      <Col span={8}>
        <Row>
          <Col span={24}>
            <Card>Payment</Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={24}>
            <Card>Funnel</Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={24}>
            <Card>Activity</Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
