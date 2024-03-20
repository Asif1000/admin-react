import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const chartData = [
  { paymentMethod: "Qatar", transactionAmount: 20 },
  { paymentMethod: "South Africa", transactionAmount: 30 },
  { paymentMethod: "Australia", transactionAmount: 50 },
];

const DonutChart = ({ chartId }) => {
  useEffect(() => {
    // Create chart instance
    let chart = am4core.create(chartId, am4charts.PieChart);

    // Set theme
    am4core.useTheme(am4themes_animated);

    // Add data
    chart.data = chartData;

    // Create series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "transactionAmount";
    pieSeries.dataFields.category = "paymentMethod";

    // Define linear gradient colors
    let gradient = new am4core.LinearGradient();
    gradient.stops.push({ color: am4core.color("#003DCA"), offset: 0 });
    gradient.stops.push({ color: am4core.color("#F800C0"), offset: 1 });

    // Add additional colors to the list
    let colors = [
      am4core.color("#39D3EC"),
      am4core.color("#4B4CFF"),
      am4core.color("#F800C0"),
      gradient,
    ];

    pieSeries.colors.list = colors;

    pieSeries.innerRadius = am4core.percent(45);

    // Configure slices
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer",
      },
    ];

    // Add legend
    chart.legend = new am4charts.Legend();

    return () => {
      chart.dispose();
    };
  }, [chartId]);

  return <div id={chartId} style={{ width: "100%", height: "280px" }}></div>;
};

export default DonutChart;
