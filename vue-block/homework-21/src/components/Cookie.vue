<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <img @click="onCookieClick" src="../assets/PerfectCookie.png" alt="" class="cookieImg">
    <p class="cookieClicks">Our cookies: {{counter}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Cookie',
  props: {
    msg: String,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onCookieClick() {
      this.counter += 1;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0;
  font-size: 32px;
  color: saddlebrown;
}

.cookieImg {
  height: 250px;
  width: 250px;
  cursor: pointer;
}

.cookieImg:hover {
  transform: scale(1.03, 1.03);
}
.cookieImg:active {
  transform: scale(0.97, 0.97);
}

.cookieClicks {
  font-size: 22px;
  color: saddlebrown;
}
</style>
