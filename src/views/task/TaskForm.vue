<script setup lang="ts">
import {userStore} from "@/stores/userStore";
import {reactive} from "vue";
import {useCaseTaskCreate} from "@/axios/task/useCase/TaskUseCaseCreate";

const emit = defineEmits(['taskListReload'])


const storeUse = userStore()
const idUser = storeUse.tokenIdGet().id as string
const token = storeUse.tokenIdGet().token as string


const taskFormInputRef = reactive({
  id: '',
  task: '',
  priority: '',
  status: ''
})

const createTask = async () => {
  const taskInputForm = {
    token: token,
    idUser: idUser,
    task: taskFormInputRef.task,
    priority: taskFormInputRef.priority,
    status: taskFormInputRef.status,
  }
  emit('taskListReload', true)
  await useCaseTaskCreate.execute('task', taskInputForm)



  taskFormInputRef.task = ''
  taskFormInputRef.priority = ''
  taskFormInputRef.status = ''
}


</script>

<template>
  <section class="section-task-form">

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
        <button type="submit" class="form-btn-create" >
          Create
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
  //width: 100%;
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