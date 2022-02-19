<template lang="">
  <div v-if="GET_SOCIAL_VIEW" class="container d-flex align-items-center">
    <div class="col-xs-10 col-lg-8 d-flex justify-content-between">
      <ShareNetwork
        :network="GET_CONFIG_TW.default.network"
        :url="GET_CONFIG_TW.default.url"
        :title="GET_CONFIG_TW.default.title"
        :twitter-user="GET_CONFIG_TW.default.user"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <linearGradient
            id="_osn9zIN2f6RhTsY8WhY4a"
            x1="10.341"
            x2="40.798"
            y1="8.312"
            y2="38.769"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1" stop-color="#385c8e" />
          </linearGradient>
          <path
            fill="url(#_osn9zIN2f6RhTsY8WhY4a)"
            d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758 c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582 c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322 c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419 c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963 c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41 c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
          />
        </svg>
      </ShareNetwork>
      <ShareNetwork
        network="facebook"
        url="https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h"
        title="Check out this Meetup with SoCal\! "
        quote="Check out this Meetup with SoCal\! "
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          width="48px"
          height="48px"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <path
            style="fill: #385c8e"
            d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159  c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44  c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0  c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0  c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258  v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"
          />
        </svg>
      </ShareNetwork>
      <a
        className="ms-2"
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=About+Our+Coferention&body=Check out this Meetup with SoCal\!&ui=2&tf=1&pli=1"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
            fill="#385c8e"
          />
        </svg>
      </a>
    </div>
    <hr />
    <router-link
      to="/members"
      class="d-flex justify-content-center col-2 members-link"
    >
      <button
        @click="buttonHandler"
        class="col-12 bg-primary text-white submit-btn"
      >
        NEXT
      </button>
    </router-link>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Social",
  data() {
    return {
      classForSocial: "",
    };
  },
  methods: {
    ...mapActions(["ADD_MEMBERS", "ADD_CONFIG_TW"]),
    buttonHandler() {
      this.ADD_MEMBERS();
      this.$store.dispatch("CHANGE_SOCIAL_VIEW");
      localStorage.clear();
    },
  },
  computed: {
    ...mapGetters(["GET_MEMBERS_ARR", "GET_SOCIAL_VIEW", "GET_CONFIG_TW"]),
  },
  mounted() {
    this.$store.dispatch("ADD_CONFIG_TW");
  },
};
</script>
<style lang="scss" scoped>
.social-container {
  padding: 50px;
}

button.submit-btn {
  padding: 5px;
  border-radius: 4px;
  @media (max-width: 460px) {
    padding: 0 !important;
  }
}
.members-link {
  padding: 0;
}
hr {
  width: 100% !important;
  border: 1px solid #f3f3f3;
}
</style>
