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
                  <button
                    class="cartBtn"
                    id="btn_border"
                    @click="ordering(item.menuId)"
                  >
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
      allMenus: [],
      userId: "",
      ischeck: "",
    };
  },

  created() {
    this.fetchMenus();
    this.userIdLoad();
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
    userIdLoad() {
      this.userId = this.$store.getters.getUserId;
    },
    async isSameMenu(menuId) {
      let obj = {
        userId: this.userId,
        menuId: menuId,
      };

      try {
        const res = await axios.post("http://localhost:3000/samecheck", obj);
        this.ischeck = res.data.exists;
        return this.ischeck; // 함수에서 결과값을 반환합니다.
      } catch (error) {
        console.error("에러발생", error);
        return false; // 에러가 발생했을 때 false를 반환합니다.
      }
    },
    cartNew(menuId) {
      let obj = { userId: this.userId, menuId: menuId };

      axios.post("http://localhost:3000/cartnew", obj).then((res) => {
        console.log(res.data);
      });
    },
    cartAdd(menuId) {
      let obj = { userId: this.userId, menuId: menuId };

      axios.post("http://localhost:3000/cartadd", obj).then((res) => {
        console.log(res.data);
      });
    },
    async ordering(menuId) {
      if (!this.userId) {
        alert("비회원은 주문할 수 없습니다!");
        this.$router.push("/login"); // 로그인 페이지로 리다이렉트
        return;
      }

      const isMenuSame = await this.isSameMenu(menuId);

      console.log(isMenuSame, "입니다.");

      if (!isMenuSame) {
        //처음 추가할때
        this.cartNew(menuId);
        this.$store.dispatch("addNewItemToCart");
      } else {
        //이미 있는 메뉴일때
        this.cartAdd(menuId);
      }

      alert("장바구니에 추가되었습니다.");
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
#imagewhy {
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
.cartBtn {
  background-color: transparent; /* 배경색 투명으로 설정 */
  border: none;
  padding: 10px;
  display: block; /* 블록 요소로 설정 */
  margin: 5px auto; /* 상하 20px, 좌우 자동 (중앙 정렬) */
  cursor: pointer; /* 클릭 가능한 항목임을 표시 */
}
.cartBtn i {
  color: #000; /* 아이콘 색상을 검정색으로 변경 */
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
