import { Row, Col, Card, Table, Space } from "antd";
import PageHeader from "../../main/components/PageHeader";
import Filters from "./components/Filters";
import sendRequest from "../../api_helpers/requests/sendRequest";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import "./style.scss";

function Staff() {
  const baseUrl = useSelector((state) => state.common.url);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Id",
      dataIndex: "staff_id",
      width: "10%",
    },
    {
      title: "First name",
      dataIndex: "first_name",
    },
    {
      title: "Last name",
      dataIndex: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email_address",
    },
    {
      title: "Mobile number",
      dataIndex: "mobile_number",
    },
    {
      title: "Active",
      dataIndex: "is_active",
      render: is_active => is_active ? 'Yes' : 'No'
    },
    {
      title: "Action",
      fixed: "right",
      width: "10%",
      render: () => {
        return (
          <Space>
            <a>edit</a> <a>delete</a>
          </Space>
        );
      },
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const httpRequestData = {
        url: `${baseUrl}/getStaff`,
        method: "POST",
        postData: {
          action: "getStaff",
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
        <PageHeader title="Staff" />
      </Col>
      <Col span={24}>
        <Card className="section">
          <Filters />
          <Table
            rowKey="staff_id"
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

export default Staff;
