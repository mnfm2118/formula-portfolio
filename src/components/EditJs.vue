<template>
  <div>
    <div style=
    "padding: 10px;
    marigin-bottom: 10px;
    border: 1px solid #333333;"
    >
    <div id="editor"></div>
  </div>

    {{ this.document }}
    <PdfExport></PdfExport>

    <button class="btn btn-primary pl-5 pr-5" @click="saveDocument">SAVE</button>
  </div>

</template>

<script>
import { getFirestore, collection, addDoc , updateDoc} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import PdfExport from './PdfExport.vue';
import app from '../firebase';
import doEditor from '../plugins/editor';
import { useSessionStore } from '../stores/session';

const db = getFirestore(app);

export default {
  name: 'EditJs',

  setup() {
    const store = useSessionStore();
    return { store };
  },

  props: {
    document: Object,
  },
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
      const outputData = await this.editor.save();
      ['time', 'version'].forEach((e) => delete outputData[e]);
      const docRef = await addDoc(collection(db, 'documents'), {
        body: outputData,
        uid: getAuth(app).currentUser.uid,
      });
      alert(docRef.id);

      const washingtonRef = doc(db, "documents", "DC");

      await updateDoc(washingtonRef, {
        capital: true
      });
    },
    sync() {
      this.editor = doEditor(this.document);
    },
  },
  mounted() {
    this.editor = doEditor(this.document);
  },
  components: { PdfExport },
};
</script>
