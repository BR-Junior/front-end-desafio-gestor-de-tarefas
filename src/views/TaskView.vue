<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from "axios";
import router from "@/router";
import {userStore} from "@/stores/userStore";


const list= ref<[]>([])
const storeUse = userStore()
onMounted(async () => {
  if (!storeUse.tokenIdGet().token) {
    return router.push('/')
  }else signUpPost()

  // list.value =( await axios.get('http://localhost:3333/task', {
  //   headers: { Authorization: storeUse.tokenIdGet().token }
  // }) ).data

  const {data} =  await axios.get('http://localhost:3333/task', {
    headers: { Authorization: storeUse.tokenIdGet().token }
  })

  list.value = data
})
const signUpPost= async () => {
  const token = storeUse.tokenIdGet().token
  try {
   const response = await axios.get('http://localhost:3333/task', {
     headers: {
       Authorization: token
     }
   })

 } catch (erro) {
   console.log()
 }
}
console.log(list.value)

</script>

<template>
  <div id="signUp">
    <section>
      <h1>

        {{ list }}
      </h1>


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
@media (max-width: 500px) {
  label, input[type=text], button {
    width: 100%;
  }
}
</style>