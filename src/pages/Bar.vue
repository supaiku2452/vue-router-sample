<template>
    <div>
        <el-main>
            <h3>Bar</h3>
            <el-table
                    v-bind:data="tableData"
            >
                <el-table-column type="index">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Name"
                >
                </el-table-column>
                <el-table-column
                    prop="age"
                    label="Age"
                >
                </el-table-column>
            </el-table>

            <div>
                <el-main>
                    <el-button-group>

                    <el-button @click="increment" type="primary" icon="el-icon-caret-top" round="">increment</el-button>
                    <el-button @click="decrement" type="primary" icon="el-icon-caret-bottom" round="">decrement</el-button>
                    </el-button-group>

                    {{ count }}
                </el-main>
            </div>
        </el-main>
    </div>
</template>

<script>
    export default {
        name: "bar.vue",
        data() {
            return {
                tableData: [
                    {id:1, name: "hoge", age: 20},
                    {id:2, name: "fuga", age: 30},
                    {id:3, name: "hage", age: 40},
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