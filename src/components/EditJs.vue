<template>
  <div>
    <div style=
    "padding: 10px;
    marigin-bottom: 10px;
    border: 1px solid #333333;"
    >
    <div id="editor"></div>
  </div>
    <PdfExport></PdfExport>
  </div>

</template>

<script>
import PdfExport from './PdfExport.vue';
import doEditor from '../plugins/editor';

export default {
  name: 'EditJs',
  mounted() {
    doEditor();
  },
  components: { PdfExport },
};
</script>
