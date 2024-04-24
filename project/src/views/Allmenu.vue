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
                checked
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
              >판다커피는 엄선된 최고급 원두만 사용합니다.</span
            >
            <span style="margin: 10px 20px 10px; font-size: 12pt"
              >※ 디카페인가능(일부음료제외)</span
            >
          </div>
          <br />
          <div class="image-container">
            <figure class="figure" v-for="item in allMenus" :key="item.id">
              <img
                id="imgAllMEnu"
                v-if="item.menuimg"
                :src="item.menuimg"
                class="figure-img img-fluid rounded"
                alt="..."
                @click="() => $router.push(`/detailmenu/${item.menuId}`)"
              />
              <figcaption class="figure-caption text-center">
                {{ item.menuName }}<br />
                가격 : {{ item.menuPrice }}
                <div>
                  <button class="cartBtn" id="btn_border">
                    <i class="bi bi-cart-check"></i>
                  </button>
                </div>
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
import axios from "axios";
export default {
  name: "allmenuView",
  components: {},
  data() {
    return {
      heartIconClass: "bi bi-heart",

      //테스트용 메뉴 배열
      // menuItems: [
      // { id: 1, name: "판다리카노", image: require("../assets/coffeeEX.jpg") },
      // { id: 2, name: "판다라떼", image: require("../assets/coffeeEX.jpg") },
      // { id: 3, name: "판다프레소", image: require("../assets/coffeeEX.jpg") },
      // { id: 4, name: "커피판다", image: require("../assets/coffeeEX.jpg") },
      // { id: 5, name: "아인슈페너", image: require("../assets/coffeeEX.jpg") },
      // { id: 6, name: "바닐라라떼", image: require("../assets/coffeeEX.jpg") }
      // ],

      allMenus: [],
    };
  },

  created() {
    this.fetchMenus();
  },

  methods: {
    getImageSrc(base64Data) {
      return `data:image/jpeg;base64,${base64Data}`;
    },
    async fetchMenus() {
      try {
        console.log("fetchMenu");
        const response = await axios.get("http://localhost:3000/menu");
        console.log(response.data);
        this.allMenus = response.data.map((item) => ({
          ...item,
          menuimg: this.getImageSrc(item.menuimg),
        }));
        console.log("Menu fetched successfully");
      } catch (error) {
        console.error("Error fetching menu:", error);
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
  justify-content: center; /* 기본적으로 중앙 정렬 */
}
.image-container.align-start {
  justify-content: flex-start; /* 왼쪽 정렬 */
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
#imgAllMEnu {
  width: 300px;
  height: 300px;
}
</style>
