import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user:{},
        isLoggedln: false,
    },
    mutations: {
        onAuthStateChanged(state,user) {
            // firebaseが返したユーザー情報
            state.user = user;
        },
        onUserLoginStatusChnged(state, isLoggedln) {
            //ログインしているかどうか
            state.isLoggedln = isLoggedln;
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isLoggendln(state) {
            return state.isLoggedln;
        }
    }
});