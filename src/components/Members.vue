<template lang="">
  <div class="container d-flex align-items-center">
    <h2 class="col-8 title">
      To participate in the conference, please fill out the form
    </h2>
    <router-link to="/members" class="members-link"
      >All members: ({{ GET_MEMBERS }})</router-link
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Members",

  computed: {
    ...mapGetters(["GET_MEMBERS"]),
  },
};
</script>

<style lang="scss" scoped>
div {
  padding-top: 30px;

  .members-link {
    color: black !important;
  }
  h2.title {
    @media (max-width: 900px) {
      font-size: 24px !important;
    }
  }
}
</style>
