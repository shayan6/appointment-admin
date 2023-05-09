import { Row, Col, Card, Table, Space, Typography } from "antd";
import PageHeader from "../../main/components/PageHeader";
import Filters from "./components/Filters";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { getAppointments } from "../../api_helpers/microservices/appointments";

function Appointments() {
  const baseUrl = useSelector((state) => state.common.url);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Id",
      dataIndex: "appointment_id",
      width: "10%",
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
    },
    {
      title: "Staff Name",
      dataIndex: "staff_name",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      fixed: "right",
      width: "10%",
      render: () => {
        return (
          <Space>
            <Typography.Text>edit</Typography.Text>{" "}
            <Typography.Text>delete</Typography.Text>
          </Space>
        );
      },
    },
  ];

  async function loadAppointments() {
    setLoading(true);
    const response = await getAppointments(baseUrl);
    setDataSource(response || []);
    setLoading(false);
  }

  useEffect(() => {
    loadAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col span={24}>
        <PageHeader title="Appointments" />
      </Col>
      <Col span={24}>
        <Card className="section">
          <Filters />
          <Table
            rowKey="appointment_id"
            columns={columns}
            loading={loading}
            dataSource={dataSource}
            expandable={{
              expandedRowRender: (record) => <p>{JSON.stringify(record)}</p>,
            }}
          />
        </Card>
      </Col>
    </Row>
  );
}

export default Appointments;
