import React from "react";
import { Col, Row, Card, Divider, Space, Typography, Input, DatePicker } from "antd";
import BreadCumb from "../../main/components/BreadCumb";
import PaymentsChart from "./components/PaymentsChart";
import KpisCharts from "./components/KpisCharts";
import ConversionsChart from "./components/ConversionsChart";
import GadgesChart from "./components/GadgesChart";
import HoverButtons from "./components/HoverButtons";
import "./styles/dashboard.scss";
import CustomersTable from "./components/CustomersTable";
import RecentActivity from "./components/RecentActivity";

export default function Dashboard() {
  return (
    <Row>
      <Col span={24}>
        <BreadCumb path="Dashboard"></BreadCumb>
      </Col>
      <Col span={16}>
        <Card>
          <Row gutter={[15, 15]} className="row-filters">
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
        </Card>
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
            <CustomersTable />
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
            <RecentActivity />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
