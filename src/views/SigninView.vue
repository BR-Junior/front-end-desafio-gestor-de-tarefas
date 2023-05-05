<script setup lang="ts">
import { ref, reactive } from 'vue';
import { userStore } from "@/stores/userStore";
import router from "@/router";
import type {ITeste} from "@/views/Interfaces";
import MassageErro from "@/components/MassageModal.vue";
import {useCaseLogin} from "@/axios/login/useCase/UseCaseLogin";


const msg = ref<string>('')


const loginInputRef:ITeste = reactive({
  email: '',
  password: '',
})


const saveDataLogin = async (loginInput:ITeste) => {

  const result = await useCaseLogin.execute('entrar', loginInput)
  console.log(result)

  const{id, token} = result

  if (!id && !token) {

    setTimeout(() => msg.value = '', 3000)

    return msg.value = `${result}`

  } else {

    const storeUse = userStore()

    storeUse.id = id
    storeUse.token = token
    storeUse.tokenIdSave()

    return router.push('/task')

  }
}


const handleSubmit = async () => {
  const loginInput = {
    email: loginInputRef.email,
    password: loginInputRef.password
  }



  saveDataLogin(loginInput)
}

</script>

<template>
  <div id="signin">
    <section>
      <h1>
        SignIn
      </h1>

      <form class="form-signin" @submit.prevent=handleSubmit>

        <MassageErro :msg=msg v-show=msg />

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