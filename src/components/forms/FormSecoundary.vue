<template>
  <div v-if="viewIfSubmitted" :class="classForForm">
    <form
      @submit.prevent="submitSecoundForm"
      id="secoundForm"
      class="sign-up col-xs-10 col-lg-8"
    >
      <label for="company">Company</label>
      <div class="form-group d-flex justify-content-start">
        <input
          type="text"
          id="company"
          v-model="company"
          @input="companyInput"
        />
      </div>
      <label for="position">Position</label>
      <div class="form-group d-flex justify-content-start">
        <input
          type="text"
          id="position"
          v-model="position"
          @input="positionInput"
        />
      </div>
      <label for="about">AboutYou</label>
      <div class="form-group d-flex justify-content-start">
        <textarea
          rows="2"
          form="secoundForm"
          id="about"
          v-model="about"
          @input="aboutInput"
          class="col-12"
        />
      </div>
      <label>Add GIF, JPEG or PNG:</label>
      <div class="form-group d-flex justify-content-start load-file">
        <input type="file" @change="loadFile" />
        <img v-if="previewUrl" id="preview" :src="previewUrl" />
      </div>
      <div class="form-group d-flex justify-content-end">
        <input
          type="submit"
          value="NEXT"
          class="col-4 bg-primary text-white submit-btn"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormSecoundary",
  data() {
    return {
      company: "",
      position: "",
      about: "",
      photo: null,
      classForForm: "d-none secound-form",
      previewUrl: null,
      viewIfSubmitted: true,
    };
  },

  methods: {
    companyInput(e) {
      this.company = e.target.value;
      this.newUser2.company = e.target.value;
    },
    positionInput(e) {
      this.position = e.target.value;
      this.newUser2.position = e.target.value;
    },
    aboutInput(e) {
      this.about = e.target.value;
      this.newUser2.about = e.target.value;
    },
    loadFile(e) {
      const file = e.target.files[0];

      if (!file) return;

      this.photo = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        this.previewUrl = reader.result;
      });
    },
    submitSecoundForm() {
      this.$store.dispatch("PATCH_MEMBER", {
        user: {
          company: this.company,
          position: this.position,
          about: this.about,
          photo: this.photo,
        },
        id: localStorage.getItem("idNewUser"),
      });
      const formSecoundary = document.querySelector(".secound-form");
      formSecoundary.classList = "d-none";
      this.$store.dispatch("CHANGE_SOCIAL_VIEW");
      localStorage.setItem("formSubmit", "yeah!");
    },
  },
  mounted() {
    if (localStorage.getItem("formSubmit")) {
      this.viewIfSubmitted = false;
      this.$store.dispatch("CHANGE_SOCIAL_VIEW");
    }
  },
};
</script>
<style lang="scss" scoped>
textarea {
  resize: none !important;
  border: 1px solid #333;
  border-radius: 4px;
}
.load-file {
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  height: 100px;
  align-items: center !important;
  @media (max-width: 460px) {
    flex-direction: column;
    height: 150px;
  }
  input {
    border: none !important;
  }
}
#preview {
  height: 60px;
  @media (max-width: 460px) {
    margin-top: 15px;
  }
}
</style>
