<template>
  <div>
    <FormPrimary @submitFirstForm="openSecoundForm" />
    <FormSecoundary :class="classForForm" />
  </div>
</template>
<script>
import FormPrimary from "./FormPrimary.vue";
import FormSecoundary from "./FormSecoundary.vue";
export default {
  name: "Form",
  data() {
    return {
      classForForm: "",
    };
  },
  components: {
    FormPrimary,
    FormSecoundary,
  },
  methods: {
    openSecoundForm() {
      this.classForForm = "container d-flex align-items-center";
      this.$emit("submitSecoundForm");
    },
  },
};
</script>
<style></style>
