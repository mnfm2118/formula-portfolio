import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
 
//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useSessionStore = defineStore('session', () => {
  const user = ref({});

  const isLoggedln = ref(false);

  function login(data)  {
    console.log(data);
    user.value = {...data};
    isLoggedln.value = true;
  }
 
  return { isLoggedln, login, user }
})