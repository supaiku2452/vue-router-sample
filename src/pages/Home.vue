<template>
    <div>
        <el-main>
            <h3>Home</h3>
            <ul v-for="d in data">
                <li>{{ d }}</li>
            </ul>
        </el-main>
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
        }
    }
</script>

<style scoped>

</style>