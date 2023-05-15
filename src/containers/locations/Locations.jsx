import { Row, Col, Card, Table, Space } from "antd";
import PageHeader from "../../main/components/PageHeader";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Filters from "./components/Filters";
import sendRequest from "../../api_helpers/requests/sendRequest";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import "./style.scss";

function Locations() {
  const baseUrl = useSelector((state) => state.common.url);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Id",
      dataIndex: "location_id",
      width: "10%",
    },
    {
      title: "Location name",
      dataIndex: "location_name",
    },
    {
      title: "Location address",
      dataIndex: "location_address",
    },
    {
      title: "Active",
      dataIndex: "is_active",
      render: (is_active) =>
        +is_active ? (
          <CheckOutlined style={{ color: "green" }} />
        ) : (
          <CloseOutlined style={{ color: "red" }} />
        ),
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
        url: `${baseUrl}/getLocations`,
        method: "POST",
        postData: {
          action: "getLocations",
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
        <PageHeader title="Locations" />
      </Col>
      <Col span={24}>
        <Card className="section">
          <Filters />
          <Table
            rowKey="location_id"
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

export default Locations;
