<template>
  <div id="center">
    <div class="container">
      <div class="intro">
        <div style="text-align: left">
          <h1>전체메뉴</h1>
          <hr />
          <br /><br />
          <div class="category">
            <h4>카테고리</h4>
            <hr />
            <div id="checkb">
              <input
                type="checkbox"
                name="menu"
                value="all"
                style="margin-right: 10px"
              />전체&nbsp;&nbsp;
              <input
                type="checkbox"
                name="menu"
                value="all"
                style="margin-right: 10px"
              />에스프레소&nbsp;&nbsp;
              <input
                type="checkbox"
                name="menu"
                value="all"
                style="margin-right: 10px"
              />콜드 브루&nbsp;&nbsp;
              <input
                type="checkbox"
                name="menu"
                value="all"
                style="margin-right: 10px"
              />라떼
            </div>
          </div>
          <br />
          <div class="detailcate">
            <img
              style="margin-left: 20px"
              src="@/assets/decafein.png"
              alt="..."
            />

            <span style="margin: 10px 20px 10px; font-size: 15pt"
              >에스프레소</span
            >

            <span style="margin: 10px 20px 10px; font-size: 12pt"
              >디카페인가능(일부음료제외)</span
            >
          </div>
          <br />
          <div class="image-container">
            <figure class="figure">
              <router-link
                to="/detailmenu"
                class="nav-link"
                aria-current="page"
                style="h"
              >
                <img
                  src="@/assets/coffeeEX.jpg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </router-link>
              <figcaption class="figure-caption text-center">
                판다리카노<br />
                <div>
                  <button id="btn_border">
                    <i class="bi bi-cart-check"></i>
                  </button>
                  <button id="btn_border" @click="changeHeartIconClass">
                    <i :class="heartIconClass"></i>
                  </button>
                </div>
              </figcaption>
            </figure>
            <figure class="figure">
              <img
                src="@/assets/coffeeEX.jpg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-center">
                판다라떼<br />
                <button id="btn_border">
                  <i class="bi bi-cart-check"></i>
                </button>
                <button id="btn_border" @click="changeHeartIconClass">
                  <i :class="heartIconClass"></i>
                </button>
              </figcaption>
            </figure>
            <figure class="figure">
              <img
                src="@/assets/coffeeEX.jpg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-center">
                판다프레소<br />
                <button id="btn_border">
                  <i class="bi bi-cart-check"></i>
                </button>
                <button id="btn_border" @click="changeHeartIconClass">
                  <i :class="heartIconClass"></i>
                </button>
              </figcaption>
            </figure>
            <figure class="figure">
              <img
                src="@/assets/coffeeEX.jpg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-center">
                커피판다<br />
                <button id="btn_border">
                  <i class="bi bi-cart-check"></i>
                </button>
                <button id="btn_border" @click="changeHeartIconClass">
                  <i :class="heartIconClass"></i>
                </button>
              </figcaption>
            </figure>
            <figure class="figure">
              <img
                src="@/assets/coffeeEX.jpg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-center">
                아인슈페너<br />
                <button id="btn_border">
                  <i class="bi bi-cart-check"></i>
                </button>
                <button id="btn_border" @click="changeHeartIconClass">
                  <i :class="heartIconClass"></i>
                </button>
              </figcaption>
            </figure>
            <figure class="figure">
              <img
                src="@/assets/coffeeEX.jpg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-center">
                바닐라라떼<br />
                <button id="btn_border">
                  <i class="bi bi-cart-check"></i>
                </button>
                <button id="btn_border" @click="changeHeartIconClass">
                  <i :class="heartIconClass"></i>
                </button>
              </figcaption>
            </figure>
            <figure class="figure">
              <img
                src="@/assets/coffeeEX.jpg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption class="figure-caption text-center">
                A caption for the above image.<br />
                <button id="btn_border">
                  <i class="bi bi-cart-check"></i>
                </button>
                <button id="btn_border" @click="changeHeartIconClass">
                  <i :class="heartIconClass"></i>
                </button>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "allmenuView",
  components: {},
  data() {
    return {
      heartIconClass: "bi bi-heart",
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
#checkb {
  padding: 0 0 0 15px;
}
.container {
  align-content: left;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* 이미지를 중앙에 정렬합니다. */
}
.figure {
  padding: 20px 20px 20px 20px;
}
.figure-caption {
  font-size: 13pt;
}
.category {
  border: 1px rgb(224, 224, 224) solid;
  border-radius: 10px;
  padding: 15px 20px 15px 20px;
}
.detailcate {
  border: 1px rgb(224, 224, 224, 0.171) solid;
  background-color: rgba(224, 224, 224, 0.171);
  border-radius: 3px;
}
#btn_border {
  border: none;
  background-color: transparent;
  text-align: center;
  width: auto;
}
.bi-cart-check {
  padding: 0 10px 0 0;
  font-size: 15pt;
}
.bi-heart {
  color: red;
}
.bi-heart-fill {
  color: red;
}
.intro {
  padding: 30px; /* 내용의 패딩 조정 */
  text-align: left;
}
</style>
