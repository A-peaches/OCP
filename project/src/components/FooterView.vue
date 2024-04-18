<template>
  <footer>
    <div id="footerDiv" style="margin-left: 100px; font-size: 14px;">
        
        <p style="font-size: 18px;">🐼 판다 커피</p>
     
        <div class="mt-4 mb-4">
        <p>상호명 : (주)커피만 판다</p>
        <p>
            <span>대표자명 : 이지훈</span> / 
            <span>사업장 소재지 : 서울특별시 서초대로 74길 33 (서초동, 비트빌) 1층 </span> /
            <span>사업자번호 : 202-40-30409</span>
        </p>
        <p>
            <span>대표전화 : 1588-9999</span> /
            <span>고객문의 : qna@pandacoffee.com 또는 1588-9999</span>
        </p>
        </div>
        <div style="display: inline-block; margin-right: 30px; " id="p1">
            <p >
            <span>© Only Coffee Panda(OCP). All Rights Reserved.</span>
             <span class="float-end" style="margin-right: 80px" ><img src='../assets/insta.png' class="img">
            <img src='../assets/kakao.png' class="img">
            <img src='../assets/youtube.png' class="img"></span>
             </p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name:'FooterView'
}
</script>

<style>
    #footerDiv{
        padding : 5px 10px 5px 10px;
    }    

    .img{
        height: 25px;
        width: 25px;
        margin: 0px 5px;
    }

    #p1{
        width:100%;
    }
</style>