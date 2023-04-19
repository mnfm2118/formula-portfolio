<template>
    <div class="help">
      <div class="content" v-for="i in 1" :key=i>
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelpPage',
    data () {
      return {
        name: 'help',
        text: '使用方法・お問い合わせ'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  div.help {
    text-align: center;
  }
  
  div.content {
    background-color: #eee;
    display: inline-block;
    margin: 10px;
    width: 30%;
  }
  
  h3 {
    color: red;
  }
  
  p {
    width: 90%;
    display: inline-block;
    text-align: left;
  }
  
  </style>