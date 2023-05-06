<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import axios, {formToJSON} from "axios";
import router from "@/router";
import {userStore} from "@/stores/userStore";
import {useCaseTaskFindAll} from "@/axios/task/useCase/UseCaseLogin";


const select = ref()
const list= ref()
const teste = ref()
const storeUse = userStore()
onMounted(async () => {
  if (!storeUse.tokenIdGet().token) {
    return router.push('/')
  }

  // list.value =( await axios.get('http://localhost:3333/task', {
  //   headers: { Authorization: storeUse.tokenIdGet().token }
  // }) ).data

  // const {data} =  await axios.get('http://localhost:3333/task', {
  //   headers: { Authorization: storeUse.tokenIdGet().token }
  // })
  //
  // list.value = data
   list.value = await signUpPost()
  console.log(list.value)
})

const signUpPost= async (status?:string) => {
  const token = storeUse.tokenIdGet().token
  try {
    // useCaseTaskFindAll
    const response = await axios.get('http://localhost:3333/task', {
     headers: {Authorization: token},
     params: {
       idUser: 'f836d4f8-dadc-418c-99b3-f32f6b8af673'
     }
   })
    return response.data
   } catch (erro) {
   console.log()
 }
}



const findTask = async () => {
  // list.value = await signUpPost('open')
  // console.log(list)
  const id = storeUse.tokenIdGet().id
  const token = storeUse.tokenIdGet().token
  const dataTask = {
    idUser: 'f836d4f8-dadc-418c-99b3-f32f6b8af673',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJlNGVmN2VmOC1mOWM3LTQwYjctODgwYS1lYmExZDMwNzFmNGMiLCJpYXQiOjE2ODMzMzA4ODcsImV4cCI6MTY4MzQxNzI4N30.BXiGjJohcXWBus-LUUDnipFzm3EowRH76vmOTww80OE'
  }
  const res = await useCaseTaskFindAll.execute('task', dataTask)
  teste.value = res.data
  console.log(teste.value)
}


</script>

<template>
  <div id="signUp">
    <section>
      <h1>

        Tasks {{teste}}
      </h1>
      <div class="voltar">
        <button
            type="button"
            class="btn-voltar"
            @click="router.push('/')"
        >
          Voltar
        </button>
      </div>

      <div class="tsak">
        <table>
          <tr>
            <th>task</th>

            <th>priority</th>
            <th>status</th>
            <th>creationDate</th>
          </tr>
          <tr>
            <td>
              <input placeholder="task" />
              <button @click="findTask">
                teste
              </button>

            </td>

            <td>
              <select v-model="select" >
                <option :value=i.priority v-for="i in list" :key=i.id>{{i.priority}}</option>

              </select>
              {{select}}
            </td>

          </tr>
          <tr v-for="i in list" :key=i.id style="margin-bottom: 50px">
            <td>{{i.task}}</td>
            <td>{{i.priority}}</td>
            <td>{{i.status}}</td>
            <td>{{i.creationDate}}</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
#signUp {
  background: rgba(158, 193, 244, 0.41);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
section {
  background: rgba(239, 245, 248);
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
}
h1 {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
.btn-voltar {
  padding: .5rem;
  border: none;
  background: cornflowerblue;
}
.voltar {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
}
div .tsak{
  width: 100%;
}
table {
  width: 100%;
}
th {
  background: rgba(26, 98, 205, 0.5);
  padding: 1rem;
}
td {
  border:1px solid rgba(14, 11, 11, 0.99);
  text-align: center;
  padding: 1rem;
}
select {
  width: 100%;
  height: 2rem;
}

@media (max-width: 500px) {
  label, input[type=text], button {
    width: 100%;
  }
}
</style>