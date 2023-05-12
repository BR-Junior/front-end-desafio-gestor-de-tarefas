<script setup lang="ts">
import {ref, onMounted, reactive, watch} from 'vue';
import router from "@/router";
import {userStore} from "@/stores/userStore";
import {useCaseTaskFindAll} from "@/axios/task/useCase/TaskUseCaseFindAll";
import {useCaseTaskCreate} from "@/axios/task/useCase/TaskUseCaseCreate";
import {taskUseCaseDelete} from "@/axios/task/useCase/TaskUseCaseDelete";
import {taskUseCaseFindOne} from "@/axios/task/useCase/TaskUseCaseFindOne";
import {taskUseCaseUpdate} from "@/axios/task/useCase/TaskUseCaseUpdate";
import TaskForm from "@/views/task/TaskForm.vue";
import TaskList from "@/views/task/TaskList.vue";


const list= ref()

const listFilter = ref()
const storeUse = userStore()
const idUser = storeUse.tokenIdGet().id as string
const token = storeUse.tokenIdGet().token as string
const priorityOrderRef = ref<boolean>(false)
const statusOrderRef = ref<boolean>(false)
const searchRef = ref<string>('')

const taskFormInputRef = reactive({
  id: '',
  task: '',
  priority: '',
  status: '',
})
const taskSelectData = {
  priority: ['low', 'normal', 'high'],
  status: ['open', 'doing']
}

onMounted(async () => {
  if (!storeUse.tokenIdGet().token) {
    return router.push('/')
  }

   list.value = await taskList()

})

watch(searchRef,async () => {
  if (searchRef.value.length >= 2 ) {

    list.value =  await list.value.filter(task => task.task.includes(searchRef.value))

   // const teste = async () => {
   //   return  await list.value.filter(task => task.task.includes(searchRef.value))
   // }
   //
   // list.value = await teste()
   //
   // console.log(teste())

     // const dataTask = {
     //   idUser: idUser,
     //   token: token,
     //   task: searchRef.value
     // }
     //
     // list.value = await useCaseTaskFindAll.execute('task', dataTask)
  }

  if (!searchRef.value.length) return list.value = await taskList()
})

const taskList = async () => {
  const dataTask = {
    idUser: idUser,
    token: token,
  }

 return  await useCaseTaskFindAll.execute('task', dataTask)

}

const taskCreate = async () => {
  const taskInputForm = {
    token: token,
    idUser: idUser,
    task: taskFormInputRef.task,
    priority: taskFormInputRef.priority,
    status: taskFormInputRef.status,
  }

  const response = await useCaseTaskCreate.execute('task', taskInputForm)
  if (!response.id) {
    const  {task, priority, status} = response.errors.body

    console.log(task, priority, status)
  }

  console.log(response.id)

  taskFormInputRef.task = ''
  taskFormInputRef.priority = ''
  taskFormInputRef.status = ''

  list.value = await taskList()

}

const taskDelete = async (id:string) => {
  const deleteParams = {
    url: 'task',
    token: token,
    id: id
  }
  await taskUseCaseDelete.execute(deleteParams)

  list.value = await taskList()
}

const taskFindOne = async (id:string) => {
  const findOneParams = {
    url: 'task',
    token: token,
    id: id
  }

  const response = await taskUseCaseFindOne.execute(findOneParams)

  taskFormInputRef.id = response.id
  taskFormInputRef.task = response.task
  taskFormInputRef.priority = response.priority
  taskFormInputRef.status = response.status

  console.log(response)
}

const taskUpdate = async () => {
  const updateParams = {
    idUser: idUser,
    token: token,
    url: 'task',
    id: taskFormInputRef.id,
    task: taskFormInputRef.task,
    priority: taskFormInputRef.priority,
    status: taskFormInputRef.status,
  }

  const response = await taskUseCaseUpdate.execute(updateParams)

  taskFormInputRef.id = ''
  taskFormInputRef.task = ''
  taskFormInputRef.priority = ''
  taskFormInputRef.status = ''

  list.value = await taskList()

  console.log(response)
}

