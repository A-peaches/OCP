<template>
    <div class="top_img2"></div>
    <div class="content2">
        <p class="title">공지사항</p>
        <hr>

        <!-- 공지사항상세 -->
        <div class="notice_info">
            <div>
                <p class="notice_title">
                     {{ noticeTitle }}
                </p>
            </div>
            <div class="notice_content">
                <p>
                    {{ noticeContent }}
                </p>
            </div>
        </div>
        <!-- 공지사항상세 -->

        <hr>

        <div class="bottom_button">
            <button type="button" class="btn btn-outline-dark" @click="this.$router.push('/notice');">목록</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            noticeId: '',
            noticeTitle: '',
            noticeContent: '',
            notice: {}
        };
    },
    mounted() {
        this.fetchNoticeDetail();
    },
    methods: {
        fetchNoticeDetail() {
            let noticeId = this.$route.params.id; // 라우트 파라미터에서 공지 ID를 가져옵니다.
            axios.post("http://localhost:3000/noticedetail", { noticeId: noticeId })
            .then(res => {
                console.log(res.data);
                this.notice = res.data;

                this.noticeTitle = this.notice[0].title;
                this.noticeContent = this.notice[0].content;
                console.log(this.noticeTitle);
            }); 
        }
    }
};
</script>

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