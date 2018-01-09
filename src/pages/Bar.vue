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
        }
    }
</script>

<style scoped>

</style>