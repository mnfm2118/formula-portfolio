<template>
  <div>
    <div id="editor"></div>

    <PdfExport></PdfExport>
    </div>
  </template>
  
  <script>
  import EditorJS from '@editorjs/editorjs'
import PdfExport from './PdfExport.vue'

  export default {
    name: "EditJs",
    data() {
        return {
            editor: null,
        };
    },
    //mounted() {
    //   this.editor = this.$editor.EditorJS({
    //     holder: 'editorjs',
    //     placeholder: 'No content',
    //     data: {},
    //   })
    // },
    methods: {
        // Editor.js関連
        doEditor() {
            console.log("Hello"),
                this.editor = new EditorJS({
                    holder: "editor",
                });
        }
    },
    mounted() {
        this.doEditor();
    },
    components: { PdfExport }
}
  </script>