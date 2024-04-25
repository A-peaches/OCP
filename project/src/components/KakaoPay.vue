<template>
    <div>
      <!-- Modal -->
      <div class="modal fade" id="KakaoPayModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true" ref="kakaoPayModal">
        <div class="modal-dialog"> <!-- 모달 사이즈를 large로 설정 -->
          <div class="modal-content" style="height: 80vh;"> <!-- 모달 내용물의 높이 설정 -->
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel">KaKaoPay 결제</h5>
              <button
            type="button"
            class="btn-close"
            @click="closeModal"
            aria-label="Close"
          ></button>  </div>
            <div class="modal-body" style="overflow-y: auto;"> <!-- 스크롤 활성화 -->
              <iframe :src="modalSrc" style="width: 100%; height: 100%; border: none;"></iframe>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="payClose">결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        modalSrc: "https://online-pay.kakao.com/mockup/v1/13daf82238f00ae027af5863b4a3880e6f54dd5c5e665f500014a6b24d8f4578/info" // 원본 링크
      };
    },
    methods: {
      openModal() {
        this.$refs.kakaoPayModal.classList.add('show');
        this.$refs.kakaoPayModal.style.display = 'block';
      },
      closeModal() {
        this.$refs.kakaoPayModal.classList.remove('show');
        this.$refs.kakaoPayModal.style.display = 'none';
      },
      payClose() {
        this.$refs.kakaoPayModal.classList.remove('show');
        this.$refs.kakaoPayModal.style.display = 'none';
        alert('결제가 완료되었습니다!')
      }

    },
  }
  </script>
  