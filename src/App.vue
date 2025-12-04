<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
<Header />
<router-link to="/login"></router-link>
<router-link to="/home"></router-link>
<router-link to="/galeria"></router-link>
<router-link to="/search"></router-link>
<router-link to="/favoritos"></router-link>

<RouterView />


</template>

<style scoped lang="scss">
</style>
