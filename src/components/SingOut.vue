<template>
    <v-card
      class="pa-5 ma-auto"
      width="50%"
    >
      <div class="logout">SING OUT？</div>
      <v-btn
        block
        class="ma-3"
        color="gray"
        @click="$router.go(-1)"
      >戻る</v-btn>
      <v-btn 
        block
        color="grey"
        @click="logout()">
        SIGN OUT!!
      </v-btn>
    </v-card>
  </template>
  
  <script>
import { getAuth, signOut } from 'firebase/auth';
import {app} from '../firebase';
import router from '../router';

const auth = getAuth(app);
  export default {
    name: 'SingOut',
    methods: {
      logout() {
        signOut(auth).then(() => {
          // SINGIN画面に遷移
          router.push({ path: '/sing_in' });
        })
        .catch(() => {
          alert('ログアウトerror')
        });
      }
    },
  }
  </script>
  
  <style scoped>
  .logout {
    font-size: 40px;
    font-weight: bold;
    hover {
      opacity: 0,10;
    }
  }
  </style>