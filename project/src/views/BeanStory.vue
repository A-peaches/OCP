<template>
  <div class="container">
    <div class="intro">
      <h1>원두이야기</h1>
      <hr />
    </div>

    <div class="content">
      <div class="storyArea">
        <div class="beanTitle">
          PANDA<br />
          COFFEE STORY<br />
        </div>
        <div class="text-start mt-5">
          <p id="beanText">
            커피 본연의 풍부한 향을 첫 느낌으로, <br />
            고소한 단맛과 구수한 쓴맛. <br />
            깊고 균형 잡힌 향미의 판다 원두<br />
          </p>
        </div>
        <div class="text-start mt-5">
          <p style="font-size: 14pt">
            판다 커피는 브라질 스페셜티 커피 협회(BSCA)를 통해 인증받은<br />
            스페셜티 원두를 각자의 개성에 맞게 블렌딩하여 로스팅 했습니다.<br />
            특별한 당신에게 딱 맞는 판다 커피입니다.
          </p>
          <p style="">
            <img
              src="@/assets/BSCA.png"
              style="width: 100px; height: 45px"
              class="mt-5"
            />
          </p>
        </div>
      </div>
      <div class="storyArea ">
        <img src="@/assets/beanStory.png" class="imgSize" />
      </div>
      </div>
      <div class="intro">
      <h1>판다커피 원두</h1>
      <hr/>
      <div class="beanArea imgLoc ">
        <img src='@/assets/beanInfo.png' class="imgSize"/>
      </div>
      <div style="height: 30%;  margin-top :200px; margin-bottom: 100px;">
        <div class="text-center" style="width: 100%; font-size:17pt ;">
     
        <img src="@/assets/beans.png">   <br>
        <hr style="width:100%;">
        <p class="mt-4">커피 한잔 속에 담긴 수많은 전문가의 노력</p>
        <p>판다 커피가 고객을 위해 지켜온 약속입니다. </p>
        <i class="bi bi-cup-hot-fill" id="cupIcon"></i>
      
        </div>
    </div>
    </div>
  </div>
</template>

  
<style>
.storyArea {
  display: inline-block;
  width: 50%;
  height: auto;
  padding: 10px 5px 10px 5px;
  margin-top: 30px;
  margin-bottom: 70px;
  
}

#cupIcon {
    font-size:27pt;
    color: black;
}

.beanArea {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%; /* 컨테이너 너비를 최대로 설정 */
  padding: 10px 5px 10px 5px;
}

.imgLoc {
display: flex;
  justify-content: center; /* 이미지를 중앙에 위치시키기 */
  align-items: center; /* 이미지를 수직 중앙에 위치시키기 */
  overflow: hidden; /* 컨테이너를 벗어나는 이미지는 숨김 처리 */
}

.beanTitle {
  font-size: 40pt;
  font-family: "Concert One";
  text-align: left;
}

.container {
  text-align: center;
  padding: 0 80px;
}

#beanText {
  font-size: 23px;
  font-family: "MyFont2";
}
.intro {
  padding: 30px; /* 내용의 패딩 조정 */
  text-align: left;
  font-family: 'Myfont2';
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

.text {
  padding: 80px;
  text-align: left;
  font-size: 13pt;
}
.text1 {
  text-align: center;
}
</style>