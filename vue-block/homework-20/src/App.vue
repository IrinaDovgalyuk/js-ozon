<template>
  <div id="app">
    <buttonFirst text="Кликни на меня"/>
    <articleFirst title="Моя первая статья" text="Lorem ipsum dolor sit amet consecte" :views="2" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import buttonFirst from './components/buttonFirst.vue';
import articleFirst from './components/articleFirst.vue';

export default Vue.extend({
  name: 'App',
  components: {
    buttonFirst,
    articleFirst,
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
