<template>
  <div class="chart-container">
    <h1>재고현황</h1>
    <hr />

    <div class="order-controls">
      <h2 class="text-center">재고입고</h2>
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
              @click="waterOrder(orderQuantity.water)"
            />
            <br />
          </div>
          <div style="margin-right: 100px">
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
              @click="syrupOrder(orderQuantity.syrup)"
            />
            <br />
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
              @click="milkOrder(orderQuantity.milk)"
            />
            <br />
          </div>
          <div>
            <img src="@/assets/coffeebean.png" alt="..." style="width: 80px" />
            <h4>원두</h4>
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
              @click="coffeeOrder(orderQuantity.coffee)"
            />
            <br />
          </div>
        </div>
      </div>
      <div class="mt-5">
        <p>* 주문은 10단위로 할 수 있습니다.</p>
      </div>
    </div>
    <div class="order-controls">
      <h2 class="text-center">재고 조회</h2>
      <hr />
      <br />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">재고명</th>
            <th scope="col">입고량</th>
            <th scope="col">출고량</th>
            <th scope="col">현재 재고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in stocksWithRemaining" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.stockName }}</td>
            <td>{{ item.inStock }}</td>
            <td>{{ item.outStock }}</td>
            <td>{{ item.remainingStock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top: 50px; margin-left: 230px">
      <img
        src="@/assets/stockpanda.png"
        style="height: 30%; width: 30%"
        class="moving-panda"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StockView",

  data() {
    return {
      stocks: [],
      orderQuantity: {
        // 주문 수량 객체 추가
        coffee: "",
        milk: "",
        water: "",
        syrup: "",
      },
    };
  },
  computed: {
    stocksWithRemaining: function () {
      return this.stocks.map((stock) => ({
        ...stock,
        remainingStock:
          parseInt(stock.inStock, 10) - parseInt(stock.outStock, 10), // 문자열을 정수로 변환
      }));
    },
  },
  mounted() {
    this.fetchStockData();
  },
  methods: {
    async syrupOrder(orderCnt) {
      //여기는 시럽 오더~
      this.stocks[1].inStock = this.stocks[1].inStock + orderCnt;

      try {
        const response = await axios.post("http://localhost:3000/orderSyrup", {
          updateSyrup: this.stocks[1].inStock,
        });
        if (response.data.success) {
          // 서버 측 업데이트 성공 후 클라이언트 측 데이터 업데이트
          console.log("Syrup order success:", response);
          alert("시럽 주문이 완료되었습니다!");
        } else {
          // 서버에서 수량 증가 실패 메시지 반환
          console.error("Syrup order failed", response.data.message);
          alert("시럽 주문 실패: " + response.data.message);
        }
      } catch (error) {
        console.error("Error Syrup order ", error);
        alert("시럽 주문 실패.");
      }
      this.orderQuantity.syrup = "";
    },
    async waterOrder(orderCnt) {
      //요기는 생수 오더~
      this.stocks[0].inStock = this.stocks[0].inStock + orderCnt;

      try {
        const response = await axios.post("http://localhost:3000/orderWater", {
          updateWater: this.stocks[0].inStock,
        });
        if (response.data.success) {
          // 서버 측 업데이트 성공 후 클라이언트 측 데이터 업데이트
          console.log("Water order success:", response);
          alert("생수 주문이 완료되었습니다!");
        } else {
          // 서버에서 수량 증가 실패 메시지 반환
          console.error("Water order failed", response.data.message);
          alert("물 주문 실패: " + response.data.message);
        }
      } catch (error) {
        console.error("Error Water order ", error);
        alert("물 주문 실패.");
      }
      this.orderQuantity.water = "";
    },
    async milkOrder(orderCnt) {
      //요기는 우유 오더~
      this.stocks[2].inStock = this.stocks[2].inStock + orderCnt;

      try {
        const response = await axios.post("http://localhost:3000/orderMilk", {
          updateMilk: this.stocks[2].inStock,
        });
        if (response.data.success) {
          // 서버 측 업데이트 성공 후 클라이언트 측 데이터 업데이트
          console.log("milk order success:", response);
          alert("우유 주문이 완료되었습니다!");
        } else {
          // 서버에서 수량 증가 실패 메시지 반환
          console.error("milk order failed", response.data.message);
          alert("우유 주문 실패: " + response.data.message);
        }
      } catch (error) {
        console.error("Error milk order ", error);
        alert("우유 주문 실패.");
      }
      this.orderQuantity.milk = "";
    },
    async coffeeOrder(orderCnt) {
      //요기는 커피오더~
      this.stocks[3].inStock = this.stocks[3].inStock + orderCnt;

      try {
        const response = await axios.post("http://localhost:3000/orderCoffee", {
          updateBeans: this.stocks[3].inStock,
        });
        if (response.data.success) {
          // 서버 측 업데이트 성공 후 클라이언트 측 데이터 업데이트
          console.log("coffee order  success:", response);
          alert("원두 주문이 완료되었습니다!");
        } else {
          // 서버에서 수량 증가 실패 메시지 반환
          console.error("coffee order failed", response.data.message);
          alert("커피 주문 실패: " + response.data.message);
        }
      } catch (error) {
        console.error("Error coffee order ", error);
        alert("커피 주문 실패.");
      }
      this.orderQuantity.coffee = "";
    },
    async fetchStockData() {
      try {
        const response = await axios.get("http://localhost:3000/stock");
        this.stocks = response.data;
        console.log("데이터 불러오기 성공:", this.stocks);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    },
  },
  orderItem(item, quantity) {
    this.stocks[item] += Number(quantity);
    this.drawBarChart();
    alert("주문이 완료되었습니다.");
    this.orderQuantity[item] = "";
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

.moving-panda {
  position: relative;
  animation: moveLeftRight 15s infinite; /* 6초 동안 반복 */
}

@keyframes moveLeftRight {
  0%,
  100% {
    transform: scaleX(1); /* 시작과 끝에서 원래 방향 */
    left: 0; /* 시작과 끝 위치 */
  }
  25% {
    transform: scaleX(1); /* 오른쪽 끝으로 걸어갈 때 원래 방향 */
    left: 300px; /* 오른쪽 끝 위치 */
  }
  50% {
    transform: scaleX(-1); /* 뒤집힌 상태로 시작 */
    left: 300px; /* 오른쪽 끝에서 시작 */
  }
  75% {
    transform: scaleX(-1); /* 뒤집힌 상태로 걸어감 */
    left: 0; /* 왼쪽 끝으로 걸어옴 */
  }
}
</style>
