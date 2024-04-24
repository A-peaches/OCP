import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {},
  },
  mutations: {
    loginUser(state, obj) {
      state.user = obj.data; // 사용자 객체를 state.user에 저장
    },
    logoutUser(state) {
      // user 객체를 빈 객체로 설정하거나, 초기화
      state.user = {};
    },
  },
  actions: {
    loginUser({ commit }, userData) {
      commit("loginUser", userData);
    },
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
  },
});

export default store;
