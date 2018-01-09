<template>
    <div>
        <el-main>
            <h3>Foo</h3>
            <el-form>
                <el-form-item label="DatePicker Component">
                    <el-date-picker
                        type="date"
                        v-model="date"
                        placeholder="select date">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="Select Component">
                    <el-select v-model="select">
                        <el-option v-for="s in select_data" v-bind:label="s.label" v-bind:value="s.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col v-bind:span="6" v-for="player in player_data">
                            <el-card>
                                <div slot="header">
                                    <span>{{ player.name }}</span>
                                </div>
                                <div>Rank : {{ player.rank }}</div>
                                <div>Score : {{ player.score }}</div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-button type="primary" icon="el-icon-success">Submit</el-button>
            </el-form>
        </el-main>
    </div>
</template>

<script>
    export default {
        name: "foo.vue",
        data() {
            return {
                date: "",
                select: "",
                select_data: [
                    {id: 1, label: "Select Item 1", value: "item1"},
                    {id: 2, label: "Select Item 2", value: "item2"},
                    {id: 3, label: "Select Item 3", value: "item3"},
                ],
                player_data: [
                    {id: 1, name: "hoge", rank: 1, score: 1},
                    {id: 2, name: "fuga", rank: 2, score: 2},
                    {id: 3, name: "hage", rank: 3, score: 3},
                ]
            }
        }
    }
</script>

<style scoped>

</style>