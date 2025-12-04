<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function login() {
    if (!email.value || !password.value) {
        alert("Preencha todos os campos!")
        return
    }

    // Simulação de login
    alert("Login realizado com sucesso!")
    router.push("/") // volta para home após login
}
</script>

<template>
    <div class="login-container">
        <div class="login-box">
            <h2>Entrar</h2>

            <label>Email</label>
            <input type="email" v-model="email" placeholder="Digite seu email" />

            <label>Senha</label>
            <input type="password" v-model="password" placeholder="Digite sua senha" />

            <button @click="login">Entrar</button>

            <p class="register">
                Ainda não tem conta?
                <a href="#">Criar conta</a>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.login-box {
    width: 350px;
    background: white;
    padding: 2.5rem;
    border-radius: 14px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        margin-bottom: 1rem;
        text-align: center;
    }

    label {
        font-size: 15px;
        margin-top: 10px;
    }

    input {
        width: 100%;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid #ddd;
        outline: none;
        transition: 0.2s ease;

        &:focus {
            border-color: #E1306C;
            box-shadow: 0 0 0 2px rgba(225, 48, 108, 0.15);
        }
    }

    button {
        margin-top: 10px;
        padding: 12px;
        background: #E1306C;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background: #b42455;
        }
    }

    .register {
        text-align: center;
        margin-top: 10px;

        a {
            color: #E1306C;
            font-weight: bold;
            text-decoration: none;
        }
    }
}
</style>
