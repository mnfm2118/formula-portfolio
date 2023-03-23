<template>
    <div class="login">
      <div class="content" v-for="i in 1" :key=i>
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data () {
      return {
        name: 'ログイン',
        text: 'メールアドレス・パスワード'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  div.login {
    text-align: center;
  }
  
  div.content {
    background-color: #eee;
    display: inline-block;
    margin: 10px;
    width: 30%;
  }
  
  h3 {
    color: white;
  }
  
  p {
    width: 90%;
    display: inline-block;
    text-align: left;
  }
  
  </style>