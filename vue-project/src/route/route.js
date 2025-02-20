import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Reactives from "../components/Reactives.vue";
import Biding from "../components/Biding.vue";
import Props from "../components/Props.vue";
import ReciveE from "../components/ReciveE.vue";
import Effect from "../components/Effect.vue";
import IfElse from "../components/IfElse.vue";
import List from "../components/List.vue";
import Container from "../components/Container.vue";
import Api from "../components/Api.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/reactives", name: "Reactives", component: Reactives },
  { path: "/biding", name: "Biding", component: Biding },
  {
    path: "/props",
    name: "Props",
    component: Props,
    props: {
      title: "Title",
      subtitle: "subtitle",
      content: "content",
    },
  },
  { path: "/reciveE", name: "ReciveE", component: ReciveE },
  { path: "/effect", name: "Effect", component: Effect },
  { path: "/ifelse", name: "IfElse", component: IfElse },
  { path: "/list", name: "List", component: List },
  { path: "/children", name: "Children", component: Container },
  { path: "/api", name: "api", component: Api },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
