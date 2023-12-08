<template>

    <div>
      <h1>SING IN</h1>
      <v-container>
        <div>
          <h2>E-mail</h2>
          <v-text-field label="*****@mail.com" v-model="email" />
        </div>
        <div>
          <h2>Password</h2>
          <v-text-field
          v-model="password"/>
        </div>
        <v-btn @click="login"
        block
        color="red"
        elevation="9"
        x-large >
        SING IN!!
        </v-btn>
      </v-container>
    </div>
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';
import useSessionStore from '../stores/session';

const auth = getAuth(app);

export default {
  name: 'SingIn',
  setup() {
    const store = useSessionStore();
    return { store };
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          this.store.login(res.user);
          console.log(res);
          window.location.href = '/edit_js';
          alert(res);
        })
        .catch((e) => {
          alert('error');
          console.log('error', e);
        });
    },
  },
};

</script>
