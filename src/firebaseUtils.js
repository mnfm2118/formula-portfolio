import firebase from 'firebase';
import store from './sotre';

export default {
  onAuthStateChanged() {
    firebase.auth().onAuthStateChanged((u) => {
      const user = u || {};
      store.commit('onAuthStateChanged', user);
      store.commit('onUserLoginStatusChanged', !!user.uid);
    });
  },
};
