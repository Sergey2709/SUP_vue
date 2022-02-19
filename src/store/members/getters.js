import * as getters from "./types/getters";

export default {
  [getters.GET_MEMBERS]: (state) => {
    return state.membersCount;
  },
  [getters.GET_NEW_MEMBER]: (state) => {
    return state.newMember;
  },
  [getters.GET_MEMBERS_ARR]: (state) => {
    return state.membersArr;
  },
  [getters.GET_LOADER1]: (state) => {
    return state.loaderState1;
  },
  [getters.GET_UNIQUE_EMAIL]: (state) => {
    return state.uniqueEmail;
  },
  [getters.GET_SOCIAL_VIEW]: (state) => {
    return state.socialsView;
  },
  [getters.GET_CONFIG_TW]: (state) => {
    return state.configTW;
  },
  [getters.GET_NEXT_LINK]: (state) => {
    return state.nextLink;
  }
};
