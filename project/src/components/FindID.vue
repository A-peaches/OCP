<template>
  <div class="modal fade" id="FindID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">아이디 찾기</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form v-if="!result">
            <div class="mb-3 text-start">
              <input v-model="userPhone" type="text" class="form-control" id="findPhone" placeholder="가입시 입력하셨던 휴대폰번호를 입력해주세요.">
            </div>
            <div class="input-group mt-3">
              <input v-model="userEmail" type="text" class="form-control" id="findEmail" placeholder="가입시 입력하셨던 이메일을 입력해주세요." />
            </div>
          </form>
          <div v-else>
            <p>{{ resultMessage }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button type="button" v-if="!result" class="btn btn-secondary" @click="findId">아이디 조회</button>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        userPhone : '',
        userEmail : '',
        result : ''
      }
    },
    methods: {
      findId() {
  
      const inputData = {
        inputPhone: this.userPhone,
        inputEmail: this.userEmail,
      };
      axios
        .post("http://localhost:3000/findId", inputData)
        .then(res => {
          if (res.data.success) {
            this.result = res.data.data;
            console.log(this.result);
            this.resultMessage = `회원님의 아이디는: ${this.result} 입니다.`;
          } else {
            //등록된 회원정보가 없습니다.
            this.result = 'None';
            this.resultMessage = '등록된 회원 정보가 없습니다.';
            this.userPhone = '';
            this.userEmail = '';
          }
        })
        .catch((error) => {
          console.error("Error during FindID", error);
          this.resultMessage = '조회 중 오류가 발생했습니다.';
        });
    }
    },
    mounted() {
      let modal = document.getElementById('FindID');
      modal.addEventListener('hidden.bs.modal', () => {
      this.result = '';
      this.userPhone = '';
      this.userEmail = '';
    });
    },
    computed :{
    }
  }
  </script>
