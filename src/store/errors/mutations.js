import * as mutations from "./types/mutations";

export default {
  [mutations.SET_ERROR_TEXT]: (state, payload) => {
    state.errorText = payload;
  },
};
