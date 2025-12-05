<script setup>
import { Icon } from '@iconify/vue';
defineProps(["imagem"]);



</script>

<template>
    <div class="card">
        <button><Icon icon="mdi:heart-outline" width="25" height="25" /></button>
        <img :src="imagem" alt="Imagem de paisagem">
    </div>

</template>

<style scoped lang="scss">
.card{
    width: 20vw;
    height: 65vh;
    position: relative;

    img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    button {
        position:absolute;
    }

}

</style>