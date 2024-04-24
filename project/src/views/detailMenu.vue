<template>
  <div id="center">
    <div class="container" style="display: flex; justify-content: center">
      <div class="intro" style="margin: 100px 0 100px">
        <div class="d-flex justify-content-center">
          <img
            :src="detailmenu.menuimg"
            alt="..."
            style="margin-right: 100px; width: 450px; height: 480px"
            class="img-fluid"
          />
          <div style="display: flex">
            <div style="padding-left: 30px; width: 500px; height: auto">
              <h3>{{ detailmenu.menuName }}</h3>
              <p>Pandaricano</p>
              <hr style="border-top: 3px black solid" />
              <pre
                >{{ detailmenu.menuintro }}
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
                  {{ (coffeePrice + sizePriceAdd + shotpriceadd) * cups }}원
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
                  <button
                    type="button"
                    class="btn btn-light"
                    style="margin-right: 20px"
                  >
                    담기
                  </button>
                  <button type="button" class="btn btn-light">바로 결제</button>
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
      detailmenu: [],
    };
  },
  created() {
    this.fetchMenuDetail();
  },
  methods: {
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
        const response = await axios.post("http://localhost:3000/menu", {
          menuId: menuId,
        });
        this.detailmenu = response.data.map((detailmenu) => ({
          ...detailmenu,
          menuimg: this.getImageSrc(detailmenu.menuimg),
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
#image-container-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* 이미지를 중앙에 정렬합니다. */
}
#btn_menu {
  border: 1px black solid;
}
</style>
