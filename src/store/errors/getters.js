import * as getters from "./types/getters";

export default {
  [getters.GET_ERROR_TEXT]: (state) => {
    return state.errorText;
  },
};
