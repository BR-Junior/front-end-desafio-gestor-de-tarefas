<script setup lang="ts">
import {userStore} from "@/stores/userStore";
import {reactive, watch} from "vue";
import {http} from "@/@core/help";
import MassageModal from "@/components/MassageModal.vue";





const emit = defineEmits(['taskListReload'])
const  props = defineProps({
  idTask: {
    type: String,
    default: ''
  }
})

const storeUse = userStore()
const idUser = storeUse.tokenIdGet().id as string
const token = storeUse.tokenIdGet().token as string

const taskFormInputRef = reactive({
  id: '',
  task: '',
  priority: '',
  status: ''
})
const msg = reactive({
  task: '',
  priority: '',
  status: '',
})
const errors = (data:any) => {
  const {task, priority, status} = data.errors

  setTimeout(() => msg.task = '', 3000)
  msg.task = task

  setTimeout(() => msg.priority = '', 3000)
  msg.priority = priority

  setTimeout(() => msg.status = '', 3000)
  msg.status = status
}
const createTask = async () => {
  const taskInputForm = {
    token: token,
    idUser: idUser,
    task: taskFormInputRef.task,
    priority: taskFormInputRef.priority,
    status: taskFormInputRef.status,
  }

  const result = await http.post(taskInputForm)

  if (result.errors) return errors(result)

  emit('taskListReload', true)

  taskFormInputRef.task = ''
  taskFormInputRef.priority = ''
  taskFormInputRef.status = ''
}

const taskFindOne = async (id:string) => {
  const findOneParams = {
    url: 'task',
    token: token,
    id: id
  }

  const response = await http.get(findOneParams)

  taskFormInputRef.id = response.id
  taskFormInputRef.task = response.task
  taskFormInputRef.priority = response.priority
  taskFormInputRef.status = response.status

}

watch(props, async () => {
  await taskFindOne(props.idTask);
})
const taskUpdate = async () => {
  const updateParams = {
    idUser: idUser,
    token: token,
    id: taskFormInputRef.id,
    task: taskFormInputRef.task,
    priority: taskFormInputRef.priority,
    status: taskFormInputRef.status,
  }

  // const response = await taskUseCaseUpdate.execute(updateParams)
  const result = await http.put(updateParams)

  if (result.errors) return errors(result)

  emit('taskListReload', true)

  taskFormInputRef.id = ''
  taskFormInputRef.task = ''
  taskFormInputRef.priority = ''
  taskFormInputRef.status = ''
}

</script>

<template>
  <section class="section-task-form">
    <MassageModal :msg="msg.task" v-show="msg.task"/>
    <MassageModal :msg="msg.priority" v-show="msg.priority"/>
    <MassageModal :msg="msg.status" v-show="msg.status"/>

    <form class="task-form" @submit.prevent="createTask">

      <div class="form-fild">
        <label for="task-fild">Task</label>
        <input
          id="task-fild"
          type="text"
          placeholder="Task"
          v-model="taskFormInputRef.task"
        >
      </div>

      <div class="form-fild">
        <label for="form-select-priority">priority</label>
        <select id="form-select-priority" v-model="taskFormInputRef.priority">
          <option value="low">low</option>
          <option value="normal">normal</option>
          <option value="high">high</option>
        </select>
      </div>

      <div class="form-fild">
        <label for="form-select-status">status</label>
        <select id="form-select-status" v-model="taskFormInputRef.status">
          <option value="open">open</option>
          <option value="doing">doing</option>
        </select>
      </div>

      <div class="form-fild">
        <button type="submit" class="form-btn-create" v-if="!taskFormInputRef.id">
          Create
        </button>

        <button type="button" class="form-btn-create" @click="taskUpdate" v-if="taskFormInputRef.id">
          Salvar
        </button>
      </div>

    </form>
    <hr class="hr"/>



  </section>
</template>

<style scoped>

.hr {
  width: 100%;
  margin: 1rem 0;
}
.task-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 1rem;
  padding-top: 1rem;
  gap: 1rem;
}
.form-fild {
  display: flex;
  flex-direction: column;
  gap: .2rem;
}
.form-btn-create {
  margin-top: .5rem;
  border: none;
  width: 10rem;
  height: 2.5rem;
  cursor: pointer;
  background: rgba(44, 185, 77, 0.60);
}

</style>