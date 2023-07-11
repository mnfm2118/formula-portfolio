<template>
    <div>
      <h1>SING IN</h1>
      <div>
        <h3>E-mail</h3>
        <input type="text" placeholder="E-mail" v-model="email" />
      </div>
      <div>
        <h3>Password</h3>
        <input type="text" placeholder="Password" v-model="password" />
      </div>
      <button @click="login">SING IN!!</button>
    </div>
  </template>
    
    <script>

    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { app } from "../firebase";

    const auth = getAuth(app);

    export default {
     name: 'SingIn',
     data(){
      return{
       email:"",
       password:""
      };
     },
     methods: {
      login(){
        signInWithEmailAndPassword(auth, this.email, this.password)
      }
     }
    }
    </script>
    