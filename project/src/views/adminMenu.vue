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
                <th scope="col">
                  필요재고량
                  <select>
                    <option v-for="i in li" :key="i">{{ i }}</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input type="checkbox" /></th>
                <th scope="row">1</th>
                <td colspan="2">
                  <img
                    src="@/assets/coffeeEX.jpg"
                    alt="Coffee"
                    id="admin-image"
                  />판다라떼
                </td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" /></th>
                <th scope="row">2</th>
                <td colspan="2">
                  <img
                    src="@/assets/coffeeEX.jpg"
                    alt="Coffee"
                    id="admin-image"
                  />판다라떼
                </td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" /></th>
                <th scope="row">3</th>
                <td colspan="2">
                  <img
                    src="@/assets/coffeeEX.jpg"
                    alt="Coffee"
                    id="admin-image"
                  />판다라떼
                </td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>Otto1</td>
                <td>@mdo</td>
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
export default {
  name: "adminmenuView",
  components: {},
  data() {
    return {
      li: ["원두", "시럽", "물", "우유"],
    };
  },
  methods: {
    changeHeartIconClass() {
      if (this.heartIconClass == "bi bi-heart") {
        this.heartIconClass = "bi bi-heart-fill";
      } else {
        this.heartIconClass = "bi bi-heart";
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
</style>
