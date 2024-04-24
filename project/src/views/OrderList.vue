<template>
  <div class="orderState-container my-4">
    <h1>주문 내역</h1>
    <hr />
    <div class="text-center my-4" style="width: 100%; height: auto">
      <div class="my_card_pick_date2">
        <dl
          class="my_card_pick_bg"
          style="display: flex; align-items: center; gap: 20px"
        >
          <dt>기간별</dt>
          <dd style="display: flex; align-items: center; gap: 10px">
            <input id="pickPeriod1" name="pickPeriod" type="radio" value="M" />
            <label for="pickPeriod1">1개월</label>
            <input id="pickPeriod2" name="pickPeriod" type="radio" value="Y" />
            <label for="pickPeriod2">1년</label>
            <input id="pickPeriod3" name="pickPeriod" type="radio" value="P" />
            <label for="pickPeriod3">기간설정</label>
          </dd>
        </dl>
        <dl class="d-flex" style="align-items: center; gap: 20px; flex-grow: 1">
          <dt>날짜입력</dt>
          <dd>
            <label for="startDate">시작 일자 : </label>
            <input type="date" id="startDate" name="startDate" v-model="startDate" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="endDate">종료 일자 : </label>
            <input type="date" id="endDate" name="endDate" v-model="endDate"/>
          </dd>
        </dl>
        <div class="d-flex  align-items-center" style="gap: 20px">
          <dl
            class="d-flex"
            style="align-items: center; gap: 20px; flex-grow: 1"
          >
            <dt>결제수단</dt>
            <dd>
              <div class="select_box" style="margin-top:0px">
                <label class="value" for="myinfo_date01"></label>
                <select
                  class="form-select mb-3"
                  id="myinfo_date01"
                  style="width: 190px; height: 40px"
                >
                  <option value="W">전체보기</option>
                  <option value="S">카드</option>
                  <option value="E">현금</option>
                </select>
              </div>
            </dd>
          </dl>
          <dl
            class="d-flex"
            style="align-items: center; gap: 20px; flex-grow: 1;"
          >
            <dt>거래유형</dt>
            <dd>
              <div class="select_box">
                <label class="value" for="myinfo_date02"></label>
                <select
                  class="form-select mb-3"
                  id="myinfo_date02"
                  style="width: 190px; height: 40px"
                >
                  <option value="W">전체보기</option>
                  <option value="P">결제</option>
                  <option value="R">취소</option>
                </select>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="text-center" style="margin-top: 30px">
        <table class="table table-striped" >
        <thead>
          <tr>
            <th>주문번호</th>
            <th>주문일</th>
            <th>메뉴</th>
            <th>개수</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in filteredOrders" :key="order.orderNo">
            <td>{{ order.orderNo }}</td>
            <td>{{ formatDate(order.orderDate) }}</td>
            <td>{{ order.menuName }}</td>
            <td>{{ order.orderCnt }}</td>
            <td>{{ formatPrice(order.menuPrice) }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      startDate: '',
      endDate: '',
      orderList: [],
      userId: "",
    };
  },
  created() {
    this.userIdLoad();
  },
  mounted() {
    this.orderLoad();
    this.checkLogin();
  },
  computed: {
    filteredOrders() {
    return this.orderList.filter(order => {
      const orderDate = new Date(order.orderDate).toISOString().substring(0, 10);
      return (!this.startDate || orderDate >= this.startDate) && (!this.endDate || orderDate <= this.endDate);
    });
  }
},
  methods: {
    checkLogin() {
      // 로그인 상태 확인
      if (!this.userId) {
        alert('비회원은 주문할 수 없습니다!')
        this.$router.push('/login'); // 로그인 페이지로 리다이렉트
      }
    },
    userIdLoad() {
      this.userId = this.$store.getters.getUserId;
    },
    orderLoad() {
      const userId = this.userId;
      axios
        .post("http://localhost:3000/orderList", { userId: userId })
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.data;
            console.log(this.orderList);
          }
        })
        .catch((error) => {
          console.error("Error during load", error);
        });
    },
    formatDate(date) {
      return new Date(date).toLocaleString("ko-KR", { hour12: true });
    },
    formatPrice(price) {
      return `${price.toLocaleString("ko-KR")}원`;
    },
  },
}
</script>
<style>
.orderState-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>