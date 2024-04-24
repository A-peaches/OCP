<template>
  <div class="orderState-container my-4">
    <h1>주문 현황</h1>
    <hr />
    <div>
      <!--오늘 주문된게 없으면 이 프로세스는 돌아가지 않음.-->
      <div class="text-center my-5" style="width: 100%; height: auto">
        <!-- 닉네임으로 불러주기~ -->
        <p v-if="progressValue != 100" style="font-size: 16pt">
          ☕ 고객님의 메뉴를 열심히 준비중입니다 !
        </p>
        <p v-if="progressValue == 100" style="font-size: 16pt">
          ☕ 고객님의 메뉴가 준비되었습니다! <br />
          픽업대에서 만나요 !
        </p>

        <img
          :src="currentImage"
          class="my-5"
          style="width: 30%; height: auto"
        />
      </div>
      <div class="progress" style="margin-bottom: 10px">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          :style="{ width: progressValue + '%' }"
          :aria-valuenow="progressValue"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ progressValue }}%
        </div>
      </div>
    </div>

    <!-- 주문 상세에는 최근 주문 내역의 order번호 중 LIMIT 1 하여 불러오기.-->
    <div class="text-center" style="margin-top: 100px">
      <h3 class="my-4">전자 영수증</h3>
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
          <tr v-for="order in orderList" :key="order.orderNo">
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      progressValue: 0, // 초기 프로그레스 바의 값
      progress: {
        0: require("@/assets/making/making1.png"),
        25: require("@/assets/making/making2.png"),
        50: require("@/assets/making/making3.png"),
        75: require("@/assets/making/making4.png"),
        100: require("@/assets/making/making5.png"),
      },
      orderList: [],
      userId: "",
    };
  },
  created() {
    this.userIdLoad();
  },
  mounted() {
    this.checkLogin();
    this.orderLoad();
    const intervalId = setInterval(() => {
      // 프로그레스 바 값을 25%씩 증가시키기
      if (this.progressValue < 100) {
        this.progressValue += 25;
      } else {
        // 프로그레스 바 값이 100%에 도달하면 인터벌 중지
        clearInterval(intervalId);
      }
    }, 3000); // 3초마다 실행
  },
  computed: {
    currentImage() {
      // 프로그레스 바의 값에 따라 이미지 URL 반환
      return this.progress[this.progressValue];
    },
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
        .post("http://localhost:3000/orderState", { userId: userId })
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.data;
            console.log(this.orderList);
          }
        })
        .catch((error) => {
          console.error("Error during login", error);
        });
    },
    formatDate(date) {
      return new Date(date).toLocaleString("ko-KR", { hour12: true });
    },
    formatPrice(price) {
      return `${price.toLocaleString("ko-KR")}원`;
    },
  },
};
</script>
<style>
.orderState-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>