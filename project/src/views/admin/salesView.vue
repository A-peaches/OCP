<template>
  <div class="chart-container">
    <h1>매출현황</h1>
    <hr>
    <div id="lineChart" style="width: 100%; height: 500px;"></div>
    <div id="pieChart" style="width: 100%; height: 500px;"></div>

  </div>
</template>

<script>
export default {
  name: "MultiCharts",
  mounted() {
    /* eslint-disable no-undef */
    google.charts.load('current', {'packages':['corechart']});
    // eslint-disable-next-line no-undef
    google.charts.setOnLoadCallback(this.drawAllCharts);
    window.addEventListener('resize', this.drawAllCharts);
  },
  methods: {
    drawAllCharts() {
      this.drawLineChart();
      this.drawPieChart();
    },
    
    drawLineChart() {
      const data = google.visualization.arrayToDataTable([
        ['date', 'Sales', 'order'],
        ['04.10', 5, 2],
        ['04.11', 4, 1],
        ['04.12', 2, 2],
        ['04.13', 9, 11],
        ['04.13', 15, 10],
        ['04.13', 8, 8],
        ['04.13', 9, 6],
        ['04.13', 8, 11],
        ['04.13', 14, 15]
      ]);

      const options = {
        title: '일별 매출 그래프',
        titleTextStyle: {
            color: '#4a4a4a', // specifying font color
            fontName: 'Arial',
            fontSize: 20, // or use your preferred size
            bold: true // true or false
        },
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      const chart = new google.visualization.LineChart(document.getElementById('lineChart'));
      chart.draw(data, options);
    },
    drawPieChart() {
      const data = google.visualization.arrayToDataTable([
        ['Menu', 'numb'],
        ['Pandaricano', 11],
        ['Panlatte', 2],
        ['Panpuchino', 2],
        ['Pandu brew', 2]
      ]);

      const options = {
        title: '메뉴 분포도 분석',
        titleTextStyle: {
            color: '#4a4a4a', // specifying font color
            fontName: 'Arial',
            fontSize: 20, // or use your preferred size
            bold: true // true or false
        },
        is3D: true,
      };

      const chart = new google.visualization.PieChart(document.getElementById('pieChart'));
      chart.draw(data, options);
    }
  }
};
</script>

<style scoped>
.chart-container {
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
}
</style>
