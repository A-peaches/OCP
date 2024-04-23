<template>
<div class="event-container">
    <h2 class="event-title">이벤트</h2>
    <p class="event-description">판다커피의 신나는 이벤트</p>
    <div id="eventCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#eventCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/banner_grandopen.png" class="d-block w-100" alt="Grand Opening">
                <div class="carousel-caption">
                    <h3>판다커피 신규 오픈 기념 이벤트</h3>
                    <p>이벤트 기간 : 2024.04.01 ~ 04.30</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/banner_newproduct.png" class="d-block w-100" alt="New Product">
                <div class="carousel-caption">
                    <h3>신메뉴 퍼랭아이스티 시음 행사</h3>
                    <p>5월 첫째주 퍼랭 아이스티 한잔씩 무료로 드려요</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/banner_event.png" class="d-block w-100" alt="Membership Event">
                <div class="carousel-caption">
                    <h3>회원등록하고 귀여운 텀블러 받아가요</h3>
                    <p>매주 100명에게 판다 텀블러 쏩니당~!</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</div>
</template>
<style>
.event-container {
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 50px;
}

.event-title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 10px;
}

.event-description {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
}

.carousel-caption h3 {
    font-size: 24px;
    font-weight: bold;
    color: white;
}

.carousel-caption p {
    font-size: 16px;
    color: white;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
    background-color: black; /* More visible */
}

.carousel-indicators button {
    background-color: black; /* More visible */
}

.carousel-item {
    text-align: center;
}
</style>