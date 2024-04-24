<template>
  <div id="center">
    <div class="container" style="display: flex; justify-content: center">
      <div class="intro" style="margin: 100px 0 100px">
        <div class="d-flex justify-content-center">
          <img
            :src="detailmenu[0].menuimg"
            alt="..."
            style="margin-right: 100px; width: 450px; height: 480px"
            class="img-fluid"
          />
          <div style="display: flex">
            <div style="padding-left: 30px; width: 500px; height: auto">
              <h3>{{ detailmenu[0].menuName }}</h3>
              <p>Pandaricano</p>
              <hr style="border-top: 3px black solid" />
              <pre
                >{{ detailmenu[0].menuintro }}
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
                    (detailmenu[0].menuPrice + sizePriceAdd + shotpriceadd) *
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
      detailmenu: {},
      imageTest:
        "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",
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
        const response = await axios.post("http://localhost:3000/detailmenu", {
          menuId: menuId,
        });
        this.detailmenu = response.data.map((detailmenu) => ({
          ...detailmenu,
          menuimg: this.getImageSrc(detailmenu.menuimg),
        }));
        console.log("Menu fetched successfully");
        console.log(this.detailmenu);
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
