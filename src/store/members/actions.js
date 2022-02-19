import * as actions from "./types/actions";
import * as mutations from "./types/mutations";
import axios from "axios";
import urls from "../helpers/api-urls";
import router from "@/router";

import * as mutationsError from "../errors/types/mutations";

import * as config from "../helpers/configTW";

export default {
  [actions.ADD_MEMBERS]({ commit }) {
    return axios
      .get(urls.getMembers)
      .then((response) => {
        if (response) {
          commit(mutations.SET_LOADER1, false);
          commit(mutations.SET_NEXT_LINK, response.data.next_page_url);
          const loaderState = !this.state.members.loaderState1;
          commit(mutations.SET_LOADER1, loaderState);
          commit(mutations.SET_MEMBERS_COUNT, response.data.total);
          commit(mutations.SET_MEMBERS_ARR, response.data.data);
          return response.data.total, response.data.data, loaderState;
        }
      })
      .catch((error) => {
        commit(mutationsError.SET_ERROR_TEXT, error.message);
        router.push({ name: "Error" });
        return error;
      });
  },
  [actions.ADD_MORE_MEMBERS]({ commit }, link) {
    return axios
      .get(link)
      .then((response) => {
        commit(mutations.SET_NEXT_LINK, response.data.next_page_url);
        commit(mutations.SET_MEMBERS_ARR, response.data.data);
      })
      .catch((error) => {
        commit(mutationsError.SET_ERROR_TEXT, error.message);
        router.push({ name: "Error" });
        return error;
      });
  },
  [actions.CREATE_MEMBER]({ commit }, data) {
    return axios
      .post(urls.getMembers, data)
      .then((response) => {
        commit(mutations.SET_NEW_MEMBER_ID, response.data.member.id);
        commit(mutations.SET_UNIQU_EMAIL, "");
        localStorage.setItem("idNewUser", `${response.data.member.id}`);
      })
      .catch((error) => {
        if (error.response.data.errors.email) {
          commit(
            mutations.SET_UNIQU_EMAIL,
            ...error.response.data.errors.email
          );
          return;
        }
        commit(mutationsError.SET_ERROR_TEXT, error.message);
        router.push({ name: "Error" });
        return error;
      });
  },
  [actions.PATCH_MEMBER]({ commit }, data) {
    const file = new FormData();
    file.append("file", data.user.photo);
    return axios
      .patch(urls.patchMember + data.id, file)
      .then((response) => {
        commit(mutations.SET_NEW_MEMBER_ID, response.data.member.id);
      })
      .catch((error) => {
        router.push({ name: "Error" });
        commit(mutationsError.SET_ERROR_TEXT, error.message);
        return error;
      });
  },
  CHANGE_SOCIAL_VIEW({ commit }) {
    commit(mutations.SET_SOCIAL_VIEW, !this.state.members.socialsView);
  },
  ADD_CONFIG_TW({ commit }) {
    commit("SET_CONFIG_TW", config);
  },
};
