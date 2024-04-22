<template>
  <div class="content2">
    <p class="title">이벤트</p>
    <p class="txt_sub">판다커피의 신나는 이벤트</p>
    <hr>
    <!-- 슬라이드 -->
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/banner_grandopen.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5 class="event_title">판다커피 신규 오픈 기념 이벤트</h5>
            <p class="event_subtitle">이벤트 기간 : 2024.04.01 ~ 04.30</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/banner_newproduct.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5 class="event_title">신메뉴 퍼랭아이스티 시음 행사</h5>
            <p class="event_subtitle">5월 첫째주 퍼랭 아이스티 한잔씩 무료로 드려요</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/banner_event.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5 class="event_title">회원등록하고 귀여운 텀블러 받아가요</h5>
            <p class="event_subtitle">매주 100명에게 판다 텀블러 쏩니당~!</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


  </div>
</template>
<style>
.top_img2 {
  background-image: url('../assets/noitce_top.png');
  width: 100%;
  height: 250px;
}
.content2 {
    margin-left: 400px;
    margin-right: 400px;
    margin-bottom: 50px;
}
.title {
    font-size: 40px;
    text-align: left;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
}
.txt_sub {
    font-size: 20px;
    text-align: left;
    margin-left: 20px;
    margin-bottom: 10px;
}
.table th,
.table td {
    text-align: center;
}
.notice_pagenav .pagination {
    display: flex;
    justify-content: center;  /* Flexbox를 사용하여 내용을 가로 방향 중앙에 배치 */
    list-style: none;         /* 기본 리스트 스타일 제거 */
}

.event_title {
    color: white; /* 글자 색상 설정 */
    font-size: 50px; /* 글자 크기 설정 */
    font-weight: bold;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; /* 텍스트 그림자 설정 */
}

.event_subtitle {
    color: white; /* 글자 색상 설정 */
    font-size: 20px; /* 글자 크기 설정 */
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; /* 텍스트 그림자 설정 */
}
</style>