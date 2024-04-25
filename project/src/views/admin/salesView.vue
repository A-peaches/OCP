<template>
  <div class="chart-container">
    <h1>매출현황</h1>
    <hr />
    <div id="lineChart" style="width: 100%; height: 500px"></div>
    <div id="lineChart1" style="width: 100%; height: 500px"></div>
    <div id="pieChart" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MultiCharts",
  data() {
    return {
      sales: [],
      menuOrderCnt: [],
      uploadedFileName: null,
    };
  },
  created() {
    this.fetchSalesData();
    this.fetchCntData();
  },
  mounted() {
    /* eslint-disable no-undef */
    google.charts.load("current", { packages: ["corechart"] });
    // eslint-disable-next-line no-undef
    google.charts.setOnLoadCallback(this.drawAllCharts);
    window.addEventListener("resize", this.drawAllCharts);
  },
  methods: {
    drawAllCharts() {
      this.drawLineChart();
      this.drawLineChart1();
      this.drawPieChart();
    },

    drawLineChart() {
      console.log("세일즈가들어왔낭? :", this.sales);
      const salesData = this.sales;
      const formattedSalesData = salesData.map((item) => {
        // yyyymmdd 형식의 문자열을 Date 객체로 변환
        const dateObj = new Date(
          `${item.orderDate.slice(0, 4)}-${item.orderDate.slice(
            4,
            6
          )}-${item.orderDate.slice(6, 8)}`
        );
        // 날짜 부분만 추출 (월/일)
        const dateString = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
        return [dateString, parseInt(item.dailySales)];
      });

      const data = google.visualization.arrayToDataTable([
        ["date", "Sales"],
        ...formattedSalesData,
      ]);

      const options = {
        title: "일별 매출 그래프",
        titleTextStyle: {
          color: "#4a4a4a", // specifying font color
          fontName: "Arial",
          fontSize: 20, // or use your preferred size
          bold: true, // true or false
        },
        hAxis: {
          title: "Date",
          format: "M/d", // 축 레이블 형식 지정 (월/일)
        },
        colors: ["rgb(255, 0, 0)", "blue", "green"],

        curveType: "function",
        legend: { position: "bottom" },
      };

      const chart = new google.visualization.LineChart(
        document.getElementById("lineChart")
      );
      chart.draw(data, options);
    },

    drawLineChart1() {
      const salesData = this.sales;
      const formattedSalesData = salesData.map((item) => {
        // yyyymmdd 형식의 문자열을 Date 객체로 변환
        const dateObj = new Date(
          `${item.orderDate.slice(0, 4)}-${item.orderDate.slice(
            4,
            6
          )}-${item.orderDate.slice(6, 8)}`
        );
        // 날짜 부분만 추출 (월/일)
        const dateString = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
        return [dateString, parseInt(item.orderCnt)];
      });

      const data = google.visualization.arrayToDataTable([
        ["date", "orderCnt"],
        ...formattedSalesData,
      ]);

      const options = {
        title: "일별 주문량 그래프",
        titleTextStyle: {
          color: "#4a4a4a", // specifying font color
          fontName: "Arial",
          fontSize: 20, // or use your preferred size
          bold: true, // true or false
        },
        hAxis: {
          title: "Date",
          format: "M/d", // 축 레이블 형식 지정 (월/일)
        },

        curveType: "function",
        legend: { position: "bottom" },
      };

      const chart = new google.visualization.LineChart(
        document.getElementById("lineChart1")
      );
      chart.draw(data, options);
    },

    drawPieChart() {
      const menuData = this.menuOrderCnt;

      const formattedData = menuData.map((item) => [
        item.menuName,
        parseInt(item.totalOrders),
      ]);
      const data = google.visualization.arrayToDataTable([
        ["Menu", "numb"],
        ...formattedData,
      ]);
      // const data = google.visualization.arrayToDataTable([
      //   ["Menu", "numb"],
      //   ["Pandaricano", 11],
      //   ["Panlatte", 2],
      //   ["Panpuchino", 2],
      //   ["Pandu brew", 2],
      // ]);

      const options = {
        title: "메뉴 분포도 분석",
        titleTextStyle: {
          color: "#4a4a4a", // specifying font color
          fontName: "Arial",
          fontSize: 20, // or use your preferred size
          bold: true, // true or false
        },
        is3D: true,
      };

      const chart = new google.visualization.PieChart(
        document.getElementById("pieChart")
      );
      chart.draw(data, options);
    },
    async fetchSalesData() {
      try {
        const response = await axios.get("http://localhost:3000/sales");
        this.sales = response.data;
        console.log(this.sales);
        this.drawAllCharts();
        console.log("데이터 불러오기 성공:", this.sales);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    },
    async fetchCntData() {
      try {
        const response = await axios.get("http://localhost:3000/menucnt");
        this.menuOrderCnt = response.data;
        console.log(this.menuOrderCnt);
        this.drawAllCharts();
        console.log("데이터 불러오기 성공:", this.menuOrderCnt);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    },
  },
};
</script>

<style scoped>
.chart-container {
  margin: 30px auto;
  padding: 20px;
  max-width: 1200px;
}
</style>
