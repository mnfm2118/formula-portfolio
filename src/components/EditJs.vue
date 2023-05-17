<template>
    <div id="codex-editor"></div>
  </template>
  
  <script>
  import EditorJS from '@editorjs/editorjs'

  export default {
    name: 'EditJs',

    data() {
      return {
        editor: null,
      }
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
      this.editor = new  EditorJS({
        holder: 'codex-editor',
      })
    }  
  },
  mounted() {
    this.doEditor()
  }
  }
  </script>