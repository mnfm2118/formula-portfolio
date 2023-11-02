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

  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { app } from "../firebase";
  import router from '../router';
  import { useSessionStore } from '../stores/session';

  const auth = getAuth(app);
  const store = useSessionStore();


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
          // store.login() 
          console.log(res); 
          router.push({ path: '/edit_js' });
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
    