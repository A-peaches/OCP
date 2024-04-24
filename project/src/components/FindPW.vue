<!-- ModalComponent.vue -->
<template>
  <div
    class="modal fade"
    id="FindPW"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">비밀번호 찾기</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form v-if="!result">
            <div class="mb-3 text-start">
              <input
                type="text"
                v-model="inputEmail"
                class="form-control"
                id="findEmail"
                placeholder="가입시 입력하셨던 이메일을 입력해주세요."
              />
              <p class="my-3">
                ＊ 회원가입 시 등록했던 이메일로 임시 비밀번호를 보내드립니다.
                5~10분 이내에 이메일이 발송됩니다.<br />
              </p>
            </div>
          </form>
          <div v-else>
            <div v-html="result"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-secondary" @click="findPw">
            임시 비밀번호 요청
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: "",
      inputEmail: "",
    };
  },
  methods: {
    findPw() {
      this.result =
        "이메일 발송이 완료되었습니다. <br> 이메일을 잘못 입력해주신 경우 발송이 안될 수 있으며,<br> 10분이상 메일 수신이 안될경우 관리자에게 문의하여 주십시오.";
    },
  },
  mounted() {
    let modal = document.getElementById("FindPW");
    modal.addEventListener("hidden.bs.modal", () => {
      this.result = "";
      this.inputEmail = "";
    });
  },
};
</script>