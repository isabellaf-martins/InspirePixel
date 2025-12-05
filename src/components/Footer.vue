<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const email = ref('')

function subscribe() {
    alert(`Obrigado por se inscrever com ${email.value}!`)
    email.value = ''
}
</script>

<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-left">
                <!-- Contato -->
                <div class="footer-section">
                    <h4>Contato</h4>
                    <p>contato@inspiralens.com</p>
                    <p>Central de ajuda</p>
                    <p>Rio de Janeiro – Brasil</p>
                </div>

                <!-- Sobre -->
                <div class="footer-section">
                    <h4>Sobre</h4>
                    <ul>
                        <li><a href="#">Políticas</a></li>
                        <li><a href="#">Políticas de privacidade</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter -->
            <div class="footer-section-newsletter">
                <h4>Assine nossa newsletter</h4>
                <form @submit.prevent="subscribe">
                    <input type="email" v-model="email" placeholder="Seu email" required />
                    <button type="submit">Inscrever-se</button>
                </form>
            </div>
        </div>

        <div class="footer-social">
            <Icon icon="entypo-social:facebook-with-circle" width="30" height="30" />
            <Icon icon="entypo-social:instagram-with-circle" width="30" height="30" />
            <Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
            <Icon icon="streamline-logos:x-twitter-logo-block" width="30" height="30" />
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    padding: 1rem 6rem;
    text-align: left;
    margin-top: 10rem;

}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 2rem;
}

.footer-left {
    display: flex;
    gap: 2rem;
}

.footer-section {
    min-width: 140px;
    line-height: 1.8;
}

.footer-section h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.footer-section ul {
    list-style: none;

}

.footer-section ul li a {
    text-decoration: none;
    color: black;
    display: block;
}

.footer-section-newsletter {
    max-width: 600px;
}

.footer-section-newsletter h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.footer-section-newsletter form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-section-newsletter input {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.footer-section-newsletter button {
    padding: 0.5rem 1rem;
    background-color: #E1306C;
    color: white;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.footer-section-newsletter button:hover {
    background-color: #c1275b;
}

.footer-social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
}

@media (max-width: 768px) {
    .footer {
        padding: 2rem 1rem;
        text-align: center;
    }

    .footer-content {
        flex-direction: column-reverse;
        align-items: center;
        gap: 2rem;
    }

    .footer-left {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .footer-section-newsletter {
        width: 100%;
        max-width: 400px;
        text-align: center;

        form {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
        }

        input{
            width: 70%;
        }
        button {
            width: 40%;
            max-width: 400px;
        }
    }

    .footer-social {
        justify-content: center;
        margin-top: 1rem;
    }
}

</style>