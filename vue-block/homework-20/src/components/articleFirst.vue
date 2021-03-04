<template>
  <div class="articleProject">
    <h2>{{title}}</h2>
    <p class="articleProject__text">{{text}}</p>
    <p class="views">Количество просмотров: <span  class="number">{{views}}</span></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'articleFirst',
  props: {
    title: String,
    text: String,
    views: Number,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articleProject {
  max-width: 300px;
  border: 1px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
h2 {
  margin: 40px 0 0;
  font-size: 28px;
  color: darkgreen;
}

.articleProject__text {
  margin: 20px 0;
  font-size: 18px;
  text-align: justify;
}
.views{
  font-size: 14px;
  text-align: right;
}

.number{
  font-size: 16px;
  color: darkcyan;
}
</style>
