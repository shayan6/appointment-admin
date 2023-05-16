import { MenuOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Switch, Table } from "antd";
import { arrayMoveImmutable } from "array-move";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import PageHeader from "../../main/components/PageHeader";
import "./style.scss";
import {
  getPanelSettings,
  saveFrontEndPanels,
} from "../../api_helpers/microservices/settings";

const DragHandle = SortableHandle(() => (
  <MenuOutlined
    style={{
      cursor: "grab",
      color: "#999",
    }}
  />
));
const SortableItem = SortableElement((props) => <tr {...props} />);
const SortableBody = SortableContainer((props) => <tbody {...props} />);

export default function Steps() {
  const baseUrl = useSelector((state) => state.common.url);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "Sort",
      dataIndex: "sort",
      width: 30,
      className: "drag-visible",
      render: () => <DragHandle />,
    },
    {
      title: "Name",
      dataIndex: "step_name",
      className: "drag-visible",
      render: (step_name) => step_name.toUpperCase(),
    },
    {
      title: "Status",
      dataIndex: "is_active",
      width: "10%",
      render: (is_active, { id }) => (
        <Switch
          checked={is_active}
          onChange={(check) => onSwitchStatus(check, id)}
        />
      ),
    },
  ];

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(
        dataSource.slice(),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      console.log("Sorted items: ", newData);
      setDataSource(newData);
    }
  };

  const DraggableContainer = (props) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.index === restProps["data-row-key"]
    );
    return <SortableItem index={index} {...restProps} />;
  };

  function onSwitchStatus(check, id) {
    console.log(check, id);
    setDataSource(
      dataSource.map((el) => ({
        ...el,
        is_active: +id === +el.id ? check : el.is_active,
      }))
    );
  }

  function handleOnSave() {
    savePanelSettings(
      dataSource.map((el, index) => ({
        id: el.id,
        is_active: el.is_active,
        priority: index + 1,
      }))
    );
  }

  const savePanelSettings = async (params) => {
    setLoading(true);
    await saveFrontEndPanels(baseUrl, params);
    setLoading(false);
  };

  const loadPanelSettings = async () => {
    setLoading(true);
    const response = await getPanelSettings(baseUrl);
    setDataSource(
      response.map((el, i) => ({
        ...el,
        key: el.id,
        index: i,
        is_active: Boolean(+el.is_active),
      }))
    );
    setLoading(false);
  };

  useEffect(() => {
    loadPanelSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col span={24}>
        <PageHeader title="Steps" />
      </Col>
      <Col span={24}>
        <Card>
          <Table
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            loading={loading}
            rowKey="index"
            components={{
              body: {
                wrapper: DraggableContainer,
                row: DraggableBodyRow,
              },
            }}
          />
          <br />
          <Button type="primary" onClick={handleOnSave}>
            Save
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
