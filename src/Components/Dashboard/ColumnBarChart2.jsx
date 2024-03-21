import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
var clustredColumnBarChart = null;

const ColumnBarChart2 = () => {
  useEffect(() => {
    setTimeout(() => {
      dashboardYearChart();
    }, 1000);
  }, []);

  const dashboardYearChart = () => {
    if (clustredColumnBarChart) clustredColumnBarChart.dispose();
    clustredColumnBarChart = am4core.create("chartdiv", am4charts.XYChart);
    if (clustredColumnBarChart.logo) {
      clustredColumnBarChart.logo.disabled = true;
    }

    // Add data
    clustredColumnBarChart.data = [
      {
        month: "Mac",
        value: 300,
        color: "#39D3EC",
      },
      {
        month: "Windows",
        value: 100,
        color: "#F4F4F4",
      },
      {
        month: "IOS",
        value: 600,
        color: "#67BCFB",
      },
      {
        month: "Linux",
        value: 400,
        color: "#F800C0",
      },
      {
        month: "Android",
        value: 600,
        color: "#F7CF78",
      },
      {
        month: "Others",
        value: 900,
        color: "#0ED47B",
      },
    ];

    // Create category axis
    let categoryAxis = clustredColumnBarChart.xAxes.push(
      new am4charts.CategoryAxis()
    );
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    // Create value axis
    let valueAxis = clustredColumnBarChart.yAxes.push(
      new am4charts.ValueAxis()
    );

    // Create series
    let series = clustredColumnBarChart.series.push(
      new am4charts.ColumnSeries()
    );
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "month";
    series.columns.template.strokeWidth = 0;
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{category}: [bold]{valueY}[/]";
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;

    // Add legend
    clustredColumnBarChart.legend = new am4charts.Legend();
    // Disable scrollbar
    clustredColumnBarChart.scrollbarX = null;
    // Enable theme
    clustredColumnBarChart.cursor = new am4charts.XYCursor();
  };

  return <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>;
};

export default ColumnBarChart2;
