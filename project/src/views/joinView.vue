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
                v-model="userId"
                type="text"
                maxlength="20"
                placeholder="아이디를 입력해 주세요."
                required="required"
              />
              <button
                type="button"
                class="btn btn-secondary w-30"
                id="emailDel"
                @click="checkUserId"
              >
                중복 확인
              </button>
            </div>
            <div class="input-group mb-3">
              <input
                class="form-control"
                v-model="userPw"
                type="password"
                maxlength="20"
                placeholder="비밀번호를 입력해주세요."
                required="required"
              />
            </div>
            <div class="input-group mb-3">
              <input
                class="form-control"
                v-model="userPw2"
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
                v-model="userName"
                type="text"
                maxlength="20"
                placeholder="이름을 입력해주세요."
                required="required"
              />
            </div>

            <div class="input-group mt-3">
              <input
                class="form-control"
                v-model="userNickName"
                type="text"
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
                v-model="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                placeholder="이메일을 입력해주세요. 예: user@example.com"
                required
              />
            </div>
            <div class="input-group mt-3 mb-3">
              <input
                type="tel"
                id="phone"
                v-model="phone"
                class="form-control"
                pattern="^\d{3}-\d{3,4}-\d{4}$"
                placeholder = "번호를 입력해주세요. 예: 010-1234-5678"
                required
              />
            </div>

            <div class="text-center">
              <button class="btn btn-secondary w-100" @click="signIn">회원 가입</button>
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
import axios from 'axios';

export default {
  name: "joinView",
  data() {
    return {
      userId: '',
      userPw: '',
      userPw2: '',
      userName: '',
      userNickName: '',
      email: '',
      phone: '',
      isInput: false, //필수입력체크
      isCheck: 0 //id중복체크
      
    };
  },
  components: {},
  methods: {
    checkUserId() {
      // ID 중복 확인 요청
      axios.get(`http://localhost:3000/join/${this.userId}`)
        .then(response => {
          if (response.data.isAvailable) {
            alert('사용 가능한 아이디입니다.');
            this.isCheck = 1;
          } else {
            alert('이미 사용 중인 아이디입니다.');
            this.userId = '';
            this.isCheck = 2;
          }
        })
        .catch(error => {
          console.error('중복 확인 중 오류 발생:', error);
        });
    },
    checkInput() {
      if (
        this.userId == '' || 
        this.userPw == '' || 
        this.userName == '' ||
        this.userNickName == '' || 
        this.email == '' || 
        this.phone == ''
        ) {
        this.isInput = false;
      } else {
        this.isInput = true;
      }
    },

    signIn(event) {
      event.preventDefault();
      this.checkInput();
      if(!this.isInput) {
        alert("입력항목을 빠짐없이 기입해주세요.");
        return;
      }

      if (this.isCheck == 0) {
        alert("ID 중복체크를 진행해주세요.");
        return;
      } 

      //회원가입로직진행
        let obj = {};
        obj.userId = this.userId;
        obj.userPw = this.userPw;
        obj.userName = this.userName;
        obj.userNickName = this.userNickName;
        obj.email = this.email;
        obj.phone = this.phone;

      axios.post("http://localhost:3000/join/signin", obj)
      .then(res => {
        console.log(res.data);
      }); 

      //회원가입로직진행


    },

  }
};
</script>
  
<style>
.loginBtnArea {
  width: 100%;
}
</style>