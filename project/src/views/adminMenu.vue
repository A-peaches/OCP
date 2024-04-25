<template>
  <div id="center">
    <div class="container">
      <div class="intro">
        <div style="text-align: left">
          <h2>메뉴 관리</h2>
          <hr />
          <br /><br /><br />
          <table class="table" id="menu-td">
            <thead>
              <tr>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">No</th>
                <th scope="col">상품명</th>
                <th scope="col"></th>
                <!-- 이미지 -->
                <th scope="col">상품설명</th>
                <th scope="col">판매가</th>
                <th scope="col">카테고리</th>
                <th scope="col">필요재고량</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(menu, index) in menus" :key="index">
                <th scope="row">
                  <input
                    type="checkbox"
                    v-model="menu.checked"
                    :value="menu.menuId"
                  />
                </th>
                <th scope="row">{{ menu.menuId }}</th>
                <td colspan="2">
                  <img
                    v-if="menu.menuimg"
                    :src="menu.menuimg"
                    alt="Coffee"
                    id="admin-image"
                  />{{ menu.menuName }}
                </td>
                <td>{{ menu.menuintro }}</td>
                <td>{{ menu.menuPrice }}</td>
                <td>{{ menu.category }}</td>
                <td>
                  원두 {{ menu.beans }}g<br />
                  물 {{ menu.water }}ml<br />
                  우유 {{ menu.milk }}<br />
                  시럽 {{ menu.sugar }}
                </td>
              </tr>
            </tbody>
          </table>
          <div style="display: flex; justify-content: center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div style="display: flex; justify-content: end">
            <div>
              <!-- 모달 버튼 -->
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@fat"
              >
                메뉴추가
              </button>

              <!-- 모달 -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        메뉴추가
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <!-- 텍스트 5개 -->
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"
                          >상품이미지:</label
                        ><br />
                        <input type="file" @change="handleFileChange" />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"
                          >상품명:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="menuName"
                          id="recipient-name"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"
                          >상품설명:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="menuintro"
                          id="recipient-name"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"
                          >판매가:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="menuPrice"
                          id="recipient-name"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"
                          >카테고리:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          v-model="category"
                          id="recipient-name"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"
                          >필요재고량:</label
                        >
                        <div
                          class="mb-3"
                          style="display: flex; align-items: center"
                        >
                          <label for="recipient-name" class="col-form-label"
                            >원두:</label
                          >&nbsp;
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                            v-model="beans"
                            required
                            style="width: 70px"
                          />&nbsp;
                          <label for="recipient-name" class="col-form-label"
                            >물:</label
                          >&nbsp;
                          <input
                            type="text"
                            class="form-control"
                            v-model="water"
                            id="recipient-name"
                            required
                            style="width: 70px"
                          />&nbsp;
                          <label for="recipient-name" class="col-form-label"
                            >우유:</label
                          >&nbsp;
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                            v-model="milk"
                            style="width: 70px"
                            required
                          />&nbsp;
                          <label for="recipient-name" class="col-form-label"
                            >시럽:</label
                          >&nbsp;
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                            v-model="sugar"
                            style="width: 70px"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        닫기
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="addMenu()"
                      >
                        저장
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-danger mx-3"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                삭제
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Delete
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div v-if="!deleteMsg" class="modal-body">
                      정말로 삭제하시겠습니까?
                    </div>
                    <div v-if="deleteMsg" class="modal-body">
                      {{ deleteMsg }}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        되돌아가기
                      </button>
                      <button
                        @click="
                          async () => {
                            //여기서 삭제버튼 눌렀을떄의 동작을 설정
                            this.deleteMsg = '삭제가 완료되었습니다!';
                          }
                        "
                        type="button"
                        id="메롱"
                        class="btn btn-primary"
                        style="background-color: red"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "adminmenuView",
  components: {},

  data() {
    return {
      menuName: "",
      menuId: 0,
      menuPrice: 0,
      menuintro: "",
      category: "",
      beans: 0,
      milk: 0,
      water: 0,
      sugar: 0,
      menuimg: null,
      deleteMsg: "",

      li: ["원두", "시럽", "물", "우유"],
      menus: [],
    };
  },
  created() {
    this.fetchMenu();
  },
  methods: {
    getImageSrc(base64Data) {
      return `data:image/jpeg;base64,${base64Data}`;
    },
    async fetchMenu() {
      try {
        console.log("fetchMenu");
        const response = await axios.get("http://localhost:3000/menu");
        console.log(response.data);
        this.menus = response.data.map((menu) => ({
          ...menu,
          menuimg: this.getImageSrc(menu.menuimg),
        }));
        console.log("Menu fetched successfully");
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    },
    handleFileChange(event) {
      this.menuimg = event.target.files[0];
      return this.menuimg;
    },
    async addMenu() {
      if (
        !this.menuName ||
        !this.menuPrice ||
        !this.menuintro ||
        !this.category ||
        !this.menuimg
      ) {
        alert("모든 값을 입력해주세요.");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("menuimg", this.menuimg);
        formData.append("menuName", this.menuName);
        formData.append("menuPrice", this.menuPrice);
        formData.append("menuintro", this.menuintro);
        formData.append("category", this.category);
        formData.append("beans", this.beans);
        formData.append("water", this.water);
        formData.append("milk", this.milk);
        formData.append("sugar", this.sugar);

        const response = await axios.post(
          "http://localhost:3000/menuinput",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("메뉴 추가 성공:", response.data);
        alert("메뉴가 추가되었습니다!");
        this.menus.push(response.data);

        this.resetForm();
        this.fetchMenu();
      } catch (error) {
        console.error("메뉴 추가 실패:", error);
      }
    },
    resetForm() {
      this.menuName = "";
      this.menuPrice = "";
      this.menuintro = "";
      this.category = "";
      this.beans = 0;
      this.water = 0;
      this.milk = 0;
      this.sugar = 0;
      this.menuimg = "";
    },
  },

  sendSelectedMenus() {
    this.deleteMsg = "삭제가 완료되었습니다.";
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

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 40px 0px 40px;
}
#admin-image {
  width: 75px;
  height: 75px;
  margin-right: 30px;
}
#menu-td {
  vertical-align: middle;
}
#menustock {
  width: 100px;
}
</style>
