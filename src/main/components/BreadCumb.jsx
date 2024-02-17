import { Breadcrumb } from "antd";

export default function BreadCumb(props) {
  const paths = props?.path?.split("/") || [];
  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {paths.map((el, i) => (
        <Breadcrumb.Item key={`breadcrumb-${i}`}>{el}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
