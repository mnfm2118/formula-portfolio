<template>
  <div class="text">
    <div>
      <ul>
        <li
        v-for= "(i,index) in this.docs" 
        :key = index >
          <v-btn @click = "loadDocument(index)">
            {{ i.body.blocks[0].id }}
          </v-btn>
        </li>
      </ul>
    </div>

    <EditJs ref="EditJs" :document = document></EditJs>

  </div>
</template>
  
<script>
 import app from "../firebase";
 import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
 import EditJs from "./EditJs";
 import { useSessionStore } from "../stores/session";


  const db = getFirestore(app)



  export default {
   
    name: 'SaveData',
    components: {
      EditJs
    },
    data () {
      return {
        docs:[],
        document:{}
      }
    },
    methods: {
      async getdocuments() {
        const store = useSessionStore();
        const q = query(collection(db, "documents"), where("uid", "==",store.user.uid ));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.docs.push(doc.data()); 
        });
      },
      loadDocument(index) {
        
        this.document = this.docs[index].body;
        this.$refs.EditJs.sync();

      }
    },
    mounted () {
      this.getdocuments()
    }
  }
</script>