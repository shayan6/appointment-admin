import {
  Layout,
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  message,
  Typography,
} from "antd";
import PageHeader from "../../main/components/PageHeader";
import Table from "./components/Table";
import Filters from "./components/Filters";

function Appointments() {
  return (
    <Row>
      <Col span={24}>
        <PageHeader title="Appointments" />
      </Col>
      <Col span={24}>
        <Card>
          <Filters />
          <Table />
        </Card>
      </Col>
    </Row>
  );
}

export default Appointments;
