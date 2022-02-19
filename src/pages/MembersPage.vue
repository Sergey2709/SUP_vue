<template lang="">
  <div id="members-page" class="d-flex flex-column align-items-center">
    <table class="col-xs-10 col-md-8 m-auto table">
      <thead>
        <tr class="border bg-light">
          <th class="table-head avatar"><h4>Avatar</h4></th>
          <th class="table-head"><h4>Name</h4></th>
          <th class="table-head"><h4>Report</h4></th>
          <th class="table-head"><h4>Email</h4></th>
        </tr>
      </thead>
      <tr
        v-for="member in GET_MEMBERS_ARR"
        :key="member.name"
        class="border bg-light"
      >
        <th class="col-xs-10 col-md-2 photo-col">
          <img src="../assets/dummy.png" alt="user photo" />
          <!-- т.к. сервер не присылает ни урл, ни саму картинку, я решил не прописывать здесь v-if..., а вывести картинку хард-кодом -->
        </th>
        <th class="col-xs-10 col-md-3">
          <span>Name:&nbsp;</span>{{ member.firstname }} {{ member.lastname }}
        </th>
        <th class="col-xs-10 col-md-3">
          <span>Report:&nbsp;</span>{{ member.report_subject }}
        </th>
        <th class="col-xs-10 col-md-4">
          <span>Email:&nbsp;</span
          ><a :href="'mailto:' + member.email">{{ member.email }}</a>
        </th>
      </tr>
    </table>
    <div v-if="loaderSmallView" class="loader"></div>
    <div class="buttons d-flex col-12 justify-content-around">
      <button
        v-if="buttonView"
        @click="getThePage"
        class="buttons__next-btn btn col-2 bg-primary text-white border-0"
      >
        Load more
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MembersPage",
  data() {
    return {
      buttonView: true,
      loaderSmallView: false,
    };
  },
  computed: {
    ...mapGetters(["GET_MEMBERS_ARR", "GET_NEXT_LINK"]),
  },
  methods: {
    ...mapActions(["ADD_MEMBERS", "ADD_COUNTRIES", "ADD_MORE_MEMBERS"]),

    async getThePage() {
      this.loaderSmallView = !this.loaderSmallView;
      try {
        if (this.$store.state.members.nextLink) {
          await this.$store.dispatch(
            "ADD_MORE_MEMBERS",
            this.$store.state.members.nextLink
          );
          this.loaderSmallView = !this.loaderSmallView;
        } else {
          this.buttonView = !this.buttonView;
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
div#members-page {
  padding: 30px !important;

  .table {
    max-width: 70%;
  }
  .table-head {
    padding: 30px 20px;
  }
  span {
    display: none;
  }
  img {
    width: 100px;
  }
  table {
    margin: 30px;
  }
  .buttons {
    margin-top: 30px;

    .btn {
      height: 30px;
      padding: 0;
    }
  }
}

.loader {
  margin-top: 10px;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(lightgray, transparent);
  animation: rotating 1s linear infinite;
}
.loader::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background: white;
}
@keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@media (max-width: 1200px) {
  th {
    font-size: 14px;
  }
}
@media (max-width: 1100px) {
  #members-page {
    margin: 0 !important;
    table {
      max-width: 90% !important;
      th {
        font-size: 12px;
      }
      thead {
        display: none;
      }
      .photo-col {
        display: none;
      }
    }
  }
}

@media (max-width: 768px) {
  #members-page {
    margin: 0 !important;
  }
  table {
    max-width: 90% !important;
    th {
      padding-right: 0;
    }
  }

  span {
    display: inline-block !important;
  }
}

@media (max-width: 670px) {
  th {
    display: block;
  }
}
</style>
