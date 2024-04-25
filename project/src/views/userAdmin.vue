<template>
  <div id="center">
    <div class="container">
      <div class="intro">
        <h1>회원관리</h1>
        <hr />
        <div>
          검색 :
          <select v-model="searchType">
            <option value="userId">ID</option>
            <option value="userName">고객명</option>
            <option value="nickName">닉네임</option>
            <option value="phone">전화번호</option></select
          >&nbsp;
          <input
            type="text"
            v-model="searchQuery"
            placeholder="검색"
            style="height: 24.5px"
          />
        </div>
      </div>
      <div
        style="
          border: 1px gainsboro solid;
          padding: 40px 20px 40px 20px;
          border-radius: 5px;
          margin-bottom: 40px;
        "
      >
        <div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">고객명</th>
                <th scope="col">닉네임</th>
                <th scope="col">전화번호</th>
                <th scope="col">이메일</th>
                <th scope="col">관리자 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in filteredUsers" :key="user.userId">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ user.userId }}</td>
                <td>{{ user.userName }}</td>
                <td>{{ user.nickName }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.is_admin ? "Yes" : "No" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userList: [],
      searchQuery: "",
      searchType: "userId",
    };
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    filteredUsers() {
      return this.userList.filter((user) => {
        return user[this.searchType]
          .toString()
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    async fetchUsers() {
      try {
        const res = await axios.get("http://localhost:3000/getuserlist");
        this.userList = res.data;
      } catch (error) {
        console.error("유저리스트 불러오기 오류", error);
      }
    },
  },
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
</style>
