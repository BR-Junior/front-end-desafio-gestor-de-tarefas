import { ref } from 'vue'
import type { Ref } from "vue";
import { defineStore } from 'pinia'


export const userStore = defineStore('userStore', () => {
  //state
  const token:Ref<string> = ref('')
  const id:Ref<string> = ref('')

  //set
  const tokenIdSave = () => {
    localStorage.setItem('id', id.value)
    localStorage.setItem('token', token.value)
  }

  //get
  const tokenIdGet = () => {
    return { token: localStorage.getItem('token'), id: localStorage.getItem('id') }
  }

  return { token, id, tokenIdSave, tokenIdGet }
})