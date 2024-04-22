<template>
  <div class="orderState-container my-4">
    <h1>주문 현황</h1>
    <hr />
      <div>
        <!--오늘 주문된게 없으면 이 프로세스는 돌아가지 않음.-->
    <div class="text-center my-5" style="width:100%; height:auto;">
        <!-- 닉네임으로 불러주기~ -->
        <p v-if="progressValue != 100" style="font-size:16pt">☕  고객님의 메뉴를 열심히 준비중입니다 ! </p>
        <p v-if="progressValue == 100" style="font-size:16pt">☕  고객님의 메뉴가 준비되었습니다! <br> 픽업대에서 만나요 !  </p>
  
        <img :src="currentImage" class="my-5" style="width:30%; height:auto;"/>
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
    <div class="text-center" style="margin-top: 100px;">
        <h3 class="my-4"> 전자 영수증 </h3>
    <table class="table table-striped">
        <tr>
            <td>주문번호</td>
            <td>주문일</td>
            <td>메뉴</td>
            <td>개수</td>
            <td>가격</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2024-04-22 PM 07:31</td>
            <td>판다리카노</td>
            <td>1 oz</td>
            <td>2,500원</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2024-04-21 AM 10 :12</td>
            <td>판다라떼</td>
            <td>1 oz</td>
            <td>3,000원</td>
        </tr>
        <tr>
            <td>3</td>
            <td>2024-04-22 PM 07:31</td>
            <td>판다프레소</td>
            <td>1 oz</td>
            <td>2,000원</td>
        </tr>
    </table>
    </div>
  </div>
</template>

<script>
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
    };
  },
  mounted() {
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
};
</script>
<style>
.orderState-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>