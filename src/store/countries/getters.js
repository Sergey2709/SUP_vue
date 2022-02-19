import * as getters from "./types/getters";

export default {
  [getters.GET_COUNTRIES]: (state) => {
    return state.countries;
  },
  [getters.GET_LOADER2]: (state) => {
    return state.loaderState2;
  },
};
