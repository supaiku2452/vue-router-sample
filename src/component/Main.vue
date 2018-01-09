<template>
    <div>
        <el-header>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link :to="{name: 'home'}" tag="span">Go to Home</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{name: 'foo'}" tag="span">Go to Foo</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link :to="{name: 'bar', params: { param: 'barbarbar'}}" tag="span">Go to Bar</router-link>
                </el-menu-item>
            </el-menu>
        </el-header>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "main.vue",
    }
</script>


<style scoped>

</style>