import Vue from "vue";
import Main from "./component/Main.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = { template: "<div>This is Home</div>"}
const Foo = { template: "<div>This is Foo</div>"};
const Bar = { template: "<div>This is Bar {{ $route.params.name }}</div>"};

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/foo", name: "foo", component: Foo},
    { path: "/bar/:name", name: "bar", component: Bar}
]

const router = new VueRouter({
    routes
});

new Vue({
    el: "#main",
    components: {
        mainComponent: Main
    },
    template: "<mainComponent></mainComponent>",
    router
}).$mount("#main");