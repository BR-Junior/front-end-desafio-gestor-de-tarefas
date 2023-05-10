<script setup lang="ts">
import {useCaseTaskFindAll} from "@/axios/task/useCase/TaskUseCaseFindAll";
import {userStore} from "@/stores/userStore";



const storeUse = userStore()
const idUser = storeUse.tokenIdGet().id as string
const token = storeUse.tokenIdGet().token as string

defineProps({
  list: {
    type: String,
    default: ''
  }
})
const taskList = async () => {
  const dataTask = {
    idUser: idUser,
    token: token
  }

  return  await useCaseTaskFindAll.execute('task', dataTask)

}
</script>

<template>
  <div class="tsak">
    <table>
      <tr>
        <th>task</th>

        <th>priority</th>
        <th>status</th>
        <th>creationDate</th>
        <th></th>
      </tr>
      <tr>
        <td>
          <input placeholder="task" />
          <button @click="taskCreate">
            teste
          </button>

        </td>
        <td>
          <select id="status" v-model="taskFormInputRef.status">
            <option v-for="i in taskSelectData.priority" :key="i">{{i}}</option>
          </select>
        </td>


      </tr>
      <tr v-for="(i, index) in list" :key=index style="margin-bottom: 50px">
        <td>{{i.task}}</td>
        <td>{{i.priority}}</td>
        <td>{{i.status}}</td>
        <td>{{i.creationDate}}</td>
        <td>
          <button>
            Atualizar
          </button>
          <button @click=taskDelete(i.id) >
            Deleta
          </button>
        </td>
      </tr>
    </table>
  </div>

</template>


<style scoped>

</style>