<template>
  <div class="buttonProject">
    <h2>Кнопочка</h2>
    <button class="buttonProject__hw20">{{text}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'buttonFirst',
  props: {
    text: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
  font-size: 28px;
  color: darkgreen;
}
.buttonProject__hw20 {
  font-size: 18px;
  line-height: 24px;
  background-color: antiquewhite;
  border-color:darkgreen;
  border-radius: 8px;
  border-width: 1px;
  padding: 15px 30px;
  margin: 20px 0;
}

.buttonProject__hw20:hover {
  background-color: rgb(245, 208, 160);
}
</style>
