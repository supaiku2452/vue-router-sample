<template>
    <div>
        <p>
            <router-link :to="{name: 'home'}">Go to Home</router-link>
            <router-link :to="{name: 'foo'}">Go to Foo</router-link>
            <router-link :to="{name: 'bar', params: { param: 'barbarbar'}}">Go to Bar</router-link>
        </p>

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