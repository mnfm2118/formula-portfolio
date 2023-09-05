<template>
    <div class="text">
      <div>
        <ul>
            <li v-for="i in this.docs" :key=i >{{ i }}</li>
        </ul>
    </div>
    </div>
  </template>
  
  <script>
 import { app } from "../firebase";
 import { getFirestore } from "firebase/firestore";

const db = getFirestore(app)



  export default {
   
    name: 'SaveData',
    data () {
      return {
        docs:[1, 2, 3]
      }
    },
    methods: {
    async getdocuments() {
        const querySnapshot = await db.collection('documents')
        .where('uid', '==', '')
  .get()
console.log(querySnapshot.size)
console.log(querySnapshot.empty)
querySnapshot.forEach((postDoc) => {
  console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()))
})
    }
},
mounted () {
    this.getdocuments()
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