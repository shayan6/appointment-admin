import React from "react";
import { Col, Row, Layout, Card, Divider } from "antd";
import BreadCumb from "../../main/components/BreadCumb";
import PaymentsChart from "./components/PaymentsChart";
import KpisCharts from "./components/KpisCharts";
import ConversionsChart from "./components/ConversionsChart";
import GadgesChart from "./components/GadgesChart";
import HoverButtons from "./components/HoverButtons";
import "./styles/dashboard.scss";

export default function Dashboard() {
  return (
    <Row>
      <Col span={24}>
        <BreadCumb path="Dashboard"></BreadCumb>
      </Col>
      <Col span={16}>
        <Row>
          <Col span={24}>
            <Card>Filters</Card>
          </Col>
        </Row>
        <HoverButtons />
        <Row gutter={16}>
          <Col span={24}>
            <Divider />
          </Col>
          <Col span={15}>
            <KpisCharts />
          </Col>
          <Col span={9}>
            <GadgesChart />
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
      <Col span={1} style={{ textAlign: "center" }}>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col span={7}>
        <ConversionsChart />
        <PaymentsChart />
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
