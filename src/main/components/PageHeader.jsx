import { Card, Col, Row, Typography } from "antd";
import BreadCumb from "./BreadCumb";

export default function PageHeader({ title }) {
  return (
    <Row className="site-page-header">
      <Col span={24}>
        <BreadCumb path={title} />
      </Col>
      <Col span={24}>
        <Card>
          <Typography.Title level={4}> {title} </Typography.Title>
        </Card>
      </Col>
    </Row>
  );
}
