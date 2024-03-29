import React from "react";
import { Pie, measureTextWidth } from "@ant-design/plots";
import { Card, Col, Divider, Row } from "antd";
import { useSelector } from "react-redux";

export default function PaymentsChart() {
  const settings = useSelector((state) => state.common.settings);
  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(
      text,
      style
    );
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(
            Math.pow(R, 2) /
              (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
          )
        ),
        1
      );
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
      scale < 1 ? 1 : "inherit"
    };">${text}</div>`;
  }

  const data = [
    {
      type: "Cash",
      value: 270,
    },
    {
      type: "Bank",
      value: 250,
    },
    {
      type: "Credit card",
      value: 180,
    },
    {
      type: "Wise",
      value: 150,
    },
    {
      type: "LHV",
      value: 100,
    },
    {
      type: "Revolute",
      value: 500,
    },
  ];
  const config = {
    width: 500,
    height: 220,
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `${v} ¥`,
      },
    },
    ...(settings?.color && { color: Object.values(settings.color) } ),
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 21, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : "Total";
          return renderStatistic(d, text, {
            fontSize: 28,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: "32px",
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum
            ? `$ ${datum.value}`
            : `$ ${data.reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 32,
          });
        },
      },
    },
    // 添加 中心统计文本 交互
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
  };
  return (
    <Row>
      <Col span={24}>
        <Divider orientation="left" orientationMargin="0%">
          Payments
        </Divider>
        <Card>
          <Pie {...config} />
        </Card>
      </Col>
    </Row>
  );
}
