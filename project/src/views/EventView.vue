<template>
<div class="content2">
    <p class="title">판다와 함께하는 이벤트</p>
    <hr>
    <div class="image-container">
        <img v-for="(image, index) in images" :src="image.src" :alt="image.alt" :key="index" class="rounded-image" @click="openModal(image)">
    </div>

    <!-- 모달 팝업 -->
  <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop> <!-- 이벤트 전파 방지 -->
          <span class="close" @click="closeModal">&times;</span>
          <img :src="selectedImage.src" alt="Selected Image" class="modal-image">
      </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("../assets/event/event1.png"), alt: "Image 1" },
        { src: require("../assets/event/event2.png"), alt: "Image 2" },
        { src: require("../assets/event/event3.png"), alt: "Image 3" }
      ],
      showModal: false,
      selectedImage: null
    };
  },
  methods: {
    openModal(image) {
      console.log("Opening modal with image:", image);
      this.selectedImage = image;
      this.showModal = true;
    },
    closeModal() {
      console.log("Closing modal");
      this.showModal = false;
    }
  }
}
</script>

<style>
.content2 {
    margin-left: 400px;
    margin-right: 400px;
    margin-bottom: 50px;
    overflow-x: hidden; /* 상위 컨테이너에서 수평 스크롤바 숨김 */
}

.title {
    font-size: 40px;
    text-align: left;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
}

.image-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* 이미지 간격 균등 배분 */
  gap: 30px;
  overflow-x: auto; /* 수평 스크롤바 활성화 */
  white-space: nowrap; /* 줄바꿈 방지 */
  padding: 20px;  /* 컨테이너 패딩 추가 */
}

.rounded-image {
  border-radius: 10px;
  width: auto; /* 이미지의 원본 비율 유지 */
  max-width: 300px;
  border: 2px solid #fff; /* 테두리 색상 변경 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* 더 크고 부드러운 그림자 */
  height: auto; /* 이미지 높이 자동 조정 */
}

.rounded-image:hover {
  transform: scale(1.05); /* 이미지를 5% 확대 */
  transition: transform 0.3s ease-in-out;
  cursor: pointer; /* 마우스 오버 시 포인터 모양 변경 */
}

@media (max-width: 768px) {
  .content2 {
    margin-left: 20px;
    margin-right: 20px;
  }
}

/* 팝업관련스타일 */
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.6);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 700px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.modal-image {
    width: 100%;
    height: auto;
}

</style>

