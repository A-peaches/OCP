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
            <tr v-for="notice in notices" :key="notice.id" @click="() => $router.push(`/notice/${notice.noticeId}`)">
                <th scope="row">{{ notice.noticeId }}</th>
                <td>{{ notice.title }}</td>
                <td>관리자</td>
            </tr>
        </tbody>
        </table>
        <!-- 페이지네이션 -->
        <div class="notice_pagenav">
            <nav aria-label="Page navigation example">
                <ul class="pagination" style="color:black;">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <a class="page-link" href="#" @click="setPage(currentPage - 1)">Previous</a>
                    </li>
                    <li class="page-item" v-for="page in totalPages" :class="{ active: page === currentPage }" :key="page">
                        <a class="page-link" href="#" @click="setPage(page)">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <a class="page-link" href="#" @click="setPage(currentPage + 1)">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- 페이지네이션 -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            allNotices: [],  // 모든 공지를 저장하는 배열
            notices: [],     // 현재 페이지에 표시할 공지 배열
            currentPage: 1,  // 현재 페이지 번호
            pageSize: 10     // 페이지당 공지 수
        };
    },
    created() {
        this.fetchNotices();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.allNotices.length / this.pageSize);
        }
    },
    methods: {
        async fetchNotices() {
            try {
                const res = await axios.get("http://localhost:3000/noticelist");
                this.allNotices = res.data;
                this.setPage(this.currentPage);
            } catch (error) {
                console.error("일시적인 오류가 발생했습니다.", error);
            }
        },
        setPage(pageNum) {
            const startIndex = (pageNum - 1) * this.pageSize;
            const endIndex = pageNum * this.pageSize;
            this.notices = this.allNotices.slice(startIndex, endIndex);
            this.currentPage = pageNum;
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
.table tr {
    cursor: pointer; /* 마우스를 올렸을 때 커서를 포인터로 변경 */
    transition: background-color 0.3s ease; /* 부드러운 배경색 변화 효과 */
}

.table tr:hover {
    background-color: #f5f5f5; /* 마우스 오버 시 배경색 변경 */
    color: #333; /* 텍스트 색상 변경 (선택적) */
}
</style>