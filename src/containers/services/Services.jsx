import { Row, Col, Card, Table, Space } from "antd";
import PageHeader from "../../main/components/PageHeader";
import Filters from "./components/Filters";
import sendRequest from "../../api_helpers/requests/sendRequest";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import "./style.scss";

function Services() {
  const baseUrl = useSelector((state) => state.common.url);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Id",
      dataIndex: "service_id",
      width: "10%",
    },
    {
      title: "service Name",
      dataIndex: "service_name",
    },
    {
      title: "service price",
      dataIndex: "service_price",
    },
    {
      title: "service duration",
      dataIndex: "service_duration",
    },
    {
      title: "Hide price",
      dataIndex: "hide_price",
      render: hide_price => hide_price ? 'Yes' : 'No'
    },
    {
      title: "Hide duration",
      dataIndex: "hide_duration",
      render: hide_duration => hide_duration ? 'Yes' : 'No'
    },
    {
      title: "Active",
      dataIndex: "is_active",
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
        url: `${baseUrl}/getServices`,
        method: "POST",
        postData: {
          action: "getServices",
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
        <PageHeader title="Services" />
      </Col>
      <Col span={24}>
        <Card className="section">
          <Filters />
          <Table
            rowKey="service_id"
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

export default Services;
