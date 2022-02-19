<template lang="">
  <div id="main">
    <Map />
    <Members />
    <Form />
    <Social />
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import Members from "../components/Members.vue";
import Form from "../components/forms/Form.vue";
import Social from "../components/Social.vue";

export default {
  name: "Main",
  components: {
    Map,
    Members,
    Form,
    Social,
  },
};
</script>

<style scoped>
div {
  width: 100vw;
  padding-bottom: 30px;
}
</style>
