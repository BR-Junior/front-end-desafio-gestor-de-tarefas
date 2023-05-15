<script setup lang="ts">
import {useCaseTaskFindAll} from "@/axios/task/useCase/TaskUseCaseFindAll";
import {userStore} from "@/stores/userStore";
import {onMounted, ref, watch} from "vue";
import router from "@/router";
import TaskForm from "@/views/task/TaskForm.vue";
import {taskUseCaseDelete} from "@/axios/task/useCase/TaskUseCaseDelete";
import {http} from "@/help";



const storeUse = userStore()
const idUser = storeUse.tokenIdGet().id as string
const token = storeUse.tokenIdGet().token as string
const taskListRef = ref()
const ReloadList = ref<boolean>(false)
const searchTaskRef = ref<string>('')
const priorityOrderRef = ref<boolean>(false)
const statusOrderRef = ref<boolean>(false)
const idTaskRef = ref<string>('')


onMounted(async () => {
  if (!storeUse.tokenIdGet().token) {
    return router.push('/')
  }

  taskListRef.value = await taskList()
  console.log(taskListRef.value)

})

const taskList = async () => {
  const dataTask = {
    idUser: idUser,
    token: token,
  }

  // return  await useCaseTaskFindAll.execute('task', dataTask)

  return await http.getAll(dataTask)

}

watch(ReloadList,async () => {
  taskListRef.value = await taskList()
  ReloadList.value = false

})
const taskListReload = async (data:boolean) => ReloadList.value = data

watch(searchTaskRef, async () => {
  taskListRef.value =   taskListRef.value.filter((task: { task: string | string[]; }) => task.task.includes(searchTaskRef.value))

  if (!searchTaskRef.value.length)  taskListRef.value = await taskList()
})

const priorityOrder = async () => {
  if (priorityOrderRef.value === false) {
    priorityOrderRef.value = true
    const dataTask = {
      idUser: idUser,
      token: token,
      sort: {priority: 'desc'}
    }

    return taskListRef.value = await useCaseTaskFindAll.execute('task', dataTask)

  }
  if (priorityOrderRef.value === true) {
    priorityOrderRef.value = false
    const dataTask = {
      idUser: idUser,
      token: token,
      sort: {priority: 'asc'}
    }

    return taskListRef.value = await useCaseTaskFindAll.execute('task', dataTask)
  }
}

const statusOrder = async () => {
  if (statusOrderRef.value === false) {
    statusOrderRef.value = true
    const dataTask = {
      idUser: idUser,
      token: token,
      sort: {status: 'desc'}
    }

    return taskListRef.value = await useCaseTaskFindAll.execute('task', dataTask)

  }
  if (statusOrderRef.value === true) {
    statusOrderRef.value = false
    const dataTask = {
      idUser: idUser,
      token: token,
      sort: {status: 'asc'}
    }

    return taskListRef.value = await useCaseTaskFindAll.execute('task', dataTask)

  }
}

const getIdTask = (id:string) => {
  return  idTaskRef.value = id
}

const taskDelete = async (id:string) => {
  const deleteParams = {
    url: 'task',
    token: token,
    id: id
  }
  await taskUseCaseDelete.execute(deleteParams)

  taskListRef.value = await taskList()
}
</script>

<template>
  <section class="section-task-list">
    <TaskForm
      @taskListReload="taskListReload"
      :idTask=idTaskRef
    />

    <ul class="task-list" >
      <li class="list-header">
        <div class="header-task">task</div>
        <div class="header-priority">priority</div>
        <div class="header-status">status</div>
        <div  class="header-creationDate">creationDate</div >
      </li>

      <hr class="hr">

      <li class="list-filter">
        <div class="filter-task">
          <input
              type="text"
              placeholder="search task"
              v-model="searchTaskRef"
          />
        </div>

        <div class="filter-priority">
          <button class="btn-filter-priority" @click="priorityOrder">
            order priority
          </button>
        </div>

        <div class="filter-status">
          <button class="btn-filter-status" @click="statusOrder">
            order status
          </button>
        </div>
      </li>

      <li  class="list-fild" v-for="task in taskListRef" :key="task.id">
        <div>{{task.task}}</div>
        <div>{{task.priority}}</div>
        <div>{{task.status}}</div>
        <div>{{task.creationDate}}</div>
        <div>
          <button class="btn-task-update" @click="getIdTask(task.id)">
            update
          </button>
          <button class="btn-task-delete" @click="taskDelete(task.id)">
            delete
          </button>
        </div>
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
  left: 0;
  width: 20%;
  text-align: center;
}
.header-priority, .filter-priority {
  position: absolute;
  left: 20%;
  width: 20%;
  text-align: center;
}
.header-status, .filter-status {
  position: absolute;
  left: 40%;
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
.btn-filter-priority, .btn-filter-status {
  cursor: pointer;
  padding: .2rem;
  background: transparent;
  border: solid 1px rgba(26, 98, 205, 0.6);
}
.btn-task-update, .btn-task-delete {
  padding: .5rem;
  width: 5rem;
  margin: 0 1rem;
  border: none;
  cursor: pointer;
}
.btn-task-update {
  background: rgba(44, 185, 77, 0.60);
}
.btn-task-delete {
  background: rgb(231, 82, 82);
}




</style>