<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <Tab-menu />
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>

import TabMenu from './components/TabMenu.vue';

export default {
  name: 'App',
  components: {
    TabMenu,
  },
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
