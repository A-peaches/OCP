<template>
    <div class="top_img2"></div>
  <div class="content2">
    <p class="title">공지사항</p>
    <p class="txt_sub">판다커피의 새소식을 확인해보세요.</p>
    <hr>
    <table class="table" style="margin-top: 50px;">
        <colgroup>
            <col style="width:20%">
            <col style="width:60%">
            <col style="width:20%">
        </colgroup>
        <thead>
            <tr>
            <th scope="col">순번</th>
            <th scope="col">제목</th>
            <th scope="col">등록자</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr v-for="notice in notices" :key="notice.id">
                <th scope="row">{{ notice.noticeId }}</th>
                <td>{{ notice.title }}</td>
                <td>관리자</td>
            </tr>
        </tbody>
        </table>
        <!-- <div class="notice_pagenav">
            <nav aria-label="Page navigation example">
                <ul class="pagination" style="color:black;">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            notices: []
        };
    },
    created() {
        this.fetchNotices();
    },
    methods: {
        async fetchNotices() {
        axios
        .get("http://localhost:3000/noticelist")
        .then((res) => {
            this.notices = res.data;
        })
        .catch((error) => {
          console.error("Error during menu", error);
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
.table th,
.table td {
    text-align: center;
}
.notice_pagenav .pagination {
    display: flex;
    justify-content: center;  /* Flexbox를 사용하여 내용을 가로 방향 중앙에 배치 */
    list-style: none;         /* 기본 리스트 스타일 제거 */
}
</style>