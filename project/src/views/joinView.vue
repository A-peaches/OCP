<template>
  <div class="home">
    <div class="row my-5 justify-content-center" style="width: 100%">
      <div class="col-8 col-md-6 col-lg-5">
        <h1 class="text-center mb-4">회원 가입</h1>
        <div class="card p-3 mb-5">
          <form name="frm">
            <p class="text-center mt-2 mb-4">
              📝 Email 입력 시 각종 이벤트·혜택을 수신받으실 수 있습니다.
            </p>
            <hr />
            <p class="text-first mt-4 mb-2" style="font-size: 13pt">
              &lt; 로그인 정보 &gt;
            </p>
            <div class="input-group mb-3">
              <input
                class="form-control"
                name="userId"
                type="text"
                maxlength="20"
                placeholder="아이디를 입력해 주세요."
                required="required"
              />
              <button
                type="button"
                class="btn btn-secondary w-30"
                id="emailDel"
              >
                <span class="blind">중복 확인</span>
              </button>
            </div>
            <div class="input-group mb-3">
              <input
                class="form-control"
                name="userPw1"
                type="password"
                maxlength="20"
                placeholder="비밀번호를 입력해주세요."
                required="required"
              />
            </div>
            <div class="input-group mb-3">
              <input
                class="form-control"
                name="userPw2"
                type="password"
                maxlength="20"
                placeholder="비밀번호를 다시 입력해주세요."
                required="required"
              />
            </div>
            <p class="text-first mt-5 mb-2" style="font-size: 13pt">
              &lt; 회원 정보 &gt;
            </p>
            <div class="input-group">
              <input
                class="form-control"
                name="userName"
                type="password"
                maxlength="20"
                placeholder="이름을 입력해주세요."
                required="required"
              />
            </div>

            <div class="input-group mt-3">
              <input
                class="form-control"
                name="userNickName"
                type="password"
                maxlength="20"
                placeholder="닉네임을 입력해주세요."
                required="required"
              />
            </div>

            <div class="input-group mt-3">
              <input
                type="email"
                id="email"
                class="form-control"
                name="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                placeholder="이메일을 입력해주세요. 예: user@example.com"
                required
              />
            </div>
            <div class="input-group mt-3 mb-3">
              <input
                type="tel"
                id="phone"
                name="phone"
                class="form-control"
                pattern="^\d{3}-\d{3,4}-\d{4}$"
                placeholder="번호를 입력해주세요. 예: 010-1234-5678"
                required
              />
            </div>

            <div class="text-center">
              <button class="btn btn-secondary w-100">회원 가입</button>
            </div>
          </form>
          <div class="d-flex text-end my-2">
            <router-link
              to="/login"
              class="nav-link loginBtnArea"
              aria-current="page"
              style="text-decoration: underline"
              >로그인</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "joinView",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style>
.loginBtnArea {
  width: 100%;
}
</style>
