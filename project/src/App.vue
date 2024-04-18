<template>
  <div
    id="header"
    class="sticky-top"
    style="
      background-color: rgba(243, 228, 189, 0.125);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    "
  >
    <ul class="nav justify-content-center">
      <nav
        class="navbar navbar-expand-lg bg-body-white"
        style="padding: 0px 50px"
      >
        <div class="container-fluid">
          <router-link to="/" class="nav-link" aria-current="page" style="h">
            <p id="title">
              <img src="./assets/panda.png" id="titleLogo" />
              Panda Coffee
            </p>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul class="nav nav-underline">
                <li class="nav-item">
                  <router-link to="/intro" class="nav-link" aria-current="page"
                    >소개</router-link
                  >
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    >메뉴</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item">
                        <router-link to="/about" class="nav-link"
                          >Best메뉴</router-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/allmenu" class="nav-link"
                          >전체메뉴</router-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/bean" class="nav-link"
                          >원두이야기</router-link
                        ></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    >주문</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/about" class="nav-link"
                          >장바구니</router-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/about" class="nav-link"
                          >주문현황</router-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/about" class="nav-link"
                          >주문내역</router-link
                        ></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link to="/location" class="nav-link" aria-current="page">오시는 길</router-link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    >소식/문의</a
                  >
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/notice" class="nav-link"
                          >공지사항</router-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/about" class="nav-link"
                          >이벤트</router-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/about" class="nav-link"
                          >문의</router-link
                        ></a
                      >
                    </li>
                  </ul>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <form
                  class="d-grid gap-2 d-md-flex justify-content-md-end"
                  role="search"
                >
                  <button
                    class="btn btn-outline-dark btn-custom"
                    id="btn_border"
                    type="submit"
                  >
                    <router-link to="/login" class="nav-link">
                      <img src="@/assets/Login.png" alt="login"
                    /></router-link>
                  </button>
                </form>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </ul>
  </div>
  <div id="center">
    <router-view />
  </div>
  <div id="footer">
    <FooterView />
  </div>
</template>

<script>
import FooterView from "./components/FooterView.vue";
export default {
  components: {
    FooterView,
  },
};
</script>
<style>
nav {
  padding: 30px;
}
.nav nav-underline {
  padding-right: 100px;
}
.navbar-nav .nav-item {
  margin-right: 110px; /* 오른쪽 간격 조절 */
}
.nav-link:hover {
  color: gray !important; /* 호버 시 색상 변경 */
}
.nav-link {
  color: black !important; /* 우선순위 높이기 */
}
.title {
  color: black;
  font-family: "MyFont2";
}
.nav li a {
  color: black;
  font-size: 15pt;
}

.black {
  color: black;
}
nav a.router-link-exact-active {
  color: gray;
}
ul a.dropdown-item:active {
  background-color: rgba(128, 128, 128, 0.062);
  transform: translateY(2px);
}
.btn-custom {
  height: 40px; /* 원하는 높이로 변경 */
  align-items: center;
  justify-items: center;
}
#btn_border {
  border: none;
  background-color: transparent;
  padding: 0;
}
.btn-custom img {
  max-width: 45px; /* 이미지의 최대 너비를 100%로 설정하여 버튼 너비에 맞춤 */
  height: 33px; /* 이미지의 높이를 자동으로 조정하여 가로세로 비율 유지 */
  margin-right: 5px; /* 이미지와 텍스트 사이 여백 조절 */
}
.custom-button-container {
  position: relative; /* 부모 요소에 대해 상대적 위치 지정 */
  top: 50px; /* 원하는 위치로 조절 */
}

#titleLogo {
  margin-bottom: 8px;
  width: 130px;
  height: 65px;
}

#title {
  font-size: 33px;
  font-family: "Concert One";
  margin-right: 100px;
  margin-bottom: 0;
}

.nav.justify-content-center {
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 100%; /* 부모 요소의 높이를 자식 요소에 맞춤 */
}
</style>
