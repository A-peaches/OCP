<template>

  <div id = "header">
   <nav class="navbar navbar-expand-lg bg-body-white">
    <div class="container-fluid">
      <a class="navbar-brand title" href="#">🐼 판다 커피 </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
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
            <li class="nav-item">
              <router-link to="/about" class="nav-link">메뉴</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">주문</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">오시는 길</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">소식/문의</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
<div id="center">
 <router-view/>
</div>
</template>

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
.nav-link:hover {
    color: gray !important; /* 호버 시 색상 변경 */
}
.nav-link {
    color: black !important; /* 우선순위 높이기 */
}
.title {
  color: black;
  font-family:"MyFont2";
}
.nav li a {
  color: black;
}
.black {
  color :black;
}
nav a.router-link-exact-active {
  color: gray;
}
</style>
