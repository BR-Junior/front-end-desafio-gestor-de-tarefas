<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from "vue";
import axios from "axios";
import router from "@/router";

const nome: Ref<string> = ref('')
const email: Ref<string> = ref('')
const senha: Ref<string> = ref('')
const vilid:Ref<boolean> = ref(false)

const signUpPost= async (data:any) => {
  try {
   const response = await axios.post('http://localhost:3333/cadastrar', data)
   console.log(response.data)

 } catch (erro) {
   console.log()
 }
}

const login = async (e:Event) => {
  const data = {
    name: nome.value.toString(),
    email: email.value.toString(),
    password: senha.value.toString()
  }

  await signUpPost(data)
}

</script>

<template>
  <div id="signUp">
    <section>
      <h1>
        SignUp
      </h1>

      <form class="form-signUp" @submit.prevent=login>
        <span v-show="vilid">
          teste
        </span>
        <label for="nome">Nome
          <input
              type="text"
              placeholder="Nome"
              id="nome"
              name="nome"
              v-model="nome"
          />
        </label>

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

        <button
            type="submit"
            class="btn-entrar"
        >
          Salvar
        </button>
      </form>

      <button
          type="button"
          class="btn-cadastrar"
          @click="router.push('/')"
      >
        Voltar
      </button>
    </section>
  </div>
</template>

<style scoped>
#signUp {
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
.form-signUp {
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
.btn-entrar {
  cursor: pointer;
  border: none;
  background: rgba(117, 218, 117, 0.8);
}
.btn-cadastrar {
  cursor: pointer;
  border: none;
  background: rgba(26, 98, 205, 0.6);
  margin-top: 1rem;
}

@media (max-width: 500px) {
  label, input[type=text], button {
    width: 100%;
  }
}
</style>