<template>
  <div id="center">
    <div class="container" style="display: flex; justify-content: center">
      <div class="intro" style="margin: 100px 0 100px">
        <div class="d-flex justify-content-center">
          <img
            :src="deatailData.image"
            alt="..."
            style="margin-right: 100px; width: 450px; height: 480px"
            class="img-fluid"
          />
          <div style="display: flex">
            <div style="padding-left: 30px; width: 500px; height: auto">
              <h3>{{ deatailData.menuName }}</h3>
              <p>Pandaricano</p>
              <hr style="border-top: 3px black solid" />
              <pre
                >{{ deatailData.menuintro }}
          </pre
              >
              <h5>Option</h5>
              <hr />
              <div style="display: flex; align-items: center; gap: 10px">
                <span>샷추가</span>
                <button
                  @click="shotMinus"
                  style="
                    border: none;
                    background-color: transparent;
                    font-size: 16pt;
                  "
                >
                  -
                </button>
                <span>{{ shotadd }}</span>
                <button
                  @click="shotPlus"
                  style="
                    border: none;
                    background-color: transparent;
                    font-size: 16pt;
                  "
                >
                  +
                </button>
              </div>
              <div style="display: flex; justify-content: flex-end">
                <span>+{{ shotpriceadd }}</span>
              </div>
              <br />

              <span>사이즈</span>&nbsp;&nbsp;&nbsp;
              <input
                type="radio"
                name="size"
                value="tall"
                v-model="selectedSize"
                @change="sizeUp"
              />&nbsp;tall(350ml)&nbsp;&nbsp;
              <input
                type="radio"
                name="size"
                value="Grande"
                v-model="selectedSize"
                @change="sizeUp"
              />&nbsp;Grande(470ml)
              <div style="display: flex; justify-content: flex-end">
                <span>+{{ sizePriceAdd }}</span>
              </div>
              <br /><br />
              <div style="display: flex; justify-content: flex-end">
                <h5>
                  {{
                    (deatailData.menuPrice + sizePriceAdd + shotpriceadd) *
                    cups
                  }}원
                </h5>
              </div>
              <br />
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div style="display: flex; align-items: center">
                  <span style="font-size: 20pt">수량 </span>&nbsp;&nbsp;&nbsp;
                  <button
                    @click="cupMinus"
                    style="
                      border: none;
                      background-color: transparent;
                      font-size: 20pt;
                      margin-right: 10px; /* 샷 추가 버튼과의 간격 조절 */
                    "
                  >
                    -
                  </button>
                  <span style="font-size: 20pt">{{ cups }}</span>
                  <button
                    @click="cupPlus"
                    style="
                      border: none;
                      background-color: transparent;
                      font-size: 20pt;
                      margin-left: 10px; /* 샷 추가 버튼과의 간격 조절 */
                    "
                  >
                    +
                  </button>
                </div>
                <div>
                  <button type="button" class="btn btn-light" style="margin-right: -10px" @click="ordering">
                    장바구니 담기
                  </button>
                  <!-- <button type="button" class="btn btn-light">바보 결제</button> -->
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
  name: "detailmenuView",
  components: {},
  data() {
    return {
      shotadd: 0,
      shotpriceadd: 0,
      selectedSize: 0,
      sizePriceAdd: 0,
      coffeePrice: 2500,
      cups: 1,
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
      detailmenu: {},
      imageTest2:'',
      //detail 더미
      deatailData:{
        image: '', //사진
        menuName: '', //?
        menuintro: '',
        menuPrice: 0
      },
    };
  },
  created() {
    this.fetchMenuDetail();
    this.userIdLoad();
  },
  methods: {
    userIdLoad() {
      this.userId = this.$store.getters.getUserId;
    },

    async isSameMenu(menuId) {
      let obj = {
        userId: this.userId,
        menuId: menuId
      };

      try {
        const res = await axios.post("http://localhost:3000/samecheck", obj);
        this.ischeck = res.data.exists;
        return this.ischeck; // 함수에서 결과값을 반환합니다.
      } catch (error) {
        console.error('에러발생', error);
        return false; // 에러가 발생했을 때 false를 반환합니다.
      }
    },

    cartNew(menuId) {
      let obj = {userId: this.userId, menuId: menuId, cups: this.cups};

      axios.post("http://localhost:3000/cartnewcups", obj)
      .then(res => {
        console.log(res.data);
      });
    },
    
    cartAdd(menuId) {
      let obj = {userId: this.userId, menuId: menuId, cups: this.cups};

      axios.post("http://localhost:3000/cartaddcups", obj)
      .then(res => {
        console.log(res.data);
      });
    },

    async ordering() {
      this.menuId = this.$route.params.id;

      if (!this.userId) {
        alert('비회원은 주문할 수 없습니다!')
        this.$router.push('/login'); // 로그인 페이지로 리다이렉트
        return;
      }

      const isMenuSame = await this.isSameMenu(this.menuId);
      
      console.log(isMenuSame, '입니다.');

      if (!isMenuSame) {
        //처음 추가할때
        this.cartNew(this.menuId);
        this.$store.dispatch('addNewItemToCart');
      } else {
        //이미 있는 메뉴일때
        this.cartAdd(this.menuId);
      }

      alert("장바구니에 추가되었습니다.");

    },

    shotMinus() {
      if (this.shotadd > 0) {
        this.shotadd--;
        this.shotpriceadd = this.shotpriceadd - 500;
      }
    },
    shotPlus() {
      this.shotadd++;
      this.shotpriceadd = this.shotpriceadd + 500;
    },
    cupMinus() {
      if (this.cups > 1) {
        this.cups--;
      }
    },
    cupPlus() {
      this.cups++;
    },
    sizeUp() {
      if (this.selectedSize === "Grande") {
        this.sizePriceAdd = 500;
      } else {
        this.sizePriceAdd = 0;
      }
    },
    getImageSrc(base64Data) {
      return `data:image/jpeg;base64,${base64Data}`;
    },
    async fetchMenuDetail() {
      try {
        let menuId = this.$route.params.id;
        console.log(menuId);
        const response = await axios.post("http://localhost:3000/detailmenu", {
          menuId: menuId,
        });
        let data = response.data[0];
        this.deatailData.image = this.getImageSrc(data.menuimg);
        this.deatailData.menuintro = data.menuintro;
        this.deatailData.menuPrice = data.menuPrice;
      
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    },
  },
};
</script>
<style>
#image-container-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* 이미지를 중앙에 정렬합니다. */
}
#btn_menu {
  border: 1px black solid;
}
</style>