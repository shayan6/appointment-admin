import { Row, Col, Card, Table, Space, Image } from "antd";
import PageHeader from "../../main/components/PageHeader";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
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
      title: "Image",
      dataIndex: "service_image_name",
      width: "10%",
      render: (service_image_name) => {
        try {
          const src = require(`../../images/services/${service_image_name}`);
          return <Image width={25} src={src} preview={{ src }} />;
        } catch (err) {
          //Do whatever you want when the image failed to load here
          const src = require(`../../images/services/no_image.png`);
          return <Image width={25} src={src} preview={{ src }} />;
        }
      },
    },
    {
      title: "Service Name",
      dataIndex: "service_name",
    },
    {
      title: "Service price",
      dataIndex: "service_price",
    },
    {
      title: "Service duration",
      dataIndex: "service_duration",
    },
    {
      title: "Hide price",
      dataIndex: "hide_price",
      render: (hide_price) =>
        +hide_price ? (
          <CheckOutlined style={{ color: "green" }} />
        ) : (
          <CloseOutlined style={{ color: "red" }} />
        ),
    },
    {
      title: "Hide duration",
      dataIndex: "hide_duration",
      render: (hide_duration) =>
        +hide_duration ? (
          <CheckOutlined style={{ color: "green" }} />
        ) : (
          <CloseOutlined style={{ color: "red" }} />
        ),
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