const priorityOrder = async () => {
  if (priorityOrderRef.value === false) {
    priorityOrderRef.value = true
       const dataTask = {
         idUser: idUser,
         token: token,
         sort: {priority: 'asc'}
       }

      return list.value = await useCaseTaskFindAll.execute('task', dataTask)

  }
  if (priorityOrderRef.value === true) {
    priorityOrderRef.value = false
    const dataTask = {
           idUser: idUser,
           token: token,
           sort: {priority: 'desc'}
         }

         return list.value = await useCaseTaskFindAll.execute('task', dataTask)
  }
}

const statusOrder = async () => {
  if (statusOrderRef.value === false) {
    statusOrderRef.value = true
    const dataTask = {
      idUser: idUser,
      token: token,
      sort: {status: 'asc'}
    }

    return list.value = await useCaseTaskFindAll.execute('task', dataTask)

  }
  if (statusOrderRef.value === true) {
    statusOrderRef.value = false
    const dataTask = {
      idUser: idUser,
      token: token,
      sort: {status: 'desc'}
    }

    return list.value = await useCaseTaskFindAll.execute('task', dataTask)

  }
}

</script>

<template>
  <div id="task">
    <section>
      <h1>
        Tasks
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

       <TaskList />

      <div class="box-form">
        <form class="FormCreate" @submit.prevent="taskCreate">

          <div>
            <div>
              <label for="taskFormInput">Task</label>
            </div>
            <input
                type="text"
                name="task"
                placeholder="Task"
                id="taskFormInput"
                v-model=taskFormInputRef.task
                >
          </div>


          <div>
            <div>
              <label for="taskFormSelectPriority">Priority</label>
            </div>
            <select id="taskFormSelectPriority" v-model="taskFormInputRef.priority">
              <option v-for="i in taskSelectData.priority" :key="i" > {{i}}</option>
            </select>
          </div>


          <div>
            <div>
              <label for="taskFormSelectStatus"> Status</label>
            </div>
            <select id="taskFormSelectStatus" v-model="taskFormInputRef.status">
              <option v-for="i in taskSelectData.status" :key="i">{{i}}</option>
            </select>
          </div>


          <button type="submit" class="taskFormBtn" v-if="!taskFormInputRef.id">
            Create
          </button>
          <button type="button" class="taskFormBtn" v-if="taskFormInputRef.id" @click="taskUpdate">
            Savar
          </button>


        </form>
      </div>

      <div class="box-task-list">
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
              <input
                type="text"
                placeholder="Buscar task"
                v-model=searchRef
              />
            </td>

            <td>
              <button @click="priorityOrder">
                ordenar
              </button>
            </td>

            <td>
              <button @click="statusOrder">
                ordenar
              </button>
            </td>


          </tr>
          <tr v-for="(i, index) in list" :key=index style="margin-bottom: 50px">
            <td>{{i.task}}</td>
            <td>{{i.priority}}</td>
            <td>{{i.status}}</td>
            <td>{{i.creationDate}}</td>
            <td>
              <button @click="taskFindOne(i.id)">
                Atualizar
              </button>
              <button @click=taskDelete(i.id) >
                Deleta
              </button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  </div>



</template>

<style scoped>
#task {
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


.FormCreate {
  display: flex;
  gap: 1rem;
}
#taskFormInput, #taskFormSelectStatus, #taskFormSelectPriority {
  padding: .5rem;
  margin-bottom: 1rem;
}
.taskFormBtn {
  border: none;
  margin-bottom: 1rem;
  height: auto;
  width: 5rem;
  background: green;
  border-radius: 1rem;
  cursor: pointer;
}


.box-task-list{
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


@media (max-width: 500px) {
  label, input[type=text], button {
    width: 100%;
  }
}
</style>