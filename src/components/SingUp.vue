<template>
  <v-app>
    <h1>SING UP</h1>
    <v-container>
      <v-row>
        <v-row>
          <h2>E-mail</h2>
        </v-row>
        <v-row>
        <v-text-field type="email" label="*****@mail.com" v-model="email" />
        </v-row>
      </v-row>
      <div>
        <h2>Password</h2>
        <v-row>
          <v-col cols="1" md="12">
            <v-form>
              <v-text-field
                type="password"
                label="(10文字以上)"
                v-model="password"
                :counter="10"
                :rules="passwordRules"
                v-bind:disabled="activateSbumit"
              />
            </v-form>
          </v-col>
        </v-row>
        <v-row>
          <v-btn class="mr-auto" id="btn_passiview" >表示</v-btn>
        </v-row>
      </div>
      <br>
      <v-row>
        <v-btn
          @click="registerUser"
          color="red"
          elevation="9"
          block
          x-large
          v-bind:disabled="activateSubmit"
        > Sing UP!!  </v-btn>
      </v-row>
    </v-container>
  </v-app>
  </template>

<script>

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';
import router from '../router';

const auth = getAuth(app);

export default {
  name: 'SingUp',
  data() {
    return {
      passwordRules: [
        (v) => v.length >= 10 || 'Password must be more than 10 characters',
      ],

      email: '',
      password: '',
    };
  },

  methods: {
    activateSubmit() {
      if (this.password.length >= 10) {
        return false;
      }
      return true;
    },

    registerUser() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          router.push({ path: '' });
          alert('success', res);
        })
        .catch((e) => {
          alert('error');
        });
    },
  },
};

</script>
