<template lang="">
  <div class="container d-flex justify-content-center"><h2>{{GET_ERROR_TEXT}}</h2></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ErrorPage",

  computed: {
    ...mapGetters(["GET_ERROR_TEXT"]),
  },
};
</script>
<style lang=""></style>
