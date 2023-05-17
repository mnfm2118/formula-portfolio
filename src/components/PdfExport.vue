<template>
    <!-- <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div> -->
  
    <button class="btn btn-primary pl-5 pr-5" @click="createPDF">Download PDF</button>
<!--   
    <div id="app">
      <tab-menu></tab-menu>
      <router-view/>
    </div> -->
  </template>
  
  <script>
  //import HelloWorld from './components/HelloWorld.vue'
  import { jsPDF } from 'jspdf'
  // export default {
  //   name: 'App',
  //   components: {
  //     HelloWorld
  //   }
  // }
  export default {
    methods: {
    createPDF() {
      // let pdfName = 'test'; 
      var doc = new jsPDF();
      doc.text("Hello World", 10, 10);
      doc.save('sample' + '.pdf');
    }
  },
    name: 'PdfExport'
    //, components: {
    //   TabMenu
    // }
  } 
  </script>
  
  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  