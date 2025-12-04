<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";

const search = ref("");

const palavras = ["praia", "neve", "flores", "montanhas", "cidades", "animais"];
let palavraAtual = 0; 
let caractereAtual = 0; 

const placeholder = ref('busque ""'); // sempre começa com busque ""

let intervaloDigitacao;

function startTyping() {
    clearInterval(intervaloDigitacao);
    caractereAtual = 0;
    const palavraescrita = palavras[palavraAtual]; 

    intervaloDigitacao = setInterval(() => {
        placeholder.value = `busque "${palavraescrita.slice(0, caractereAtual)}"`;
        caractereAtual++;

        if (caractereAtual > palavraescrita.length) {
            clearInterval(intervaloDigitacao);

            setTimeout(() => {
                palavraAtual = (palavraAtual + 1) % palavras.length;
                startTyping();
            }, 1200);
        }
    }, 90);
}

onMounted(() => { 
    startTyping();
});

function handleEnter(e) {
    if (e.key === "Enter") { // Verifica se a tecla pressionada é Enter
        console.log("Buscando:", search.value);
    }
}
</script>

<template>
    <header>
        <img src="../assets/logo.svg" alt="logo" />

        <div class="search-box">
            <Icon icon="mdi-light:magnify" class="search-icon" />
            <input type="text" v-model="search" :placeholder="placeholder" @keypress="handleEnter" />
        </div>

        <nav>
            <ul>
                <li><router-link to="/">Início</router-link></li>
                <li><router-link to="/galeria">Galeria</router-link></li>
                <li><router-link to="/favoritos">Favoritos</router-link></li>
                <li>
                    <router-link to="/login">
                        <Icon icon="mdi-light:account" width="40" height="30" color="#E1306C" />
                    </router-link>
                </li>
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
}

img {
    height: 50px;
    margin-left: 2rem;
}

nav ul {
display: flex;
    align-items: center;
    gap: 2.5rem;
    list-style: none;

a {
    text-decoration: none;
    color: black;
}

li {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
    transform: scale(1.02);
    }
}
}

.search-box {
    position: absolute;
    left: 50%;
}

.search-box input {
    width: 260px;
    padding: 10px 16px 10px 42px;
    border-radius: 10px;
    border: 1px solid #ddd;
    outline: none;
    transition: 0.2s ease;

    &:focus {
        border-color: #E1306C;
        box-shadow: 0 0 0 2px rgba(225, 48, 108, 0.15);
    }
}

.search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #666;
}
</style>
