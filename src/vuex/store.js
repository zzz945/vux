import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*  status:
*   0:在获取桌牌页面，未获取桌牌
*   1:在获取桌牌页面，已获取桌牌
*   2:在点菜页面，未点菜
*   3:在点菜页面，已点菜
*   4:在提交订单页面，未提交
*   5:在提交订单页面，已提交
*/
const state = {
  isLoading: false,
  direction: 'forward',
  status: 0
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    },
    UPDATE_STATUS (state, status) {
      state.status = status
    }
  }
})
