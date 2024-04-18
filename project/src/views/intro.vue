<template>
  <div class="container">
    <div class="intro">
      <h1>판다커피 소개</h1>
      <hr />
    </div>

    <div class="content">
      <div class="item">
        <img src="@/assets/it.png" class="image float-end" />
        <div class="text">
          <h2>IT & EAT</h2>
          <br />
          <p>판다커피는 잇(IT)과 잇(EAT)의</p>
          <p>혁신적인 만남을 통해 탄생했습니다.</p>
          <p>우리의 꿈은 단순한 기술과 카페의 접점을 넘어서</p>
          <p>인간의 궁극적 갈등을 해결하는 것입니다.</p>
        </div>
      </div>

      <div class="item" style="justify-content: end">
        <div class="text">
          <h2>전문화된 커피전문점</h2>
          <br />
          <p>"커피만 판다"를 모티브로</p>
          <p>커피에만 집중하여 맛과 향을 향상시키고</p>
          <p>고객들에게 최상의 커피를 제공하여</p>
          <p>세상을 바꾸는 커피를 목표로 하고 있습니다.</p>
        </div>
        <img src="@/assets/cafe.png" class="image" />
      </div>
      <div class="item">
        <img src="@/assets/partner.jpg" class="image" />
        <div class="text">
          <h2>평생커피파트너</h2>
          <br />
          <p>고객과 시장에서 인정받는 커피 전문가 집단을 지향하여</p>
          <p>끊임없는 도전을 통해 혁신을 추구하여</p>
          <p>치열한 경쟁속에서 차별화된 서비스와 커피로</p>
          <p>커피니즈를 충족시키는 파트너가 되겠습니다.</p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="mt-3 text1">
      <h2 style="font-weight: bold">COLOR</h2>
      <br />
      <div>
        <p>
          판다커피의 브랜드 컬러인 BLACK & WHITE은 편안함과 부드러움을 대표하는
          색입니다.
        </p>
        <p>맛있는 커피를 통해 고객들에게 만족과 행복감을 주고</p>
        <p>
          바쁜 일상 속에서 잠시 쉬어 갈 수 있는 장소가 되겠다는 브랜드 정체성을
          컬러로 표현했습니다.
        </p>
      </div>
    </div>
    <div><img src="@/assets/blackwhite.png" /></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.container {
  text-align: center;
  padding: 0 80px;
}

.intro {
  padding: 30px; /* 내용의 패딩 조정 */
  text-align: left;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 40px 0px 40px;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
}

.image {
  width: 430px;
  height: 250px;
  border-radius: 10px;
}

.text {
  padding: 80px;
  text-align: left;
  font-size: 13pt;
}
.text1 {
  text-align: center;
}
</style>
