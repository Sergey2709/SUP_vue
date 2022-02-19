import VueRouter from "vue-router";

import Main from "../pages/Main";
import MembersPage from "../pages/MembersPage";
import ErrorPage from "../pages/ErrorPage";

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Main },
    { path: "/members", name: "Members", component: MembersPage },
    { path: "/error", name: "Error", component: ErrorPage },
  ],
});
