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
  Table,
} from "antd";
import PageHeader from "../../main/components/PageHeader";
import Filters from "./components/Filters";
import sendRequest from "../../api_helpers/requests/sendRequest";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Appointments() {
  const baseUrl = useSelector((state) => state.common.url);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Appointment id",
      dataIndex: "appointment_id",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
    },
    {
      title: "Staff Name",
      dataIndex: "staff_name",
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const httpRequestData = {
        url: `${baseUrl}/getAppointments`,
        method: "POST",
        postData: {
          action: "getAppointments",
          storeId: "1",
        },
      };
      const response = await sendRequest(httpRequestData);
      setDataSource(response);
      setLoading(false);
    } catch (e) {
      setDataSource([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      <Col span={24}>
        <PageHeader title="Appointments" />
      </Col>
      <Col span={24}>
        <Card>
          <Filters />
          <Table columns={columns} dataSource={dataSource} />
        </Card>
      </Col>
    </Row>
  );
}

export default Appointments;
