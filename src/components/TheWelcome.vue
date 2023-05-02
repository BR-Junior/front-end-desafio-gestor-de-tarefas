<script setup lang="ts">

</script>

<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>

    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
}
.title {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body {
  display: flex;
  align-items: center;
}
</style>