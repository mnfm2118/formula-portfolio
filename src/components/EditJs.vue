<template>
  <div>
    <div id="editor"></div>

    <PdfExport></PdfExport>

    <button class="btn btn-primary pl-5 pr-5" @click="saveDocument">SAVE</button>
    </div>
  </template>
  
<script>
  import EditorJS from '@editorjs/editorjs'
  import PdfExport from './PdfExport.vue'
  import { app } from "../firebase";
  import { getFirestore, collection, addDoc } from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  import doEditor from '../plugins/editor'

  const db = getFirestore(app);

  export default {
    name: "EditJs",
    data() {
        return {
            editor: null,
        };
    },

    methods: {
    //     doEditor() {
    //             this.editor = new EditorJS({
    //             holder: "editor",
    //             });
      // },
      async saveDocument() {
        const body = document.getElementById("editor")
        const docRef = await addDoc(collection(db, "documents"), {
          body: body.outerHTML,
          uid: getAuth(app).currentUser.uid
        });
        alert(docRef.id);      
      }
    },
    mounted() {
        doEditor();
    },
    components: { PdfExport }
  }
</script>