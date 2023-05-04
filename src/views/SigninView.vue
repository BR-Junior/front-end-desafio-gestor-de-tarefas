<script setup lang="ts">
import { ref, reactive } from 'vue';
import { userStore } from "@/stores/userStore";
import router from "@/router";
import {http} from "@/axios/axios";
import type {ITeste} from "@/views/Interfaces";

const menssageErro = ref<boolean>(false)

const loginInputRef:ITeste = reactive({
  email: '',
  password: '',
})


const login = async () => {
  const loginInput = {
    email: loginInputRef.email,
    password: loginInputRef.password
  }

  const result = await http.post('entrar', loginInput)
      .catch((error) => {
    if (error.response) menssageErro.value = true
  })

  if (!result) return

  const { id, token } = result.data

  if (id && token) {

    const storeUse = userStore()

    storeUse.id = id
    storeUse.token = token

    return router.push('/task')
  }
}
</script>

<template>
  <div id="signin">
    <section>
      <h1>
        SignIn
      </h1>
      
      <form class="form-signin" @submit.prevent=login>
        <span class="menssageErro" v-show="menssageErro">
          E-mail ou Senha incorreta
        </span>
        <label for="email">E-mail
          <input
              type="text"
              placeholder="E-mail"
              id="email"
              name="email"
              v-model="loginInputRef.email"
          />
        </label>

        <label for="senha">Senha
          <input
              type="text"
              placeholder="Senha"
              id="senha"
              name="senha"
              v-model="loginInputRef.password"
          />
        </label>

        <button
            type="submit"
            class="btn-entrar"
        >
          Entrar
        </button>
      </form>

      <button
          type="button"
          class="btn-cadastrar"
          @click="router.push('/sign-up')"
      >
        Cadastrar
      </button>
    </section>
  </div>
</template>

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
.menssageErro {
  background: rgba(255, 0, 0, 0.30);
  color: rgba(0, 0, 0);;
  width: 35%;
  height: 2rem;
  border-radius: .5rem;
  text-align: center;
  padding-top: .5rem;

}
h1 {
  margin-top: 10rem;
  margin-bottom: 5rem;
}
.form-signin {
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