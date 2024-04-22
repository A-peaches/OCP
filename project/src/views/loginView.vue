<template>
  <div class="home">
    <div class="row my-5 justify-content-center" style="width: 100%">
      <div class="col-8 col-md-6 col-lg-5">
        <h1 class="text-center my-3 mb-4">로그인</h1>
        <div class="card p-3 mb-5">
          <form name="frm">
            <p class="text-center mt-2 mb-4">
              🎉 Welcome! 판다 커피에 오신 것을 환영합니다.
            </p>
            <hr />
            <div class="input-group mb-3">
              <input
                class="form-control"
                name="userId"
                type="text"
                maxlength="20"
                placeholder="아이디를 입력해 주세요."
                required="required"
              />
            </div>
            <div class="input-group mb-3">
              <input
                class="form-control"
                name="userPw"
                type="password"
                maxlength="20"
                placeholder="비밀번호를 입력해주세요."
                required="required"
              />
            </div>
            <div class="text-center">
              <button class="btn btn-secondary w-100">로그인</button>
              <button @click="loginWithKakao"  class="btn btn-secondary w-100 mt-2">
                카카오로 로그인하기</button>

            </div>
          </form>
          <div class="my-3">
            <p>
              ＊ 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이
              있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다. <br>
              ＊ 판다 커피의 공식 홈페이지는 Internet Explorer 9.0 이상,
              Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
            </p>
          </div>
          <div class="d-flex text-center" >
            <router-link
              to="/join"
              class="nav-link loginBtnArea"
              aria-current="page"
              style="text-decoration: underline"
              >회원 가입</router-link
            > | 
            <button data-bs-toggle="modal" data-bs-target="#FindID"  style="text-decoration: underline;"
            class="nav-link loginBtnArea">아이디 찾기</button>|
            <FindID/>
            <button  style="text-decoration: underline;"
            class="nav-link loginBtnArea" data-bs-toggle="modal" data-bs-target="#FindPW">비밀번호 찾기</button>
            <FindPW/>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FindID from '@/components/FindID.vue'
  import FindPW from '@/components/FindPW.vue'
  export default {

  name: "loginView",
  components: {
    FindID,FindPW
  },
  methods: {
  loginWithKakao() {
    Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);

        // 토큰을 이용해 사용자 정보 요청
        Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            console.log(res);
            // 여기에서 사용자 정보를 받아와서 필요한 로직 수행
          },
          fail: (error) => {
            console.error(error);
          }
        });
      },
      fail: (err) => {
        console.error(err);
      }
    });
  }
}
};
</script>

<style>
 .loginBtnArea{
  width: 100%;
 }
</style>