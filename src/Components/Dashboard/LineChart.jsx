import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useEffect, useState } from "react";

var lineChart = null;
am4core.useTheme(am4themes_animated);

const LineChart = ({ chartId, chartData }) => {
  const [showChart, setShowChart] = useState(true);
  useEffect(() => {
    let data = chartData.filter(function (item) {
      return item.value1 > 0 || item.value2 > 0;
    });
    chartData = data;

    if (data.length > 0) {
      setShowChart(true);
      loadChart();
    } else {
      setShowChart(false);
    }
  });

  const loadChart = () => {
    if (lineChart) lineChart.dispose();

    // Create chart instance
    lineChart = am4core.create(chartId, am4charts.XYChart);
    if (lineChart.logo) {
      lineChart.logo.disabled = true;
    }
    lineChart.colors.list = [
      am4core.color("#1c58ed"),
      am4core.color("#e61809"),
    ];
    lineChart.data = chartData;

    // Create axes
    var categoryAxis = lineChart.xAxes.push(new am4charts.CategoryAxis());

    categoryAxis.dataFields.category = "category";
    categoryAxis.title.text = "Month";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Value";
    valueAxis.min = 0;
    // Create series
    function createSeries(field, name) {
      var series = lineChart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "category";
      series.name = name;
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      series.strokeWidth = 2;

      return series;
    }

    createSeries("value2", "Budget");
    createSeries("value1", "Actuals");
    // Add chart cursor
    lineChart.cursor = new am4charts.XYCursor();
    lineChart.cursor.xAxis = categoryAxis;

    // Add legend
    lineChart.legend = new am4charts.Legend();
  };

  return (
    <>
      <div
        id={chartId}
        style={{
          width: "100%",
          height: "280px",
        }}
      ></div>
    </>
  );
};

export default LineChart;
