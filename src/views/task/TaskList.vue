<script setup lang="ts">
import {useCaseTaskFindAll} from "@/axios/task/useCase/TaskUseCaseFindAll";
import {userStore} from "@/stores/userStore";
import {onMounted, ref, watch} from "vue";
import router from "@/router";
import TaskForm from "@/views/task/TaskForm.vue";



const storeUse = userStore()
const idUser = storeUse.tokenIdGet().id as string
const token = storeUse.tokenIdGet().token as string
const taskListRef = ref<[]>()
const Reload = ref<boolean>(false)

onMounted(async () => {
  if (!storeUse.tokenIdGet().token) {
    return router.push('/')
  }

  taskListRef.value = await taskList()

})
console.log(Reload)


const taskList = async () => {
  const dataTask = {
    idUser: idUser,
    token: token,
  }

  return  await useCaseTaskFindAll.execute('task', dataTask)

}

watch(Reload,async () => {
  taskListRef.value = await taskList()
  console.log('AAAAAAAAAAAA')
  Reload.value = false
  console.log('BBBBBBB')
})
const taskListReload = async (data:boolean) => {

   Reload.value = data
  console.log(Reload.value)

  console.log(Reload.value)
   // return  taskListRef.value = await taskList()
  // taskListRef.value =
  //
}
</script>

<template>
  <section class="section-task-list">
    <TaskForm @taskListReload="taskListReload"/>

    <ul class="task-list">
      <div class="list-header">
        <div class="header-task">task</div>
        <div class="header-priority">priority</div>
        <div class="header-status">status</div>
        <div  class="header-creationDate">creationDate</div>
      </div>

      <hr class="hr">

      <div class="list-filter">
        <div class="filter-task">task</div>
        <div class="filter-priority">priority</div>
        <div class="filter-status">status</div>
      </div>

      <li  class="list-fild" v-for="task in taskListRef" :key="task.id">
        <div>{{task.task}}</div>
        <div>{{task.priority}}</div>
        <div>{{task.status}}</div>
        <div>{{task.creationDate}}</div>
      </li>


    </ul>
  </section>
</template>

<style scoped>
.section-task-list {
  margin-top: 10rem;
  width: 100%;
  border: solid 1px rgba(0, 0, 0, .5);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, .5);
}
.hr {
  width: 100%;
  margin: 1rem 0;
}
.task-list {
  width: 100%;
}
.task-list li {
  justify-content: center;
}



.list-header, .list-filter{
  display: flex;
  justify-content: center;
  position: relative;
  margin: 1.5rem 0;
}
.filter-task, .header-task{
  position: absolute;
  left: 10%;
  width: 20%;
  text-align: center;
}
.header-priority, .filter-priority {
  width: 20%;
  position: absolute;
  left: 30%;
  width: 20%;
  text-align: center;
}
.header-status, .filter-status {
  position: absolute;
  left: 50%;
  width: 20%;
  text-align: center;
}
.header-creationDate {
  position: absolute;
  left: 70%;
  width: 20%;
  text-align: center;
}

.list-fild {
  display: flex;
  border-bottom: solid 1px #000000;
  padding: 1rem 0;
}
.list-fild div {
  width: 20%;
  display: flex;
  justify-content: center;
}

</style>