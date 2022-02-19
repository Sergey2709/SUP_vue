import * as actions from "./types/actions";
import * as mutations from "./types/mutations";
import axios from "axios";
import urls from "../helpers/api-urls";
import router from "@/router";

import * as mutationsError from "../errors/types/mutations";

export default {
  [actions.ADD_COUNTRIES]({ commit }) {
    return axios
      .get(urls.getCountries)
      .then((response) => {
        commit(mutations.SET_LOADER2, false);
        const countries = response.data?.countries || [];
        commit(mutations.SET_COUNTRIES, countries);
        commit(mutations.SET_LOADER2, !this.state.countries.loaderState2);
        return countries;
      })
      .catch((error) => {
        commit(mutationsError.SET_ERROR_TEXT, error.message);
        router.push({ name: "Error" });
        return error;
      });
  },
};
