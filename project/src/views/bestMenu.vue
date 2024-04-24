<template>
  <div id="center">
    <div class="container">
      <div class="intro">
        <div style="text-align: left">
          <h1>Best메뉴</h1>
          <hr />
          <div class="card_section">
            <div
              v-for="menu in topMenu"
              :key="menu.menuId"
              class="card card_best"
              style="width: 18rem; margin-right: 15px"
            >
              <img
                src="../assets/coffeeEX.jpg"
                class="card-img-bottom"
                alt="Menu Image"
              />
              <div class="card-body">
                <h5 class="card-title">{{ menu.menuName }}</h5>
                <p class="card-text">PRICE : {{ menu.menuPrice }}</p>
                <p class="card-text">{{ menu.menuintro }}</p>
                <button class="cartBtn" @click="ordering(menu.menuId)">
                  <i class="bi bi-cart-check"></i>
                </button>
              </div>
            </div>
          </div>
          <h1>Coming Soon</h1>
          <hr/><br/>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card h-100">
                <img src="../assets/comingsoon/dessert1.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">판다가 좋아하는<br/>불고기 치즈 샌드위치</h5>
                  <p class="card-text">치즈 듬뿍 불고기 듬뿍 !</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="../assets/comingsoon/dessert2.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">에고 머핀</h5>
                  <p class="card-text">에구구 머핀 에고고 머핀 계란 햄! 에구구 머핀 에고고 머핀 계란 햄! 에구구 머핀 에고고 머핀 계란 햄!</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="../assets/comingsoon/dessert3.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">튀르키예</h5>
                  <p class="card-text">케밥 케밥 케밥 케밥 케밥 케밥 케밥 케밥 케밥</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="../assets/comingsoon/dessert4.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">나뭇가지 아닙니다.</h5>
                  <p class="card-text">프레젤 프레젤 프레젤 프레젤 프레젤 프레젤 프레젤 프레젤</p>
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
  name: "bestmenuView",
  components: {},
  data() {
    return {
       topMenu: [],
       userId: '',
       ischeck: ''
    };
  },
  created() {
    this.fetchMenus();
    this.userIdLoad();
  },
  methods: {
    async fetchMenus() {
      axios
        .get("http://localhost:3000/bestmenu/best")
        .then((res) => {
          this.topMenu = res.data;
        })
        .catch((error) => {
          console.error("Error during menu", error);
        });
      
    },
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
      let obj = {userId: this.userId, menuId: menuId };

      axios.post("http://localhost:3000/cartnew", obj)
      .then(res => {
        console.log(res.data);
      });
    },
    cartAdd(menuId) {
      let obj = {userId: this.userId, menuId: menuId };

      axios.post("http://localhost:3000/cartadd", obj)
      .then(res => {
        console.log(res.data);
      });
    },
    async ordering(menuId) {

      if (!this.userId) {
        alert('비회원은 주문할 수 없습니다!')
        this.$router.push('/login'); // 로그인 페이지로 리다이렉트
        return;
      }

      const isMenuSame = await this.isSameMenu(menuId);
      
      console.log(isMenuSame, '입니다.');

      if (!isMenuSame) {
        //처음 추가할때
        this.cartNew(menuId);
        this.$store.dispatch('addNewItemToCart');
      } else {
        //이미 있는 메뉴일때
        this.cartAdd(menuId);
      }

      alert("장바구니에 추가되었습니다.");

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
.card-img-bottom {
  border-radius: 5px; /* 상하 모든 모서리에 라운드 처리 */
}
.card_best {
  width: 18rem; /* 너비 설정 */
  height: 500px; /* 높이 고정 */
  margin-right: 15px;
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1; /* flex-grow 속성을 통해 카드 바디가 가능한 많은 공간을 차지하도록 설정 */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 내용을 상하로 균등 분포 */
}


.intro {
  padding: 30px; /* 내용의 패딩 조정 */
  text-align: left;
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
.bi-cart-check {
  padding: 0 10px 0 0;
  font-size: 15pt;
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
