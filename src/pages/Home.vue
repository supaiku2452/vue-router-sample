<template>
    <div>
        <el-main>
            <h3>Home</h3>
            <ul v-for="d in data">
                <li>{{ d }}</li>
            </ul>
        </el-main>
        <div>
            <el-main>
                <el-button-group>

                    <el-button @click="increment" type="primary" icon="el-icon-caret-top" round="">increment</el-button>
                    <el-button @click="decrement" type="primary" icon="el-icon-caret-bottom" round="">decrement</el-button>
                </el-button-group>

                {{ count }}
            </el-main>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home.vue",
        data() {
            return {
                data: [
                    "hoge","fuga","hage"
                ]
            }
        },
        methods: {
            increment() {
                this.$store.commit("add");
            },
            decrement() {
                this.$store.commit("remove");
            }
        },
        computed: {
            count() {
                return this.$store.state.count;
            }
        }
    }
</script>

<style scoped>

</style>