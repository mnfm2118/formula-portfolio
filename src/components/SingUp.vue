<template>
    <div>
      <h1>SING UP</h1>
      <div>
        <h3>E-mail</h3>
        <input type="text" placeholder="E-mail" v-model="email" />
      </div>
      <div>
        <h3>Password</h3>
        <input type="text" placeholder="Password" v-model="password" />
      </div>
      <button @click="registerUser">Sing UP!!</button>
    </div>
  </template>
  
  <script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.js";

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
  }
}
}

  </script>


