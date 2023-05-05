<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from "vue";
import router from "@/router";
import {signUpUseCase} from "@/axios/signUp/useCase";
import MassageErro from "@/components/MassageModal.vue";

const nome: Ref<string> = ref('')
const email: Ref<string> = ref('')
const senha: Ref<string> = ref('')

const msg: Ref<string> = ref('')
const msgNome: Ref<string> = ref('')
const msgEmail: Ref<string> = ref('')
const msgSenha: Ref<string> = ref('')


const signUpPost= async (data:any) => {

  const response = await signUpUseCase.execute('cadastrar', data)

  if (!response.id) {

    console.log(response)


    const  {name, email, password} = response

    msgNome.value = `${name ? name : '' }`

    msgEmail.value = `${email ? email : ''}`

    msgSenha.value = ` ${password ? password : ''}`

    console.log(response)

  } else {

    msg.value = 'Cadastro foito com sucesso'

    return setTimeout(() => router.push('/'), 3000)
  }
}

const handleSubmit = async () => {
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

      <form class="form-signUp" @submit.prevent=handleSubmit>
        <MassageErro :msg="msg" v-show="msg" style="background: green"/>
        <div class="message-error">
        <MassageErro :msg="msgNome" v-show="msgNome" />
        <MassageErro :msg="msgEmail" v-show="msgEmail" />
        <MassageErro :msg="msgSenha" v-show="msgSenha" />
        </div>
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
.message-error {
  display: flex;
  gap: 1rem;
}

@media (max-width: 500px) {
  label, input[type=text], button {
    width: 100%;
  }
}
</style>