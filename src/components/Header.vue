<script setup>
import { Icon } from '@iconify/vue';

</script>

<template>
    <header>
        <img src="../assets/logo.svg" alt="">

        <nav>
            <ul>
                <li><router-link to="/search">
                    <Icon icon="mdi-light:magnify" width="30" height="30" />
                </router-link></li>
                <li><router-link to="/">
                    Início
                </router-link></li>
                <li><router-link to="/galeria">
                    Galeria
                </router-link></li>
                <li><router-link to="/favoritos">
                    Favoritos
                </router-link></li>
                <li><router-link to="/login">
                    <Icon icon="mdi-light:account" width="40" height="30" color="#E1306C" />
                </router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.2rem;

    img{
        height: 50px;
        margin-left: 2rem;

    }

    nav{
        height: 100%;
    }

    ul{
        display: flex;
        align-items: center;
        gap: 3.2rem;
        list-style: none;
        text-decoration: none;
        font-size: 17px;

        li{
            cursor: pointer;
            transition: all 0.3s ease; 
            &:hover{
                transform: scale(1.04);
            }
        }
        a{
            text-decoration: none;
            color: black;

        }
    
}
}
</style>