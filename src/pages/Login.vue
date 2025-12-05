<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

// 1. Variáveis reativas para os campos do formulário
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

// 2. Função de manipulação do login (simplesmente exibe os dados no console)
const handleLogin = () => {
    console.log('Login Tentado!');
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log('Remember Me:', rememberMe.value);

    // Aqui você faria a chamada para a sua API de autenticação
};
</script>




<template>
    <div class="login-page">
        <div class="login-card">
            <div class="card-image">
            </div>

            <div class="card-form">
                <h2>Iniciar sessão</h2>

                <form @submit.prevent="handleLogin">
                    <div class="input-group">
                        <label for="email" class="sr-only">Email </label>
                        <i class="fas fa-envelope icon"></i>
                        <input type="email" id="email" v-model="email" placeholder="Email" required>
                    </div>

                    <div class="input-group">
                        <label for="password" class="sr-only">Senha</label>
                        <i class="fas fa-lock icon"></i>
                        <input type="password" id="password" v-model="password" placeholder="Senha" required>
                    </div>

                    <div class="remember-me">
                        <input type="checkbox" id="remember" v-model="rememberMe">
                        <label for="remember">Lembrar-me</label>
                    </div>

                    <button type="submit" class="login-button">LOGIN</button>
                </form>

                <a href="#" class="forgot-password">Esqueceu a senha?</a>

                <p class="or-login-with">ou entrar com</p>

                <div class="social-login">
                    <Icon icon="devicon:linkedin" width="24" height="24" />
                    <Icon icon="flat-color-icons:google" width="24" height="24" />
                    <Icon icon="streamline-logos:x-twitter-logo-block" width="24" height="24" />
                </div>

                <p class="register-prompt">
                    Não tem conta? <a href="#">Registre-se aqui</a>
                </p>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 80px;
    margin: 1rem;
    h2{
        padding: 1rem 0;
    }
}

.login-card {
    display: flex;
    width: 950px;
    max-width: 100%;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background-color: #f1ecec;
}

.card-image {
    flex: 1.5;
    background-image: url("../assets/paisagem3.jpg");
    background-size: cover;
    background-position: center;
    min-height: 450px;
}

.card-form {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.input-group {
    position: relative;
    margin-bottom: 20px;

    .icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none; // Permite o clique no input por baixo do ícone
    }

    input {
        width: 100%;
        padding: 12px 12px 12px 45px; // Aumenta o padding esquerdo para o ícone
        border: 1px solid #ccc;
        border-radius: 8px;
        box-sizing: border-box;
        font-size: 1rem;

        &:focus {
            border-color: black;
            outline: none;
        }
    }
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: 2px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.remember-me {
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    input[type="checkbox"] {
        margin-right: 10px;

    }

    label {
        color: #666;
    }
}

.login-button {
    width: 100%;
    padding: 12px;
    background-color:#E1306C;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 15px;
    transition: background-color 0.2s;
}

.forgot-password {
    text-align: right;
    color:  rgb(228, 112, 149);
    text-decoration: none;
    font-size: 0.9rem;
    margin-bottom: 30px;

    &:hover {
        text-decoration: underline;
    }
}

.or-login-with {
    text-align: center;
    color: #756d6f;
    margin: 1rem 0;
}

.social-login {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 5rem;
    margin-bottom: 2rem;
}

.social-button {
    flex: 1;
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.85rem;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.85;
    }

}

.register-prompt {
    text-align: center;
    font-size: 1rem;
    color: #666;

    a {
        color: rgb(228, 112, 149);
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
}
// Responsividade
@media (max-width: 1024px) {
    .login-card {
        flex-direction: column; // Coloca imagem e formulário em coluna
        width: 90%;
    }

    .card-image {
        flex: none;
        width: 100%;
        min-height: 250px;
    }

    .card-form {
        padding: 30px;
    }

    .social-login {
        margin: 1rem 2rem;
    }
}

@media (max-width: 768px) {
    .login-card {
        width: 100%;
        border-radius: 0;
        box-shadow: none;
    }

    .card-image {
        display: none; // esconde a imagem em telas muito pequenas
    }

    .card-form {
        padding: 20px;
    }

    .social-login {
        margin: 1rem 1rem;
    }
}

@media (max-width: 480px) {
    .login-page {
        padding: 10px;
    }

    .login-button {
        font-size: 1rem;
        padding: 10px;
    }

    input {
        font-size: 0.9rem;
        padding: 10px 10px 10px 40px;
    }

    h2 {
        font-size: 1.5rem;
    }
}
</style>