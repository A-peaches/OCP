<!-- ModalComponent.vue -->
<template>
  <div class="modal fade" id="FindPW" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">비밀번호 찾기</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3 text-start">
          <input type="password" class="form-control" id="findEmail" placeholder="가입시 입력하셨던 이메일을 입력해주세요.">
          <p class="my-3">
          ＊ 회원가입 시 등록했던 이메일로 임시 비밀번호를 보내드립니다. 
          5~10분 이내에 이메일이 발송됩니다.<br>

         </p>
        </div>

      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-secondary">임시 비밀번호 요청</button>
    </div>
  </div>
</div>
</div>
</template>
