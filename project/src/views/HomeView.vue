<template>
  <div class="home">
    <img src="@/assets/home_bg2.png" alt="Coffee Shop" class="main-image">
    <div class="welcome-message">Take a coffee with panda</div>  
    <img src="@/assets/home_bg_panda.png" alt="Additional Image" class="additional-image">
  </div>
</template>


<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative; /* 이 부분이 중요 */
  min-height: 100vh; /* 화면 전체 높이를 채우도록 설정 */
}

.main-image {
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  object-fit: cover;
}

.welcome-message {
  position: absolute;
  bottom: 87%;  /* 원하는 위치 조정 가능 */
  left: 50%;
  transform: translateX(-50%);  /* 중앙 정렬 */
  font-size: 2.5em;  /* 글자 크기 조정 */
  font-weight: bold;
  color: black;  /* 글자 색상 */
  opacity: 0;
  animation: slideIn 1.5s ease-out forwards;  /* 애니메이션 효과 적용 */
  font-family: "Noto Serif KR";
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(35%);
  }
}

.additional-image {
  position: absolute;
  width: 500px;
  height: auto;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  animation: slideInFromRight 3s forwards ease-out;  /* 애니메이션 실행 */
  animation-delay: 2s;
}

@keyframes slideIn {
  0% {
    transform: translate3d(-50%, 50px, 0);  /* 시작 위치 조정 */
    opacity: 0;
  }
  100% {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
}
</style>