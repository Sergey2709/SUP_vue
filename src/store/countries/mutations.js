import * as mutations from "./types/mutations";

export default {
  [mutations.SET_COUNTRIES]: (state, payload) => {
    state.countries = payload;
  },
  [mutations.SET_LOADER2]: (state, payload) => {
    state.loaderState2 = payload;
  },
};
