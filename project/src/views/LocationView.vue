<template>
  <div class="top_img"></div>
  <div class="location">
    <p class="title">오시는 길</p>
    <p class="txt_sub">서울특별시 서초구 서초대로74길33 비트빌 3층</p>
    <hr>
    <img class="map" src="../assets/map.png" alt="오시는길">
    <hr>
    <p class="txt_sub">
        <b>지하철</b> : <br/>지하철 2호선/신분당선 강남역 5번 출구 도보 3분
    </p>
    <p class="txt_sub">
        <b>버스</b> : <br/>지하철 2호선/신분당선 강남역 5번 출구 도보 3분<br/>
        지선 - 3420, 4424, 5412<br/>
        간선 - 140, 144, 145, 340, 363, 402, 420, 470, 471<br/>
        광역 - 1550, 9100, 9200, 9300, 9400, 9404, 9408, 9409, 9410, 9411, 9412, 9503, 9700
    </p>
  </div>
</template>
<style>
.top_img {
  background-image: url('../assets/top_img.png');
  width: 100%;
  height: 300px;
}
.location {
    margin-left: 20px;
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
.map {
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  width: 60%;
  height: auto;
}
</style>