import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const chartData = [
  { productCategory: "Venue", value1: 10, value2: 15 },
  { productCategory: "Event", value1: 30, value2: 25 },
  { productCategory: "Education", value1: 40, value2: 35 },
  { productCategory: "Buy and sell", value1: 30, value2: 30 },
  { productCategory: "Concierges", value1: 30, value2: 50 },
  { productCategory: "Directories", value1: 20, value2: 10 },
  { productCategory: "Influencers", value1: 50, value2: 25 },
  { productCategory: "Job", value1: 20, value2: 50 },
  { productCategory: "Space", value1: 10, value2: 15 },
  { productCategory: "Tickets", value1: 20, value2: 10 },
  { productCategory: "others", value1: 10, value2: 45 },
  { productCategory: "Ticketss", value1: 50, value2: 10 },
];

const ColumnBarChart1 = ({ chartId }) => {
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
      am4core.color("#F800C0"),
      am4core.color("#67BCFB"),
      am4core.color("#F7CF78"),
      am4core.color("#39D3EC"),
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
    categoryAxis.renderer.grid.template.disabled = true;
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
    valueAxis.max = 130;
    valueAxis.renderer.grid.template.disabled = true;

    // Series creation
    const createSeries = (name, field) => {
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.categoryX = "productCategory";
      series.dataFields.valueY = field;
      series.columns.template.width = am4core.percent(80);
      series.columns.template.tooltipText = `{name}: {valueY}`;
      series.stacked = true;
      series.tooltip.pointerOrientation = "vertical";
      return series;
    };

    // Enquire Form Series
    const series1 = createSeries("Enquire Form", "value1");

    // Email Series
    const series2 = createSeries("Email", "value2");

    // WhatsApp Series
    const series3 = createSeries("WhatsApp", "value2");

    // Phone Series
    const series4 = createSeries("Phone", "value2");
    series4.columns.template.column.cornerRadiusTopLeft = 15;
    series4.columns.template.column.cornerRadiusTopRight = 15;

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
        height: "580px",
      }}
    ></div>
  );
};

export default ColumnBarChart1;
