import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const Button = () => import('../packages/Button')


var routes = [
  {
    path: "/button",
    name: "button",
    component: Button,
    meta: {
      title: "账号登录"
    }
  },
]
export default new Router({
  base: './',
  routes,
  mode: "history"
});