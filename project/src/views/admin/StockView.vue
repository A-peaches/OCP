<template>
  <div class="chart-container">
    <h1>재고현황</h1>
    <hr />

    <div class="order-controls">
      <h1>PandaCoffee 재고조회</h1>
      <hr />
      <br />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">재고명</th>
            <th scope="col">현재재고</th>
            <th scope="col">출고량</th>
            <th scope="col">UnitPrice</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stocks, index) in stocks" :key="stocks">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ stocks.stockName }}</td>
            <td>{{ stocks.inStock }}</td>
            <td>{{ stocks.outStock }}</td>
            <td>{{ stocks.unitPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="order-controls">
      <h1>재고입고</h1>
      <hr />
      <div class="order">
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-align: center;
          "
        >
          <div style="margin-right: 100px" @change="this.fetchStockData()">
            <img src="@/assets/coffeebean.png" alt="..." style="width: 80px" />
            <h4>{{ stocks[3].stockName }}</h4>
            <input
              type="number"
              v-model.number="orderQuantity.coffee"
              style="width: 100px; margin-bottom: 10px"
            />
            <br />
            <input
              type="button"
              value="주문하기"
              style="margin-bottom: 10px"
              @click="() => updateStock('원두')"
            />
            <br />
            <span>초기재고 : {{ stocks[3].inStock }}</span>
          </div>
          <div style="margin-right: 100px">
            <img src="@/assets/milk.png" alt="..." style="width: 80px" />
            <h4>우유</h4>
            <input
              type="number"
              v-model.number="orderQuantity.milk"
              style="width: 100px; margin-bottom: 10px"
            />
            <br />
            <input
              type="button"
              value="주문하기"
              style="margin-bottom: 10px"
              @click="() => updateStock('우유')"
            />
            <br />
            <span>초기재고 : {{ stocks.milk }}</span>
          </div>
          <div style="margin-right: 100px">
            <img src="@/assets/water.png" alt="..." style="width: 80px" />
            <h4>생수</h4>
            <input
              type="number"
              v-model.number="orderQuantity.water"
              style="width: 100px; margin-bottom: 10px"
            />
            <br />
            <input
              type="button"
              value="주문하기"
              style="margin-bottom: 10px"
              @click="() => updateStock('물')"
            />
            <br />
            <span>초기재고 : {{ stocks.water }}</span>
          </div>
          <div>
            <img src="@/assets/syrup.png" alt="..." style="width: 80px" />
            <h4>시럽</h4>
            <input
              type="number"
              v-model.number="orderQuantity.syrup"
              style="width: 100px; margin-bottom: 10px"
            />
            <br />
            <input
              type="button"
              value="주문하기"
              style="margin-bottom: 10px"
              @click="() => updateStock('시럽')"
            />
            <br />
            <span>초기재고 : {{ stocks.syrup }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="barChart" style="width: 100%; height: 450px"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MultiCharts",

  data() {
    return {
      stocks: {
        stockName: "", // 원두 초기 재고 요것들을 DB에서 가져와야함
        inStock: 0, // 우유 초기 재고
        outStock: 0, // 생수 초기 재고
        unitPrice: 0, // 시럽 초기 재고
      },
      stock: {
        coffee: "",
        milk: "",
        water: "",
        syrup: "",
      },

      orderQuantity: {
        // 주문 수량 객체 추가
        coffee: "",
        milk: "",
        water: "",
        syrup: "",
      },
    };
  },
  created() {
    this.fetchStockData();
  },
  mounted() {
    /* eslint-disable no-undef */
    google.charts.load("current", { packages: ["corechart"] });
    // eslint-disable-next-line no-undef
    google.charts.setOnLoadCallback(this.drawAllCharts);
    window.addEventListener("resize", this.drawAllCharts);
  },
  methods: {
    orderItem(item, quantity) {
      this.stocks[item] += Number(quantity);
      this.drawBarChart();
      alert("주문이 완료되었습니다.");
      this.orderQuantity[item] = "";
    },
    //초기재고 불러오기
    async fetchStockData() {
      try {
        const response = await axios.get("http://localhost:3000/stock");
        this.stocks = response.data;
        console.log(this.stocks[3].inStock);
        console.log("데이터 불러오기 성공:", this.stocks);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    },
  },

  //재고 입고
  async updateStock(name) {
    let orderQuantity = 0; // 주문 수량 변수 초기화

    // 조건에 따라 주문 수량 설정
    if (name === "원두") {
      orderQuantity = this.orderQuantity.coffee;
    }
    if (name === "물") {
      orderQuantity = this.orderQuantity.water;
    }
    if (name === "우유") {
      orderQuantity = this.orderQuantity.milk;
    }
    if (name === "시럽") {
      orderQuantity = this.orderQuantity.syrup;
    }
    try {
      const response = await axios.post("http://localhost:3000/stockupdate", {
        itemName: name, // 아이템 이름
        orderQuantity: orderQuantity, // 주문 수량
      });
      console.log("데이터 업데이트 성공:", response.data);
    } catch (error) {
      console.error("데이터 업데이트 실패:", error);
    }
  },

  drawAllCharts() {
    this.drawBarChart();
  },
  drawBarChart() {
    const data = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }],
      ["원두", this.stocks[3].inStock, "#3F1F25"],
      ["우유", this.stocks[2].inStock, "#EBB9C3"],
      ["생수", this.stocks[1].inStock, "#78FFFF"],
      ["시럽", this.stocks[0].inStock, "color: #F7CD4F"],
    ]);

    const options = {
      title: "음료 관련 재고현황",
      titleTextStyle: {
        color: "#4a4a4a", // specifying font color
        fontName: "Arial",
        fontSize: 20, // or use your preferred size
        bold: true, // true or false
      },
      bar: { groupWidth: "95%" },
      legend: { position: "none" },
      hAxis: {
        textStyle: {
          color: "#4a4a4a",
          fontName: "Arial",
          fontSize: 14,
        },
      },
      vAxis: {
        textStyle: {
          color: "#4a4a4a",
          fontName: "Arial",
          fontSize: 14,
        },
      },
    };

    const chart = new google.visualization.BarChart(
      document.getElementById("barChart")
    );
    chart.draw(data, options);
  },
  watch: {
    orderQuantity: {
      // 객체 내부의 하위 속성들도 감시할 수 있음
      deep: true,
      // 변경될 때 실행할 콜백 함수
      handler(newVal, oldVal) {
        console.log("orderQuantity가 변경되었습니다.");
        console.log("새 값:", newVal);
        console.log("이전 값:", oldVal);
      },
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
.order-controls {
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  max-width: 1200px;
}
.order-controls h1 {
  text-align: center;
  font-size: 22px;
  color: #333;
}
.order ul {
  padding: 0; /* 기존의 ul 패딩을 제거 */
  margin: 0; /* 기본 마진 제거 */
  list-style-type: none; /* 리스트 스타일 제거 */
}

.order li {
  display: flex; /* flexbox 레이아웃을 사용 */
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 내용물도 중앙 정렬 */
  padding: 10px 0; /* 상하 패딩 조정 */
}
.order li:last-child {
  border-bottom: none;
}
.order h4 {
  margin: 10px 0;
  color: #555;
}
.order input[type="number"] {
  width: 50%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  margin-left: 10px;
}
.order input[type="button"] {
  padding: 8px 16px;
  background-color: #818882;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.order input[type="button"]:hover {
  background-color: #747c74;
}
</style>
