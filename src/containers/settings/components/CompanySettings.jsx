import { Button, Card, Col, Form, Input, Row } from "antd";

function CompanySettings() {
  const [form] = Form.useForm();
  const formFields = [
    { label: "Company name", name: "company_name" },
    { label: "Address", name: "Address" },
    { label: "Phone", name: "Phone" },
    { label: "About", name: "About" },
    { label: "Website", name: "Website" },
    { label: "Facebook", name: "Facebook" },
    { label: "LinkedIn", name: "LinkedIn" },
    { label: "Twitter", name: "Twitter" },
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
                <Input placeholder={label} />
              </Form.Item>
            </Col>
          ))}
        </Row>
        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
          style={{ textAlign: "right" }}
        >
          <Button
            type="secondary"
            style={{ marginRight: "1rem" }}
          >
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default CompanySettings;
