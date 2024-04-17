<template>
  <div id="header">
    <ul class="nav justify-content-center">
      <nav class="navbar navbar-expand-lg bg-body-white">
        <div class="container-fluid">
          <router-link to="/" class="nav-link" aria-current="page">
            <a
              class="navbar-brand title"
              style="margin-right: 140px; font-size: 18pt"
              >🐼 판다 커피
            </a>
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
                  <router-link to="/" class="nav-link" aria-current="page"
                    >홈</router-link
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
                  <a class="nav-link" href="#">오시는 길</a>
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
                        ><router-link to="/about" class="nav-link"
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
    <FooterView/>
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue'
export default {
  components:{
    FooterView
  }
}
</script>
<style>

#app {
  font-family: "MyFont", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
}
.black {
  color: black;
}
nav a.router-link-exact-active {
  color: gray;
}
</style>
