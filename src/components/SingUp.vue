<template>
    <div>
      <h1>SING UP</h1>
      <v-container>
        <div>
          <h2>E-mail</h2>
          <v-text-field label="*****@mail.com" v-model="email" />
        </div>
        <div>
          <h2>Password</h2>
          <v-text-field
            label="(10文字以上)"
            v-model="password"
            :counter="10" 
          />
        </div>
        <v-btn 
        @click="registerUser"
        color="red"
        elevation="9"
        block
        x-large
        >
          Sing UP!!
        </v-btn>
      </v-container>
    </div>
  </template>
  
  <script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.js";
import router from '../router';

const auth = getAuth(app);



  export default {
    name: "SingUp",
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
  registerUser(){
    createUserWithEmailAndPassword(auth, this.email, this.password)
    .then(res => {
      router.push({ path: '' });
      alert('success', res)
    } )
    .catch(e => {
      alert('error')
      console.log('error', e)
    })
  }
}
}

  </script>


