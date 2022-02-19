<template>
  <div id="app">
    <loader
      v-if="!GET_LOADER1 && !GET_LOADER2"
      object="#ff9633"
      color1="#ffffff"
      color2="#17fd3d"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      name="circular"
    ></loader>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["GET_LOADER1", "GET_LOADER2"]),
  },
  methods: {
    ...mapActions(["ADD_MEMBERS", "ADD_COUNTRIES"]),
  },
  mounted() {
    this.ADD_MEMBERS();
    this.ADD_COUNTRIES();
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
