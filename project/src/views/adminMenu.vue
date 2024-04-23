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
                    id="menuList"
                    type="checkbox"
                    value="{{ menu.menuId }}"
                  />
                </th>
                <th scope="row">{{ menu.menuId }}</th>
                <td colspan="2">
                  <img
                    src="@/assets/coffeeEX.jpg"
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
                class="btn btn-primary"
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
                        <input type="file" />
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
                            v-model="syrup"
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
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@fat"
              >
                수정
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
                        메뉴수정
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
                        <input type="file" />
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
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"
                          >필요재고량:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                        />
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
                      <button type="button" class="btn btn-primary">
                        저장
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="btn btn-primary"
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
                    <div class="modal-body">정말로 삭제하시겠습니까?</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        되돌아가기
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        style="background-color: red"
                        @click="deleteCheckedItems()"
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
      menuImg: "",

      li: ["원두", "시럽", "물", "우유"],
      menus: [],
    };
  },
  created() {
    this.fetchMenu();
  },
  methods: {
    async fetchMenu() {
      try {
        const response = await axios.get("http://localhost:3000/menu");
        for (let i = 0; i < response.data.length; i++) {
          this.menus[i] = response.data[i];
        }
        console.log("Menu fetched successfully");
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    },
    async addMenu() {
      if (
        !this.menuName ||
        !this.menuPrice ||
        !this.menuintro ||
        !this.category
      ) {
        alert("모든 값을 입력해주세요.");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/menuinput", {
          menuName: this.menuName,
          menuPrice: this.menuPrice,
          menuintro: this.menuintro,
          category: this.category,
          beans: this.beans,
          water: this.water,
          milk: this.milk,
          sugar: this.sugar,
          menuImg: this.menuImg,
        });
        console.log("메뉴 추가 성공:", response.data);
        // 추가 작업 수행 (예: 입력 필드 초기화, 메뉴 목록 새로고침 등)
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
      this.menuImg = "";
    },
  },
  async deleteCheckedItems() {
    // 체크된 항목들의 id 값을 모아둘 배열
    const checkedIds = [];

    // 체크된 항목들의 id 값을 배열에 추가
    this.menuList.forEach((menu) => {
      if (menu.checked) {
        checkedIds.push(menu.menuId);
      }
    });

    // 체크된 항목이 없을 경우, 알림 후 종료
    if (checkedIds.length === 0) {
      alert("삭제할 항목을 선택해주세요.");
      return;
    }

    // 서버로 삭제 요청을 보냄
    try {
      const response = await axios.post("http://localhost:3000/deleteItems", {
        ids: checkedIds,
      });
      console.log("삭제 요청 결과:", response.data);
      // 삭제가 성공적으로 이루어졌을 때 화면을 갱신하거나 추가 작업을 수행할 수 있음
      this.fetchMenus(); // 메뉴 목록 새로고침 등
      alert("선택된 항목이 삭제되었습니다.");
    } catch (error) {
      console.error("삭제 요청 실패:", error);
      alert("선택된 항목을 삭제하는 중에 오류가 발생했습니다.");
    }
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
