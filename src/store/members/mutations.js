import * as mutations from "./types/mutations";

export default {
  [mutations.SET_MEMBERS_COUNT]: (state, payload) => {
    state.membersCount = payload;
  },
  [mutations.SET_MEMBERS_ARR]: (state, payload) => {
    state.membersArr = [...state.membersArr, ...payload];
  },
  [mutations.SET_NEW_MEMBER_ID]: (state, payload) => {
    state.newMemberID = payload;
  },
  [mutations.SET_UNIQU_EMAIL]: (state, payload) => {
    state.uniqueEmail = payload;
  },
  [mutations.SET_LOADER1]: (state, payload) => {
    state.loaderState1 = payload;
  },
  [mutations.SET_SOCIAL_VIEW]: (state, payload) => {
    state.socialsView = payload;
  },
  [mutations.SET_CONFIG_TW]: (state, payload) => {
    state.configTW = payload;
  },
  [mutations.SET_NEXT_LINK]: (state, payload) => {
    state.nextLink = payload;
  },
};
