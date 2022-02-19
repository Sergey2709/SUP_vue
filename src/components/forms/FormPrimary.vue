<template>
  <div :class="classForForm">
    <form @submit.prevent="submitFirstForm" class="sign-up col-xs-10 col-lg-8">
      <label for="firstName">Firstname</label>
      <div class="form-group d-flex justify-content-start">
        <input
          type="text"
          id="firstName"
          v-model="firstName"
          @input="firstNameInput"
        />
      </div>
      <div class="error" v-if="!$v.firstName.required && targetSubmit">
        Field is required
      </div>
      <div class="error" v-if="!$v.firstName.minLength">
        Name must have at least
        {{ $v.firstName.$params.minLength.min }} letters.
      </div>
      <div class="error" v-if="!$v.firstName.maxLength">
        Name must have at least
        {{ $v.firstName.$params.maxLength.max }} letters.
      </div>
      <label for="lastName">Lastname</label>
      <div class="form-group d-flex justify-content-start">
        <input
          type="text"
          id="lastName"
          v-model="lastName"
          @input="lastNameInput"
        />
      </div>
      <div class="error" v-if="!$v.lastName.required && targetSubmit">
        Field is required
      </div>
      <div class="error" v-if="!$v.lastName.minLength">
        Lastname must have at least
        {{ $v.lastName.$params.minLength.min }} letters.
      </div>
      <div class="error" v-if="!$v.lastName.maxLength">
        Lastname must have at least
        {{ $v.lastName.$params.maxLength.max }} letters.
      </div>
      <label for="birthday">Birthday</label>
      <div class="form-group d-flex justify-content-start">
        <input
          type="date"
          id="birthday"
          v-model="birthday"
          @input="birthdayInput"
        />
      </div>
      <div class="error" v-if="!$v.birthday.required && targetSubmit">
        Field is required
      </div>
      <label for="report">ReportSubject</label>
      <div class="form-group d-flex justify-content-start">
        <input type="text" id="report" :value="report" @input="reportInput" />
      </div>
      <div class="error" v-if="!$v.report.required && targetSubmit">
        Field is required
      </div>
      <label for="country" class="col-12">Country</label>
      <v-select
        v-model="selected"
        :options="GET_COUNTRIES.map((el) => el.name)"
        class="form-select col-12"
      />
      <div class="error" v-if="!$v.selected.required && targetSubmit">
        Field is required
      </div>

      <label for="phone">Phone</label>
      <phone-mask-input v-model="phone" showFlag id="phone" />
      <div class="error" v-if="!$v.phone.required && targetSubmit">
        Field is required
      </div>
      <label for="email" class="col-12">Email</label>
      <div class="form-group d-flex justify-content-start">
        <input type="email" v-model="email" id="email" @input="setEmail" />
      </div>
      <div class="error" v-if="!$v.email.required && targetSubmit">
        Field is required
      </div>
      <div class="error" v-if="this.$store.state.members.uniqueEmail">
        {{ this.$store.state.members.uniqueEmail }}
      </div>
      <div class="form-group d-flex justify-content-end submit-btn">
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
import { mapActions, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "FormPrimary",
  mixins: [validationMixin],
  data() {
    return {
      firstName: "",
      lastName: "",
      birthday: "",
      report: "",
      phone: "",
      email: "",
      selected: "",
      classForForm: "container d-flex align-items-center",
      targetSubmit: false,
    };
  },

  validations: {
    firstName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(30),
    },
    lastName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(30),
    },
    birthday: {
      required,
    },
    phone: {
      required,
    },
    report: {
      required,
    },
    selected: {
      required,
    },
    email: {
      required,
    },
  },

  computed: {
    ...mapGetters(["GET_COUNTRIES"]),
  },
  methods: {
    ...mapActions(["ADD_COUNTRIES", "ADD_MEMBERS", "CREATE_MEMBER"]),

    firstNameInput(e) {
      this.firstName = e.target.value;
      this.$v.firstName.$touch();
    },
    lastNameInput(e) {
      this.lastName = e.target.value;
      this.$v.lastName.$touch();
    },
    birthdayInput(e) {
      this.birthday = e.target.value;
      this.$v.birthday.$touch();
    },
    reportInput(e) {
      this.report = e.target.value;
      this.$v.report.$touch();
    },
    setEmail(e) {
      this.email = e.target.value;
      this.$v.email.$touch();
    },
    async submitFirstForm() {
      if (!this.$v.$invalid) {
        const selectedCountry = this.GET_COUNTRIES.find((el) => {
          return el.name === this.selected;
        });

        try {
          await this.CREATE_MEMBER({
            firstname: this.firstName,
            lastname: this.lastName,
            birthdate: this.birthday,
            report_subject: this.report,
            email: this.email,
            phone: this.phone,
            country_id: selectedCountry.id,
          });

          if (!this.$store.state.members.uniqueEmail) {
            this.classForForm = "d-none";
            this.$emit("submitFirstForm");
            this.targetSubmit = true;
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        this.targetSubmit = true;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("idNewUser")) {
      this.classForForm = "d-none";
      this.$emit("submitFirstForm");
    } else {
      this.ADD_COUNTRIES();
      this.ADD_MEMBERS();
    }
  },
};
</script>

<style lang="scss">
.container {
  flex-direction: column;
  .form-group {
    margin-bottom: 0 !important;
  }
  input {
    width: 100%;
    padding: 0 10px;
    height: 30px !important;
    border: 0.5px solid #333 !important;
    border-radius: 4px;
  }
  .form-select {
    height: 30px !important;
    margin: 0 !important;
    padding: 0;

    .vs__dropdown-toggle {
      height: 30px;
      width: 100%;
      padding: 0;
      border: 1px solid #333 !important;
      input {
        border: none !important;
      }
    }
    .vs__search {
      margin: 0;
      border: none;
    }
    .vs__clear {
      display: none;
    }
  }
  .flag {
    margin-left: 10px !important;
  }
  h2 {
    margin: 0 auto;
    text-align: center;
  }
  label {
    margin: 5px 0;
    padding: 0 !important;
  }
  p {
    margin: 0 !important;
  }
  .submit-btn {
    margin-top: 20px;
    border: none !important;
  }
  .error {
    color: red;
  }
}
</style>
