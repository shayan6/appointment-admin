import { ConfigProvider } from "antd";
import "./index.scss";
import Layouts from "./main/components/Layouts";

function App() {
  return (
    <ConfigProvider direction="ltl">
      <Layouts />
    </ConfigProvider>
  );
}

export default App;
