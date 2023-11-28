<template>
  <div>
    <h1>SING OUT</h1>
    <v-container>
      <div>
        <v-btn
          block
          color="white"
          elevation="9"
          x-large
          @click="$router.go(-1)">
          戻る
        </v-btn>
      </div>
      <br>
      <div>
        <v-btn
          block
          color="red"
          elevation="9"
          x-large
          @click="logout()">
          SIGN OUT!!
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase';

const auth = getAuth(app);
export default {
  name: 'SingOut',
  methods: {
    logout() {
      signOut(auth).then(() => {
        // SINGIN画面に遷移
        window.location.href = '/sing_in';
      })
        .catch(() => {
          alert('ログアウトerror');
        });
    },
  },
};
</script>
