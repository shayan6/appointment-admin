import { Row, Col, Card, Table, Space, Image } from "antd";
import PageHeader from "../../main/components/PageHeader";
import Filters from "./components/Filters";
import sendRequest from "../../api_helpers/requests/sendRequest";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Staff() {
  const baseUrl = useSelector((state) => state.common.url);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Image",
      dataIndex: "image_file_name",
      width: "10%",
      render: (image_file_name) => {
        try {
          const src = require(`../../images/staff/${image_file_name}`);
          return <Image width={25} src={src} preview={{ src }} />;
        } catch (err) {
          //Do whatever you want when the image failed to load here
          const src = require(`../../images/staff/no_image.png`);
          return <Image width={25} src={src} preview={{ src }} />;
        }
      },
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
