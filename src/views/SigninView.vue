<template>
  <div id="signin">
    <section>
      <h1>
        SignIn
      </h1>
      
      <form class="form-signin" @submit=login>
        <label for="email">E-mail
          <input
              type="text"
              placeholder="E-mail"
              id="email"
              name="email"
              v-model="email"
          />
        </label>

        <label for="senha">Senha
          <input
              type="text"
              placeholder="Senha"
              id="senha"
              name="senha"
              v-model="senha"
          />
        </label>

        <button type="submit">
          Entrar
        </button>

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue';


const email = ref()
const senha = ref()


const login = (e:Event) => {
  e.preventDefault()
  console.log(email.value, senha.value)

}
</script>
<style scoped>
#signin {
  background: rgba(158, 193, 244, 0.41);
  height:100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
section {
  background: rgba(239, 245, 248);
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
}
h1 {
  margin-top: 10rem;
  margin-bottom: 5rem;
}
.form-signin {
  background: navy;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 1rem;
}
label, input[type=text], button {
  width: 350px;
}
input[type=text], button {
  padding: .5rem 0;
}
button {
  border: none;
}
button:nth-of-type(1) {
  background: rgba(117, 218, 117, 0.8);
}
button:nth-of-type(2) {
  background: rgba(26, 98, 205, 0.6);
}
@media (max-width: 500px) {
  label, input[type=text], button {
    width: 100%;
  }
}
</style>