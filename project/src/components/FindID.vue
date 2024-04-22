<!-- ModalComponent.vue -->
<template>
    <div class="modal fade" id="FindID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">아이디 찾기</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3 text-start">
            <input type="text" class="form-control" id="findPhone" placeholder="가입시 입력하셨던 휴대폰번호를 입력해주세요.">
          </div>
          <div class="mb-3 text-start">
            <input type="password" class="form-control" id="findEmail" placeholder="가입시 입력하셨던 이메일을 입력해주세요.">
      
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-secondary">아이디 조회</button>
      </div>
    </div>
  </div>
</div>
  </template>
