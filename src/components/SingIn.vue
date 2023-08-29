<template>

    <div>
      <h1>SING IN</h1>
      <div>
        <h3>E-mail</h3>
        <input type="text" placeholder="*****-mail.com" v-model="email" />
      </div>
      <div>
        <h3>Password</h3>
        <input type="text" placeholder="*********" v-model="password" />
      </div>
      <v-btn @click="login"
      color="red"
      elevation="9"
      x-large >
      SING IN!!
      </v-btn>
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
        .then(res => {
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
    