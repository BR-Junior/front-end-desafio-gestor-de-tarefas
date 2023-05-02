<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="signin">
    <TheWelcome class="card">
      <template #title>
        SignIn
      </template>

      <template #body>
        <form class="form-signin">

          <input type="text" placeholder="E-mail" class="email" />

          <input type="text" placeholder="Senha" class="senha"/>

        </form>
      </template>
    </TheWelcome>
  </div>
</template>


<style scoped>
* input:focus, input:focus-visible{
  border-color: red;
}
.signin {
  background: red;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
}
.card {
  background: rebeccapurple;
}
div .form-signin input{
  display: flex;
}
.email {
  margin-bottom: 1rem;
}


</style>