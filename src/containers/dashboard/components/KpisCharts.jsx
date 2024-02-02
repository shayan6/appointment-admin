import React from "react";
import { DualAxes } from "@ant-design/plots";
import { Card } from "antd";
import { useSelector } from "react-redux";

export default function KpisCharts() {
  const settings = useSelector((state) => state.common.settings);
  const uvBillData = [
    {
      time: "2019-03",
      value: 350,
      type: "Appintments",
    },
    {
      time: "2019-04",
      value: 900,
      type: "Appintments",
    },
    {
      time: "2019-05",
      value: 300,
      type: "Appintments",
    },
    {
      time: "2019-06",
      value: 450,
      type: "Appintments",
    },
    {
      time: "2019-07",
      value: 470,
      type: "Appintments",
    },
    {
      time: "2019-03",
      value: 220,
      type: "Payments",
    },
    {
      time: "2019-04",
      value: 300,
      type: "Payments",
    },
    {
      time: "2019-05",
      value: 250,
      type: "Payments",
    },
    {
      time: "2019-06",
      value: 220,
      type: "Payments",
    },
    {
      time: "2019-07",
      value: 362,
      type: "Payments",
    },
  ];
  const transformData = [
    {
      time: "2019-03",
      count: 800,
    },
    {
      time: "2019-04",
      count: 600,
    },
    {
      time: "2019-05",
      count: 400,
    },
    {
      time: "2019-06",
      count: 380,
    },
    {
      time: "2019-07",
      count: 220,
    },
  ];
  const config = {
    data: [uvBillData, transformData],
    xField: "time",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "column",
        isGroup: true,
        seriesField: "type",
        color: [settings?.color?.colorPrimary || "#2fc25b", settings?.color?.colorSuccess || "#30BF78"], // Specify colors for each series
      },
      {
        geometry: "line",
        lineStyle: {
          lineWidth: 2,
        },
        color: settings?.color?.colorWarning, // Specify colors for each series
      },
    ],
  };
  return (
    <Card>
      <DualAxes {...config} />
    </Card>
  );
}
