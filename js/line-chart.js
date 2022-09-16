google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["", ""],
    ["Mon", 400],
    ["Tue", 460],
    ["Web", 1120],
    ["Thur", 540],
    ["Friday", 540],
    ["Saturday", 540],
    ["Sunday", 540],
  ]);

  var options = {
    title: "Time spent on learning",
    curveType: "function",
    legend: { position: "top" },
  };

  var chart = new google.visualization.LineChart(document.getElementById("curve_chart"));

  chart.draw(data, options);
}
