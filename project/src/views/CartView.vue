<template>
  <div class="cart-container">
    <h1>장바구니</h1>
    <hr>
    <div v-if="cartItems.length > 0" class="cart-items">
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" alt="Coffee" class="coffee-image">
        <div class="item-details">
          <input type="checkbox" v-model="selectedItems" :value="item" @change="updateSelectedItems">
          &nbsp;&nbsp;
          <span>{{ item.name }}</span>
          &nbsp;&nbsp;
          <span>{{ item.price }} 원</span>
        </div>
        <div class="item-num">
          <button @click="decreaseQuantity(item)">-</button>
          {{ item.num }}
          <button @click="increaseQuantity(item)">+</button>
        </div>
        <button @click="removeItem(index)">삭제</button>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>장바구니에 판다커피를 담아주세요!</p>
    </div>
    <hr>
    <p style="text-align:right; font-size:20px">합계 : <span>{{getPriceSum}} 원</span></p>
    <div class="cart-buttons">
      <button @click="removeSelectedItems">선택 삭제</button>
      <button @click="placeOrder">주문하기</button>
    </div>
  </div>
</template>
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* 그림자 추가 */
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
<script>
export default {
  data() {
    return {
      cartItems: [
        { name: '아메리카노', price: 4000, num: 1, image: require('@/assets/cart/americano.jpg') },
        { name: '카페라떼', price: 4500, num: 2, image: require('@/assets/cart/latte.jpg') },
        { name: '카푸치노', price: 4500, num: 4, image: require('@/assets/cart/latte2.jpg') },
      ],
      //테스트용 
      // cartItems: [],
      selectedItems: []
    };
  },

  computed: {
    getPriceSum() {
      let total = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        total += this.cartItems[i].price * this.cartItems[i].num;
      }
      return total;
    }
  },

  methods: {
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
      this.cartItems = this.cartItems.filter(item => !this.selectedItems.includes(item));
      this.selectedItems = []; // 선택된 항목 배열 초기화
    },
    placeOrder() {
      // 예: 주문 정보를 서버에 전송하는 로직
      alert('주문이 완료되었습니다!');
    },

    increaseQuantity(item) {
      item.num += 1;
    },
    decreaseQuantity(item) {
      if (item.num > 1) { // 수량이 1보다 클 때만 감소
        item.num -= 1;
      }
    }
  }
};
</script>
