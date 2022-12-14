import React from "react";
import { Funnel } from "@ant-design/plots";
import { Card, Col, Divider, Row } from "antd";

export default function ConversionsChart() {
  const data = [
    {
      stage: "简历筛选",
      number: 253,
      company: "Yesterday",
    },
    {
      stage: "初试人数",
      number: 151,
      company: "Yesterday",
    },
    {
      stage: "复试人数",
      number: 113,
      company: "Yesterday",
    },
    {
      stage: "录取人数",
      number: 87,
      company: "Yesterday",
    },
    {
      stage: "入职人数",
      number: 59,
      company: "Yesterday",
    },
    {
      stage: "简历筛选",
      number: 303,
      company: "Today",
    },
    {
      stage: "初试人数",
      number: 251,
      company: "Today",
    },
    {
      stage: "复试人数",
      number: 153,
      company: "Today",
    },
    {
      stage: "录取人数",
      number: 117,
      company: "Today",
    },
    {
      stage: "入职人数",
      number: 79,
      company: "Today",
    },
  ];
  const config = {
    width: 500,
    height: 200,
    data,
    xField: "stage",
    yField: "number",
    compareField: "company",
    meta: {
      stage: {
        alias: "行为",
      },
      pv: {
        alias: "人数",
        formatter: (v) => `${v}次`,
      },
    },
    tooltip: {
      fields: ["stage", "number", "company"],
      formatter: (v) => ({
        name: `${v.company}的${v.stage}`,
        value: v.number,
      }),
    },
    legend: false,
  };
  return (
    <Row>
      <Col span={24}>
        <Card>
          <Funnel {...config} />
        </Card>
      </Col>
    </Row>
  );
};
