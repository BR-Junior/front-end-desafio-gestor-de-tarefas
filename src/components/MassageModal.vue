<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>


<script setup lang="ts">
defineProps ({
  msg:{
    type: String,
    default: ''
  }
})

</script>

<style scoped>
.message-container{
  color: rgba(0, 0, 0);;
  background: rgba(255, 0, 0, 0.30);
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
}
</style>