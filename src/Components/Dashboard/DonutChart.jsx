// import React, { useEffect } from "react";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// const chartData = [
//   { paymentMethod: "Qatar", transactionAmount: 20 },
//   { paymentMethod: "South Africa", transactionAmount: 30 },
//   { paymentMethod: "Australia", transactionAmount: 50 },
//   { paymentMethod: "India", transactionAmount: 40 }, // New data point
// ];

// const DonutChart = ({ chartId }) => {
//   useEffect(() => {
//     let chart = am4core.create(chartId, am4charts.PieChart);
//     am4core.useTheme(am4themes_animated);

//     if (chart.logo) {
//       chart.logo.disabled = true;
//     }

//     chart.data = chartData;
//     let pieSeries = chart.series.push(new am4charts.PieSeries());
//     pieSeries.dataFields.value = "transactionAmount";
//     pieSeries.dataFields.category = "paymentMethod";

//     // Apply gradient only to "Qatar" slice
//     pieSeries.slices.template.propertyFields.fill = "color";
//     pieSeries.slices.template.propertyFields.stroke = "color";

//     let gradient = new am4core.LinearGradient();
//     gradient.stops.push({ color: am4core.color("#003DCA"), offset: 0 });
//     gradient.stops.push({ color: am4core.color("#F800C0"), offset: 1 });

//     let colors = [
//       am4core.color("#39D3EC"), // South Africa
//       am4core.color("#4B4CFF"), // Australia
//       gradient, // Gradient for Qatar
//       am4core.color("#FFC107"), // India
//     ];

//     pieSeries.colors.list = colors;

//     pieSeries.innerRadius = am4core.percent(45);
//     pieSeries.slices.template.stroke = am4core.color("#fff");
//     pieSeries.slices.template.strokeWidth = 2;
//     pieSeries.slices.template.strokeOpacity = 1;
//     pieSeries.slices.template.cursorOverStyle = [
//       {
//         property: "cursor",
//         value: "pointer",
//       },
//     ];

//     chart.legend = new am4charts.Legend();

//     return () => {
//       chart.dispose();
//     };
//   }, [chartId]);

//   return <div id={chartId} style={{ width: "100%", height: "370px" }}></div>;
// };

// export default DonutChart;

import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const chartData = [
  { paymentMethod: "United Kingdom", transactionAmount: 90, color: "#043FC7" },
  { paymentMethod: "UAE", transactionAmount: 20, color: "#FFDA15" },
  { paymentMethod: "Qatar", transactionAmount: 30, color: "#39D3EC" },
  { paymentMethod: "India", transactionAmount: 40, color: "#F56C89" }, // New data point
];

const DonutChart = ({ chartId }) => {
  useEffect(() => {
    let chart = am4core.create(chartId, am4charts.PieChart);
    am4core.useTheme(am4themes_animated);

    if (chart.logo) {
      chart.logo.disabled = true;
    }

    chart.data = chartData;
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "transactionAmount";
    pieSeries.dataFields.category = "paymentMethod";

    // Apply fill color to the slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);
    pieSeries.colors.step = 6;
    pieSeries.slices.template.propertyFields.fill = "color"; // Bind fill property to data
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer",
      },
    ];

    chart.innerRadius = am4core.percent(45);

    // Initialize legend before setting its position
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right"; // Position legend to the right

    return () => {
      chart.dispose();
    };
  }, [chartId]);

  return <div id={chartId} style={{ width: "100%", height: "370px" }}></div>;
};

export default DonutChart;
