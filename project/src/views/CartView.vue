<template>
  <div class="cart-container my-4">
    <h1>장바구니</h1>
    <hr />
    <div v-if="cartItems.length > 0" class="cart-items my-5">
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.menuimg" alt="Coffee" class="coffee-image" />
        <div class="item-details">
          &nbsp;&nbsp;
          <span>{{ item.menuName }}</span>
          &nbsp;&nbsp;
          <span>{{ item.menuPrice }} 원</span>
        </div>
        <div class="item-num">
          <button @click="decreaseQuantity(item)">-</button>
          {{ item.cartCnt }}
          <button @click="increaseQuantity(item)">+</button>
        </div>
        <button class="btn btn-sm btn-danger" @click="removeItem(index)">
          삭제
        </button>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>장바구니에 판다커피를 담아주세요!</p>
    </div>
    <hr />
    <p style="text-align: right; font-size: 20px">
      합계 : <span>{{ getPriceSum }} 원</span>
    </p>
    <div class="cart-buttons">
      <button class="btn btn-secondary" @click="placeOrder">주문하기</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      cartItems: [],
      //테스트용
      // cartItems: [],
      selectedItems: [],
    };
  },

  computed: {
    getPriceSum() {
      let total = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        total += this.cartItems[i].menuPrice * this.cartItems[i].cartCnt;
      }
      return total;
    },
  },
  created() {
    this.userIdLoad();
    console.log(this.userId);
  },
  mounted() {
    this.loadCartList();
    // this.setImageUrls();
  },
  methods: {
    getImageSrc(base64Data) {
      return `data:image/jpeg;base64,${base64Data}`;
    },
    async loadCartList() {
      const userId = this.userId;
      try {
        const response = await axios.post("http://localhost:3000/cartList", {
          userId,
        });
        if (response.data.success) {
          const cartList = response.data.data;
          this.cartItems = cartList;
          console.log(this.cartItems);
          this.cartItems = cartList.map((item) => ({
            ...item,
            menuimg: this.getImageSrc(item.menuimg),
          }));
        } else {
          console.error("No cart data returned", response.data.message);
        }
      } catch (error) {
        console.error("Error during cartList", error);
        alert("장바구니 정보를 불러오는 중 오류가 발생했습니다.");
      }
    },
    userIdLoad() {
      this.userId = this.$store.getters.getUserId;
    },
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    updateSelectedItems(item) {
      const index = this.selectedItems.indexOf(item);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
      } else {
        this.selectedItems.push(item);
      }
    },
    removeSelectedItems() {
      this.cartItems = this.cartItems.filter(
        (item) => !this.selectedItems.includes(item)
      );
      this.selectedItems = []; // 선택된 항목 배열 초기화
    },
    placeOrder() {
      // 예: 주문 정보를 서버에 전송하는 로직
      alert("주문이 완료되었습니다!");
    },

    increaseQuantity(item) {
      item.num += 1;
    },
    decreaseQuantity(item) {
      if (item.num > 1) {
        // 수량이 1보다 클 때만 감소
        item.num -= 1;
      }
    },
  },
};
</script>
<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-items {
  margin-top: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc; /* 테두리 추가 */
  border-radius: 8px; /* 모서리 둥글게 처리 */
  background-color: #f9f9f9; /* 배경색 추가 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
}

.empty-cart {
  height: 300px;
  line-height: 300px;
}

.empty-cart p {
  text-align: center;
  color: #666;
  font-size: 18px;
  margin-top: 20px;
}

.coffee-image {
  width: 75px;
  height: 75px;
  margin-right: 30px;
}

.item-details {
  flex-grow: 1;
}

.cart-buttons {
  margin-top: 20px;
  text-align: center;
}

button {
  margin-right: 10px;
}

.item-num button {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

.item-num {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>