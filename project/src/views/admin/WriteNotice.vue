<template>
    <div class="notice_write">
        <h1>공지사항 작성</h1>
        <hr>
        <form @submit.prevent="submitNotice">
            <div>
                <label for="type">종류:</label>
                <select id="type" v-model="notice.type">
                    <option value="notice">공지</option>
                    <option value="event">이벤트</option>
                    <option value="discount">할인안내</option>
                </select>
            </div>
            <div>
                <label for="title">제목:</label>
                <input type="text" id="title" v-model="notice.title">
            </div>
            <div>
                <label for="content">내용:</label>
                <textarea id="content" v-model="notice.content"></textarea>
            </div>
            <div class="btn_area">
                <button type="button" @click="cancelNotice">취소</button>
                <button type="submit">작성</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notice: {
                title: '',
                content: '',
                type: 'notice'  // 기본값을 '공지'로 설정
            }
        };
    },
    methods: {
        submitNotice() {
            // 여기에 공지사항을 서버로 전송하는 로직을 추가
            console.log('공지사항 제출:', this.notice);
            alert('공지사항이 작성되었습니다.');
            // 필요한 경우 폼 초기화
            this.resetForm();
        },
        cancelNotice() {
            // 폼 내용을 초기화
            this.resetForm();
        },
        resetForm() {
            this.notice.title = '';
            this.notice.content = '';
            this.notice.type = 'notice';
        }
    }
};
</script>

<style scoped>
.notice_write {
  margin: 30px auto;
  padding: 20px;
  max-width: 1200px;
}
input[type="text"], textarea, select {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px; /* 기본 글씨 크기 설정 */
}
input[type="text"]#title {
  font-size: 14px; /* 제목 필드의 글씨 크기를 14px로 조정 */
}
textarea {
  height: 150px;
  resize: none; /* 사용자가 크기 조정을 못하게 함 */
}
button {
  height: 40px;
  background-color: #79967a;
  color: white;
  padding: 0px 20px;
  margin: 8px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
.btn_area {
    text-align: center;
}
</style>