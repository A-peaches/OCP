
<template>
  <div class="notice_write">
    <h1>이벤트 관리</h1>
    <hr>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <div class="post-content">
          <span class="post-title">{{ post.title }}</span>
          <span class="post-image">{{ post.imgUrl }}</span>
          <button @click="deletePost(index)">삭제</button>
        </div>
      </li>
    </ul>
    <div class="event_add">
        <div class="event_add_content">
          <span class="event_add_title">이벤트 추가:</span>
          <input type="file" @change="handleFileUpload" ref="fileInput">
          <span class="file_path" v-if="uploadedFileName">{{ uploadedFileName }}</span>
          <button class="button-add" @click="addPost">게시글 추가</button>
        </div>
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            posts: [
                { title: '판다커피 그랜드 오픈 이벤트 ~~!!!', imgUrl: '../assets/event/event1.png'},
                { title: '판다커피 X 카카오톡 이벤트', imgUrl: '../assets/event/event1.png' },
                { title: '판다커피와 현대카드 결제하면 이벤트 대박~', imgUrl: '../assets/event/event1.png' }
            ],
            uploadedFileName: null
        };
    },
    methods: {
        deletePost(index) {
            this.posts.splice(index, 1);
        },
        addPost() {
            const newPost = { title: '새 게시글', imgUrl: this.uploadedFileName };
            this.posts.push(newPost);
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            this.uploadedFileName = file.name; // 파일 이름 저장
            this.uploadFile(file);
        },
        uploadFile(file) {
            console.log('File uploaded:', file.name);
        }
    }
};
</script>



<style scoped>
.post-title {
  flex: 2; /* 제목에 더 많은 공간 할당 */
}

.post-image {
  flex: 1; /* 이미지 URL에 적당한 공간 할당 */
  white-space: nowrap; /* URL을 한 줄에 유지 */
}


.post-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.notice_write {
  margin: 30px auto;
  padding: 20px;
  max-width: 1200px;
}

ul {
  list-style: none;
  margin-top: 20px;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc; /* 각 게시글 아이템 하단에 구분선 추가 */
}

button {
  margin-left: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

input[type="file"] {
  flex: 3;
}

.event_add {
  background-color: #f8f9fa; /* 배경색 설정 */
  border: 2px solid #dee2e6; /* 테두리 설정 */
  padding: 20px; /* 패딩 설정 */
  margin-top: 30px; /* 상단 여백 */
  border-radius: 8px; /* 모서리 둥글게 */
}

.event_add span {
  font-size: 16px; /* 폰트 사이즈 설정 */
  color: #333; /* 폰트 색상 설정 */
}

input[type="file"] {
  margin: 0 15px 0 5px;
  cursor: pointer; /* 커서 포인터 설정 */
}
.event_add_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.event_add_title {
  flex: 1;
  font-weight: bold;
  margin-right: 10px;
}

.file_path {
  flex: 2;
  margin-right: 10px;
  color: #666;
}
.button-add {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  flex: 0 0 150px;
}

.button-add:hover {
  background-color: #218838; /* 호버 시 버튼 색상 변경 */
}

.post-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>