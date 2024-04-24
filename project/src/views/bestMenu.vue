<template>
  <div id="center">
    <div class="container">
      <div class="intro">
        <div style="text-align: left">
          <h1>Best메뉴</h1>
          <hr />
          <br /><br />

          <div class="card_section">
            <div v-for="menu in menus" :key="menu.id" class="card" style="width: 18rem; margin-right: 15px">
              <img :src="menu.image" class="card-img-bottom" alt="Menu Image">
              <div class="card-body">
                <h5 class="card-title">{{ menu.name }}</h5>
                <p class="card-text">PRICE : {{ menu.price }}</p>
                <p class="card-text">{{ menu.description }}</p>
                <button class="cartBtn">
                  <i class="bi bi-cart-check"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            class="category"
            style="margin-top: 160px; background-color: rgb(red, green, blue)"
          >
            <h1 style="text-align: center; padding: 40px 0 100px 0">
              판다`s Pick!
            </h1>
            <div class="content">
              <div class="item">
                <img
                  src="@/assets/coffee0.png"
                  class="float-end"
                  id="imagebest"
                />
                <div class="text" style="justify-content: end">
                  <h2>판다리카노</h2>
                  <br />
                  <p>맛있는 아메리카노!</p>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="item">
                <img
                  src="@/assets/coffee0.png"
                  class="float-end"
                  id="imagebest"
                />
                <div class="text" style="justify-content: end">
                  <h2>판다라떼</h2>
                  <br />
                  <p>맛있는 라떼!</p>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="item">
                <img
                  src="@/assets/coffee0.png"
                  class="float-end"
                  id="imagebest"
                />
                <div class="text">
                  <h2>판다프레소</h2>
                  <br />
                  <p>맛있는 에스프레소!</p>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="item">
                <img
                  src="@/assets/coffee0.png"
                  class="float-end"
                  id="imagebest"
                />
                <div class="text">
                  <h2>커피판다</h2>
                  <br />
                  <p>맛있는 그냥 커피!</p>
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

import axios from 'axios';

export default {
  name: "bestmenuView",
  components: {},
  data() {
    return {
       topMenu: [],
       menus: [
        {
          id: 1,
          name: '👑판다리카노',
          price: 2.5,
          description: '커피설명',
          image: require("../assets/coffeeEX.jpg")
        },
        {
          id: 2,
          name: '👑판다라떼',
          price: 3.0,
          description: '커피설명',
          image: require("../assets/coffeeEX.jpg")
        },
        {
          id: 3,
          name: '👑판다프레소',
          price: 2.0,
          description: '커피설명',
          image: require("../assets/coffeeEX.jpg")
        },
        {
          id: 4,
          name: '👑커피판다',
          price: 3.0,
          description: '커피설명',
          image: require("../assets/coffeeEX.jpg")
        }
      ]
      
    };
  },
  created() {
    this.fetchMenus();
  },
  methods: {
    async fetchMenus() {
        console.log('불러오기시작');
        axios
        .get("http://localhost:3000/bestmenu/best")
        .then((res) => {
          console.log(res);
          this.topMenu = res.data;
          console.log('탑메뉴 호출해보기', this.topMenu);
        })
        .catch((error) => {
          console.error("Error during menu", error);
        });
      
    }
  }
};
</script>
<style>
@import url(@/assets/css.css);
.category {
  border: 1px rgb(224, 224, 224) solid;
  border-radius: 10px;
  padding: 15px 20px 15px 20px;
}
#cardbest {
  display: inline-block;
}
#bestimg {
  height: auto;
  width: 150px;
}
.container {
  text-align: center;
  padding: 0 80px;
}

.intro {
  padding: 30px; /* 내용의 패딩 조정 */
  text-align: left;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 40px 0px 40px;
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
}

#imagebest {
  width: 380px;
  height: 350px;
  border-radius: 10px;
}

.text {
  padding: 80px;
  text-align: left;
  font-size: 13pt;
}
#btn_border_best {
  border: none;
  background-color: transparent;
  text-align: center;
  width: auto;
}

#btn_border_best {
  width: 100%;
  text-align: end;
}
</style>
