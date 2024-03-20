import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const chartData = [
  { productCategory: "Venue", value1: 10, value2: 15 },
  { productCategory: "Event", value1: 30, value2: 25 },
  { productCategory: "Education", value1: 40, value2: 35 },
  { productCategory: "Buy and sell", value1: 60, value2: 50 },
  { productCategory: "Concierges", value1: 30, value2: 50 },
  { productCategory: "Directories", value1: 20, value2: 50 },
  { productCategory: "Influencers", value1: 90, value2: 25 },
  { productCategory: "Job", value1: 20, value2: 50 },
  { productCategory: "Space", value1: 10, value2: 45 },
  { productCategory: "Tickets", value1: 50, value2: 10 },
  { productCategory: "others", value1: 10, value2: 45 },
  { productCategory: "Ticketss", value1: 50, value2: 10 },
];

const StackedColumnChart = ({ chartId }) => {
  useEffect(() => {
    if (chartData.length > 0) {
      setTimeout(() => {
        loadChart();
      }, 100);
    }
  }, [chartData]);

  const loadChart = async () => {
    let chart = am4core.create(chartId, am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;

    chart.colors.list = [
      am4core.color("#4B4CFF"),
      am4core.color("#67BCFB"),
      am4core.color("#F7CF78"),
      am4core.color("#67BCFB"),
    ];

    chart.data = chartData;
    chart.colors.step = 2;
    chart.padding(10, 10, 10, 0);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;
    if (chart.logo) {
      chart.logo.disabled = true;
    }

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "productCategory";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    var labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.wrap = true;
    labelTemplate.maxWidth = 100;

    categoryAxis.events.on("sizechanged", function (ev) {
      var axis = ev.target;
      var cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
      if (cellWidth < axis.renderer.labels.template.maxWidth) {
        if (cellWidth > 30 && cellWidth < 100) {
          axis.renderer.labels.template.rotation = -35;
          axis.renderer.labels.template.maxWidth = 100;
        } else if (cellWidth > 100) {
          axis.renderer.labels.template.rotation = 0;
          axis.renderer.labels.template.wrap = true;
          axis.renderer.labels.template.maxWidth = 100;
        } else {
          axis.renderer.labels.template.rotation = -45;
          axis.renderer.labels.template.maxWidth = 160;
        }

        axis.renderer.labels.template.horizontalCenter = "right";
        axis.renderer.labels.template.verticalCenter = "middle";

        axis.renderer.labels.template.fontSize = 14;
      } else {
        axis.renderer.labels.template.rotation = 0;
        axis.renderer.labels.template.horizontalCenter = "middle";
        axis.renderer.labels.template.verticalCenter = "top";
      }
    });

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 150;
    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText = "{name}: {valueY}";

    series1.name = "Enquire Form";
    series1.dataFields.categoryX = "productCategory";
    series1.dataFields.valueY = "value1";

    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";
    series1.tooltip.label.adapter.add("text", function (text, target) {
      if (target.dataItem && target.dataItem.valueY == 0) {
        return "";
      } else {
        return text;
      }
    });
    series1.columns.template.column.cornerRadiusTopLeft = 0;
    series1.columns.template.column.cornerRadiusTopRight = 0;

    var bullet = series1.bullets.push(new am4charts.LabelBullet());
    bullet.interactionsEnabled = false;
    bullet.dy = 45;
    bullet.label.text = "{valueY}";
    bullet.label.fill = am4core.color("#ffffff");

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText = "{name}: {valueY}";
    series2.name = "Email";
    series2.dataFields.categoryX = "productCategory";
    series2.dataFields.valueY = "value2";

    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";

    // series2.columns.template.column.cornerRadiusTopLeft = 10;
    // series2.columns.template.column.cornerRadiusTopRight = 10;

    series2.tooltip.label.adapter.add("text", function (text, target) {
      if (target.dataItem && target.dataItem.valueY == 0) {
        return "";
      } else {
        return text;
      }
    });

    var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY}";
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color("#ffffff");

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText = "{name}: {valueY}";
    series3.name = "Whatsapp";
    series3.dataFields.categoryX = "productCategory";
    series3.dataFields.valueY = "value2";

    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";

    // series3.columns.template.column.cornerRadiusTopLeft = 10;
    // series3.columns.template.column.cornerRadiusTopRight = 10;

    series3.tooltip.label.adapter.add("text", function (text, target) {
      if (target.dataItem && target.dataItem.valueY == 0) {
        return "";
      } else {
        return text;
      }
    });

    var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY}";
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");
    var series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.columns.template.width = am4core.percent(80);
    series4.columns.template.tooltipText = "{name}: {valueY}";
    series4.name = "Phone ";
    series4.dataFields.categoryX = "productCategory";
    series4.dataFields.valueY = "value2";

    series4.stacked = true;
    series4.tooltip.pointerOrientation = "vertical";

    series4.columns.template.column.cornerRadiusTopLeft = 10;
    series4.columns.template.column.cornerRadiusTopRight = 10;

    series4.tooltip.label.adapter.add("text", function (text, target) {
      if (target.dataItem && target.dataItem.valueY == 0) {
        return "";
      } else {
        return text;
      }
    });

    var bullet4 = series4.bullets.push(new am4charts.LabelBullet());
    bullet4.interactionsEnabled = false;
    bullet4.label.text = "{valueY}";
    bullet4.locationY = 0.5;
    bullet4.label.fill = am4core.color("#ffffff");

    // Need to check this later
    chart.legend.itemContainers.template.events.on("hit", function (ev) {
      let seriesColumn = ev.target.dataItem.name;
      if (seriesColumn === "Available Seats") {
        series1.columns.template.column.cornerRadiusTopLeft = 10;
        series1.columns.template.column.cornerRadiusTopRight = 10;
      } else {
        series1.columns.template.column.cornerRadiusTopLeft = 0;
        series1.columns.template.column.cornerRadiusTopRight = 0;
      }
    });
  };

  return (
    <div
      id={chartId}
      style={{
        width: "100%",
        height: "370px",
      }}
    ></div>
  );
};

export default StackedColumnChart;
