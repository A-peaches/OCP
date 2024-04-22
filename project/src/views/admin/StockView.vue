<template>
  <div class="chart-container">
    <h1>재고현황</h1>
    <hr>
    <div id="barChart" style="width: 100%; height: 500px;"></div>
    <div class="order-controls">
        <h1>재고주문</h1>
        <hr>
        <div class="order">
            <ul>
                <li><h4>원두 주문하기</h4><input type="number" v-model.number="orderQuantity.coffee"><input type="button" value="주문하기" @click="orderItem('coffee', orderQuantity.coffee)"></li>
                <li><h4>우유 주문하기</h4><input type="number" v-model.number="orderQuantity.milk"><input type="button" value="주문하기" @click="orderItem('milk', orderQuantity.milk)"></li>
                <li><h4>생수 주문하기</h4><input type="number" v-model.number="orderQuantity.water"><input type="button" value="주문하기" @click="orderItem('water', orderQuantity.water)"></li>
                <li><h4>시럽 주문하기</h4><input type="number" v-model.number="orderQuantity.syrup"><input type="button" value="주문하기" @click="orderItem('syrup', orderQuantity.syrup)"></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiCharts",

  data() {
    return {
      stocks: {
        coffee: 80, // 원두 초기 재고 요것들을 DB에서 가져와야함
        milk: 50,   // 우유 초기 재고
        water: 120, // 생수 초기 재고
        syrup: 40   // 시럽 초기 재고
      },
      orderQuantity: { // 주문 수량 객체 추가
        coffee: '',
        milk: '',
        water: '',
        syrup: ''
      }
    };
  },

  mounted() {
    /* eslint-disable no-undef */
    google.charts.load('current', {'packages':['corechart']});
    // eslint-disable-next-line no-undef
    google.charts.setOnLoadCallback(this.drawAllCharts);
    window.addEventListener('resize', this.drawAllCharts);
  },
  methods: {
    orderItem(item, quantity) {
        this.stocks[item] += Number(quantity);
        this.drawBarChart();
        alert('주문이 완료되었습니다.');
        this.orderQuantity[item] = '';
    },

    drawAllCharts() {
      this.drawBarChart();
    },
    drawBarChart() {
      const data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['원두', this.stocks.coffee, '#3F1F25'], 
        ['우유', this.stocks.milk, '#EBB9C3'], 
        ['생수', this.stocks.water, '#78FFFF'],
        ['시럽', this.stocks.syrup, 'color: #F7CD4F']
      ]);

    const options = {
    title: "음료 관련 재고현황",
    titleTextStyle: {
        color: '#4a4a4a', // specifying font color
        fontName: 'Arial',
        fontSize: 20, // or use your preferred size
        bold: true // true or false
    },
    bar: {groupWidth: '95%'},
    legend: { position: 'none' },
    hAxis: {
        textStyle: {
        color: '#4a4a4a',
        fontName: 'Arial',
        fontSize: 14
        }
    },
    vAxis: {
        textStyle: {
        color: '#4a4a4a',
        fontName: 'Arial',
        fontSize: 14
        }
    }
    };

      const chart = new google.visualization.BarChart(document.getElementById('barChart'));
      chart.draw(data, options);
    }
  }
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
