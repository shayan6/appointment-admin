import { Button, Card, Col, Row, Typography } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import BreadCumb from "./BreadCumb";

export default function PageHeader({ title }) {
  return (
    <Row className="site-page-header">
      <Col span={24}>
        <BreadCumb path={title} />
      </Col>
      <Col span={24}>
        <Card>
          <Row>
            <Col span={12}>
              <Typography.Title level={4}> {title} </Typography.Title>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                style={{
                  float: "right",
                }}
              >
                <PlusOutlined /> Add
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
