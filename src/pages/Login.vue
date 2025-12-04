<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMsg = ref("");

const router = useRouter();

function login() {
errorMsg.value = "";

const users = JSON.parse(localStorage.getItem("users")) || [];

const userFound = users.find(
    (u) => u.email === email.value && u.password === password.value
);

if (!userFound) {
    errorMsg.value = "Email ou senha incorretos.";
    return;}

localStorage.setItem("loggedUser", JSON.stringify(userFound));
router.push("/");
}
</script>

<template>
    <section class="login-container">
        <h2>Login</h2>
        <div class="input-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" />
        </div>
        <div class="input-group">
            <label for="password">Senha:</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <button @click="login">Entrar</button>
        <p class="error-msg" v-if="errorMsg">{{ errorMsg }}</p>
    </section>
</template>

<style scoped lang="scss">
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
  }
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #e1306c;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c1275b;
}

.error-msg {
  margin-top: 1rem;
  color: #e1306c;
  font-weight: 600;
}
</style>