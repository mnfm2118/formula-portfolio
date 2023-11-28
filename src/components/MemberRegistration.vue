<template>
    <div class="member">
      <div class="content" v-for="i in 1" :key=i>
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div>
    </div>
  </template>

<script>
export default {
  name: 'MemberRegistration',
  data() {
    return {
      name: '会員登録',
      text: 'お名前・お名前（カナ）・メールアドレス・パスワード・生年月日・性別・職業',
    };
  },
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  div.member {
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
