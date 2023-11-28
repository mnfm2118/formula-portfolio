<template>

  <button class="btn btn-primary pl-5 pr-5" @click="createPDF">Download PDF</button>

</template>

<script>
import { JsPDF } from 'jspdf';

export default {
  methods: {
    createPDF() {
      const doc = new JsPDF();
      document.getElementById('editor');
      const text = document.getElementById('editor').innerText;
      doc.text(text, 10, 10);
      doc.save('sample.pdf');
    },
  },
  name: 'PdfExport',
};
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
