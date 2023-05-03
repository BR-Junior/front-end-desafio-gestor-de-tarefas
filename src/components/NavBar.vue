<script setup lang="ts">
import {  RouterView } from 'vue-router'

</script>

<template>
<!--  <header>-->
<!--    <nav>-->
<!--      <RouterLink to="/">SignIn</RouterLink>-->
<!--    </nav>-->
<!--  </header>-->
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  font-size: 1rem;
}
</style>