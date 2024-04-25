import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {},
    cart: {
      cartCnt: 0
    }
  },
  mutations: {
    loginUser(state, obj) {
      state.user = obj.data; // 사용자 객체를 state.user에 저장
    },
    logoutUser(state) {
      // user 객체를 빈 객체로 설정하거나, 초기화
      state.user = {};
    },
    AddCartCnt(state, cartCnt) {
      state.cart.cartCnt = cartCnt;
    },
    AddnewMenu(state) {
      state.cart.cartCnt++; // 장바구니 항목 수 증가
    },
    decreaseMenu(state) {
      state.cart.cartCnt--; // 장바구니 항목 수 감소
    },
    resetMenu(state) {
      state.cart.cartCnt = 0; // 장바구니 항목 수 초기화
    }
  },
  actions: {
    loginUser({ commit }, userData) {
      commit("loginUser", userData);
    },
    addNewItemToCart({ commit }) {
      commit("AddnewMenu"); // 항목 추가 동작을 커밋
    },
    decreaseItemToCart({ commit }) {
      commit("decreaseMenu"); // 항목 추가 동작을 커밋
    }
  },
  getters: {
    getUser(state) {
      return state.user; // 현재 저장된 사용자 정보를 반환
    },
    isAdmin(state) {
      return state.user && state.user.is_admin == 1;
    },
    isLogin(state) {
      // user 객체가 존재하고, 객체 내부에 속성이 하나라도 있는 경우 true 반환
      return !!state.user && Object.keys(state.user).length > 0;
    },
    getUserId(state) {
      return state.user.userId;
    },
    getCartCnt(state) {
      return state.cart.cartCnt;
    }
  },
});

export default store;
