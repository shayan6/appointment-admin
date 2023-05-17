import React from "react";
import { Col, Row, Divider } from "antd";
import BreadCumb from "../../main/components/BreadCumb";
import PaymentsChart from "./components/PaymentsChart";
import KpisCharts from "./components/KpisCharts";
import ConversionsChart from "./components/ConversionsChart";
import GadgesChart from "./components/GadgesChart";
import HoverButtons from "./components/HoverButtons";
import "./styles/dashboard.scss";
import CustomersTable from "./components/CustomersTable";
import RecentActivity from "./components/RecentActivity";
import Filters from "./components/Filters";

export default function Dashboard() {
  return (
    <Row>
      <Col span={24}>
        <BreadCumb path="Dashboard"></BreadCumb>
      </Col>
      <Col span={16}>
        <Filters />
        <HoverButtons />
        <Row gutter={16}>
          <Col span={24}>
            <Divider orientation="left" orientationMargin="0">
              Key performance indicators
            </Divider>
          </Col>
          <Col span={15}>
            <KpisCharts />
          </Col>
          <Col span={9}>
            <GadgesChart />
          </Col>
        </Row>
        <CustomersTable />
      </Col>
      <Col span={1} style={{ textAlign: "center" }}>
        <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col span={7}>
        <ConversionsChart />
        <PaymentsChart />
        <RecentActivity />
      </Col>
    </Row>
  );
}
