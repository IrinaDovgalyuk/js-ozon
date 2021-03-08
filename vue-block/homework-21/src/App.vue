<template>
  <div id="app">
    <Cookie msg="Welcome to Cookie Clicker!"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cookie from './components/Cookie.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Cookie,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
