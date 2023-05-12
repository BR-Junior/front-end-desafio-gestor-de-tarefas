<script setup lang="ts">
import {reactive} from "vue";
import {signUpUseCase} from "@/axios/signUp/useCase";
import router from "@/router";
import MassageModal from "@/components/MassageModal.vue";


const msg = reactive({
  name: '',
  email: '',
  password: '',
  success: '',
})


const signUpInputRef = reactive({
  name: '',
  email: '',
  password: '',
})


const handleSubmit = async () => {
  const signUpInput = {
    name: signUpInputRef.name,
    email: signUpInputRef.email,
    password: signUpInputRef.password
  }

  const response = await signUpUseCase.execute('cadastrar', signUpInput)


  if (!response.id) {
    if (response.name) msg.name = response.name
    setTimeout(() => msg.name = '', 3000)

    if (response.email) msg.email = response.email
    setTimeout(() => msg.email = '', 3000)

    if (response.password) msg.password = response.password
    setTimeout(() => msg.password = '', 3000)

  } else {
    msg.success = 'Cadastro foito com sucesso'

    return setTimeout(() => router.push('/'), 3000)
  }
}
</script>

<template>
  <section class="section-sign-in">
    <h1>
      Sign up
    </h1>
    <hr class="hr">

    <form class="signin-form" @submit.prevent="handleSubmit">
      <MassageModal :msg=msg.success v-show=msg.success style="background: rgba(117, 218, 117, 0.8)"/>
      <MassageModal :msg=msg.name v-show=msg.name />
      <MassageModal :msg=msg.email v-show=msg.email style="margin: 1rem"/>
      <MassageModal :msg=msg.password v-show=msg.password />
      <label for="name">Name</label>
      <input
          id="name"
          name="name"
          type="text"
          placeholder="name"
          v-model="signUpInputRef.name"
      />

      <label for="email">E-mail</label>
      <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          v-model="signUpInputRef.email"
      />

      <label for="password">Password</label>
      <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          v-model="signUpInputRef.password"
      />

      <button type="submit" class="form-btn-sign-in">
        Save
      </button>

      <button type="button" @click="router.push('/')" class="form-btn-sign-up">
        Back
      </button>
    </form>
  </section>
</template>

<style scoped>
.section-sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  width: 100%;
  height: 100%;
  border: solid 1px rgba(0, 0, 0, .5);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, .5);
}
.hr {
  width: 100%;
  margin: 1rem 0;
}
.signin-form {
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
}
#name, #email, #password,
.form-btn-sign-in, .form-btn-sign-up {
  margin: .5rem 0;
  padding: .5rem;
  font-size: 1rem;
}
.form-btn-sign-in {
  border: none;
  background: rgba(117, 218, 117, 0.8);
  cursor: pointer;
}
.form-btn-sign-up {
  border: none;
  cursor: pointer;
  background: rgba(255, 127, 80, 0.70);
}
@media (max-width: 500px) {
  .signin-form {
    width: 90%;
  }
}
</style>