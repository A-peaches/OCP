<template>
  <div id="center">
    <div class="container" style="display: flex; justify-content: center">
      <div class="intro" style="margin: 100px 0 100px">
        <div style="display: flex; justify-content: center">
          <img
            src="@/assets/coffeeEX.jpg"
            alt="..."
            style="margin-right: 100px; width: 450px; height: 450px"
          />
          <div style="display: flex">
            <div style="padding-left: 30px; width: 500px; height: auto">
              <h3>판다리카노</h3>
              <p>Pandaricano</p>
              <hr style="border-top: 3px black solid" />
              <pre>
판다커피의 고소한 풍미 가득한 원두가
밸런스 좋게 어우러지고,
부드러움이 특징인 판다커피만의 아메리카노
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
                <h5>{{ 2500 + sizePriceAdd + shotpriceadd }}원</h5>
              </div>
              <br />
              <div style="display: flex; justify-content: flex-end">
                <button
                  type="button"
                  class="btn btn-light"
                  style="margin-right: 20px"
                  id="btn_menu"
                >
                  담기</button
                ><button id="btn_menu" type="button" class="btn btn-light">
                  바로 결제
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailmenuView",
  components: {},
  data() {
    return {
      shotadd: 0,
      shotpriceadd: 0,
      selectedSize: 0,
      sizePriceAdd: 0,
    };
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
    sizeUp() {
      if (this.selectedSize === "Grande") {
        this.sizePriceAdd = 500;
      } else {
        this.sizePriceAdd = 0;
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
