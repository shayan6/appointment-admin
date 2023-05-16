import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  message,
  Typography,
} from "antd";
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSettings } from "../../main/actions";
import { useState } from "react";
import PageHeader from "../../main/components/PageHeader";
// import FailedRecordsTable from "./components/FailedRecordsTable";

function Settings() {
  const [form] = Form.useForm();
  const settings = useSelector((state) => state.common.settings);
  const dispatch = useDispatch();
  const [showDebugger, setShowDebugger] = useState(
    settings.showDebugger || false
  );
  const [theme, setTheme] = useState(settings.theme === "dark");
  const onFinish = (el) => {
    console.log(el);
    const newSettings = {
      showDebugger,
      theme: theme ? "dark" : "light",
      color: {
        colorPrimary: el.colorPrimary || settings?.color?.colorPrimary,
        colorSecondary: el.colorSecondary || settings?.color?.colorSecondary,
        colorWarning: el.colorWarning || settings?.color?.colorWarning,
        colorSuccess: el.colorSuccess || settings?.color?.colorSuccess,
        colorDanger: el.colorDanger || settings?.color?.colorDanger,
        colorYellow: el.colorYellow || settings?.color?.colorYellow,
        colorPurple: el.colorPurple || settings?.color?.colorPurple,
        colorPink: el.colorPink || settings?.color?.colorPink,
        colorBlack: el.colorBlack || settings?.color?.colorBlack,
        colorWhite: el.colorWhite || settings?.color?.colorWhite,
      },
    };
    dispatch(
      setSettings({
        ...settings,
        ...newSettings,
      })
    );
    message.success("Saved successfully!");
  };

  const handleDebugggerChange = (checked) => {
    setShowDebugger(checked);
  };

  const handleThemeChange = (checked) => {
    setTheme(checked);
  };

  const resetSettings = () => {
    localStorage.removeItem("settings");
    window.location.reload();
  };

  return (
    <Row>
      <Col span={24}>
        <PageHeader title="Settings" />
      </Col>
      <Col span={24}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={[18, 18]}>
            <Col span={24}>
              <Card>
                <Row>
                  <Col span={4}>
                    <Form.Item name="showDebugger">
                      <label>
                        <Typography.Title level={5}>Enable Debugger</Typography.Title>
                        <Switch
                          defaultChecked={settings?.showDebugger}
                          onChange={handleDebugggerChange}
                        />
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="theme">
                      <label>
                        <Typography.Title level={5}>Dark Sidebar</Typography.Title>
                        <Switch
                          defaultChecked={settings?.theme === "dark"}
                          onChange={handleThemeChange}
                        />
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorPrimary">
                      <label>
                        <Typography.Title level={5}>Primary</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorPrimary}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorPrimary.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorSecondary">
                      <label>
                        <Typography.Title level={5}>Secondary</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorSecondary}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorSecondary.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorWarning">
                      <label>
                        <Typography.Title level={5}>Warning</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorWarning}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorWarning.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorSuccess">
                      <label>
                        <Typography.Title level={5}>Success</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorSuccess}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorSuccess.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorDanger">
                      <label>
                        <Typography.Title level={5}>Danger</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorDanger}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorDanger.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorYellow">
                      <label>
                        <Typography.Title level={5}>Yellow</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorYellow}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorYellow.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorPurple">
                      <label>
                        <Typography.Title level={5}>Purple</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorPurple}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorPurple.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorPink">
                      <label>
                        <Typography.Title level={5}>Pink</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorPink}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorPink.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorBlack">
                      <label>
                        <Typography.Title level={5}>Black</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorBlack}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorBlack.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item name="colorWhite">
                      <label>
                        <Typography.Title level={5}>White</Typography.Title>
                        <Input
                          type={"color"}
                          defaultValue={settings?.color?.colorWhite}
                        />
                        <span className="colorHex">
                          {settings?.color?.colorWhite.toUpperCase()}
                        </span>
                      </label>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  wrapperCol={{ offset: 8, span: 16 }}
                  style={{ textAlign: "right" }}
                >
                  <Button
                    type="secondary"
                    onClick={resetSettings}
                    style={{ marginRight: "1rem" }}
                  >
                    Reset
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Settings;
