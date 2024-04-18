<template>
  <div
    id="header"
    class="sticky-top"
    style=" background-color: rgba(255, 255, 255, 0.8); "
  >
    <ul class="nav justify-content-center">
      <nav class="navbar navbar-expand-lg bg-body-white" style="padding:0px">
        <div class="container-fluid">
          <router-link to="/" class="nav-link" aria-current="page">
            <p id="title">
            <img src='./assets/panda.png' id="titleLogo">
            Panda Coffee</p>
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
                        ><router-link to="/about" class="nav-link"
                          >전체메뉴</router-link
                        ></a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item"
                        ><router-link to="/about" class="nav-link"
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
  font-size: 17pt;
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

#titleLogo {
  margin-bottom : 8px;
  width : 130px;
  height : 65px;
}

#title {
  margin-top: 30px;
  font-size: 37px;
  font-family: "Concert One";
  margin-right: 140px;
}
</style>
