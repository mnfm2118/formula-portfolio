<template>
    <div class="text">
      <div class="content" v-for="i in 1" :key=i>
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextEditor',
    data () {
      return {
        name: 'テキスト編集',
        text: '文字・数式を入力'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  div.text {
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