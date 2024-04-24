<template>
  <div id="center">
    <div class="container" style="display: flex; justify-content: center">
      <div class="intro" style="width: 100%">
        <h1>내 정보</h1>
        <hr />
        <div style="margin: 100px 0 100px">
          <div id="divadmin-user">
            <h4 style="text-align: left">회원정보</h4>
            <hr />
            <img src="@/assets/userpanda.png" style="width: 200px" />

            <br /><br />
            <div style="display: flex; justify-content: center">
              <table class="table">
                <tr>
                  <td scope="col">회원이름</td>
                  <td scope="col" colspan="3">회원이름</td>
                </tr>
                <tr>
                  <td scope="col">ID</td>
                  <td scope="col" colspan="3">ID</td>
                </tr>
                <tr>
                  <td scope="col">닉네임</td>
                  <td scope="col" colspan="3">닉네임</td>
                </tr>
                <tr>
                  <td scope="col">연락처</td>
                  <td scope="col" colspan="3">연락처</td>
                </tr>
                <tr>
                  <td scope="col">이메일</td>
                  <td scope="col" colspan="3">aaa@naver.com</td>
                </tr>
                <tr>
                  <td scope="col">나의 등급</td>
                  <td scope="col" colspan="3">푸바오등급</td>
                </tr>
                <tr>
                  <td scope="col">STAR</td>
                  <td scope="col" colspan="3">⭐ x 10</td>
                </tr>
                <tr>
                  <td scope="col">내 쿠폰</td>
                  <td scope="col" colspan="3">10개</td>
                </tr>
              </table>
            </div>
            <div
              style="
                text-align: center;
                font-size: 13pt;
                display: flex;
                justify-content: center;
              "
            >
              <!-- <span style="padding: 0 30px; text-decoration: underline">
                <router-link to="/orderState" class="nav-link"
                  >비밀번호 변경</router-link
                >
              </span>
              <span>|</span> -->
              <span style="padding: 0 30px; text-decoration: underline">
                <router-link to="/orderState" class="nav-link"
                  >주문현황</router-link
                >
              </span>
              <span>|</span>
              <span style="padding: 0 30px; text-decoration: underline">
                <router-link to="/orderList" class="nav-link"
                  >주문내역</router-link
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adminenuView",
  components: {},
};
</script>

<style>
#divadmin-user {
  border: 1px black solid;
  border-radius: 20px;
  display: inline-block;
  width: 100%;
  margin-right: 50px;
  text-align: center;
  padding: 30px 40px 30px 40px;
}
.container {
  text-align: center;
  padding: 0 80px;
}

.intro {
  padding: 30px; /* 내용의 패딩 조정 */
  text-align: left;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 40px 0px 40px;
}
</style>
