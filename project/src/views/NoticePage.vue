<template>
    <div class="top_img2"></div>
    <div class="content2">
        <p class="title">공지사항</p>
        <hr>

        <!-- 공지사항상세 -->
        <div class="notice_info">
            <div>
                <p class="notice_title">판다커피 신규회원 대상 이벤트 시행 안내</p>
                <p class="notice_subtitle">작성일 : <span>2024.04.22</span></p>
            </div>
            <div class="notice_content">
                <pre>
항상 판다커피를 이용해주시는 고객님께 깊은 감사를 드립니다.\n판다커피 신규회원 가입 대상 이벤트를 시행합니다.\n기존 고객님께서 친구를 데려오시면 쿠폰도 드리니 많은 참여 부탁드립니다 ^^
                </pre>
                <p>항상 판다커피를 이용해주시는 고객님께 깊은 감사를 드립니다.판다커피 신규회원 가입 대상 이벤트를 시행합니다.\n기존 고객님께서 친구를 데려오시면 쿠폰도 드리니 많은 참여 부탁드립니다 ^^</p>
            </div>
        </div>
        <!-- 공지사항상세 -->

        <hr>

        <div class="bottom_button">
            <button type="button" class="btn btn-outline-dark">&lsaquo;</button>&nbsp;
            <button type="button" class="btn btn-outline-dark">목록</button>&nbsp;
            <button type="button" class="btn btn-outline-dark">&rsaquo;</button>
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

.notice_info {
    margin-left: 20px;
}

.notice_title { font-size: 28px; margin-bottom: 5px;}
.notice_subtitle { font-size: 18px; margin-top: 5px; }
.notice_content { margin-top: 30px; }
.bottom_button { text-align: center; }

pre {
    font-family: 'Arial', sans-serif; /* 원하는 폰트 패밀리 설정 */
    font-size: 15px; /* 원하는 폰트 사이즈 설정 */
    color: #333; /* 글자색 설정 */
    line-height: 1.6; /* 줄 간격 설정 */
    white-space: pre-wrap; /* 필요에 따라 줄바꿈 설정 */
}

</style>