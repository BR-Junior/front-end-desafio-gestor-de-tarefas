<script setup lang="ts">
import {reactive, ref} from "vue";
import {userStore} from "@/stores/userStore";
import router from "@/router";
import MassageModal from "@/components/MassageModal.vue";
import {http} from "@/help";


const msg = ref<string>('')

const signInInputRef = reactive({
  email: '',
  password: '',
})

const handleSubmit = async () => {
  const signInInput = {
    email: signInInputRef.email,
    password: signInInputRef.password
  }

  // const response = await useCaseLogin.execute('entrar', signInInput)
  const response = await http.signIn(signInInput)

  if (!response.id) {

    setTimeout(() => msg.value = '', 3000)

    if (response.errors) {
      const {email='', password=''} = response.errors

      return msg.value = `${email} ${password}`
    }

    if (response.data) return msg.value = `${response.data}`


  } else {

    const storeUse = userStore()

    storeUse.id = response.id
    storeUse.token = response.token
    storeUse.tokenIdSave()

    return router.push('/task')

  }
}
</script>

<template>
  <section class="section-sign-in">
    <h1>
      Sign in
    </h1>
    <hr class="hr">

    <form class="signin-form" @submit.prevent="handleSubmit">
      <MassageModal :msg=msg v-show=msg />
      <label for="email">E-mail</label>
      <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"

          v-model="signInInputRef.email"
      />

      <label for="password">Password</label>
      <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"

          v-model="signInInputRef.password"
      />

      <button type="submit" class="form-btn-sign-in">
        Sign in
      </button>

      <button type="button" class="form-btn-sign-up" @click="router.push('/sign-up')">
        Sign up
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
  min-height: 500px;
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
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: auto auto;
}
#email, #password,
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