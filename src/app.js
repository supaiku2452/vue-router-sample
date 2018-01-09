import Vue from "vue";
import VueRouter from "vue-router";

import Main from "./component/Main.vue";
import Home from "./pages/Home.vue";
import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";

// Element
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/ja";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueRouter);
Vue.use(Element, {locale});

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/foo", name: "foo", component: Foo },
    { path: "/bar", name: "bar", component: Bar }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: "#main",
    components: {
        mainComponent: Main,
    },
    template: "<mainComponent></mainComponent>",
    router
}).$mount("#main");