import { Button, Card, Col, Form, Input, Row, Select } from "antd";

function SystemSettings() {
  const [form] = Form.useForm();
  const formFields = [
    { label: "Default Appointment Status", name: "default_appointment_status" },
  ];

  return (
    <Card>
      <Form id="formId" form={form} layout="vertical" autoComplete="off">
        <Row gutter={[12, 12]}>
          {formFields.map(({ label, name }) => (
            <Col span={8} key={name}>
              <Form.Item
                name={name}
                label={label}
                rules={[
                  {
                    required: true,
                    message: `Please select the ${label.toLowerCase()}`,
                  },
                ]}
              >
                <Select defaultValue={"pending"}>
                  <Select.Option value="pending">Pending</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          ))}
        </Row>
          <Button
            type="secondary"
            style={{ marginRight: "1rem" }}
          >
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
      </Form>
    </Card>
  );
}

export default SystemSettings;
