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
            <input type="date" id="startDate" name="startDate" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="endDate">종료 일자 : </label>
            <input type="date" id="endDate" name="endDate" />
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
  </div>
</template>
  
  <script>
export default {
  data() {
    return {};
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