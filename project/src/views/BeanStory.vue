<template>
  <div class="container">
    <div class="intro">
      <h1>원두이야기</h1>
      <hr />
    </div>

    <div class="content">
        <div class="div">안녕</div>
        <div class="div">
          <img src="../assets/beanStory.png">
        </div>
    </div>
  </div>
</template>
  
<script>

export default {
  data() {
    return {
      
    };
  },

};
</script>
  
  <style>


.div {
  border: 1px solid pink;
  display: inline-block;
  width: 50%;
  height: auto;
}

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