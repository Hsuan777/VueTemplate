<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container">
    <div class="flex justify-between items-center my-5">
      <img alt="Vue logo" class="mr-5" src="@/assets/logo.svg" width="125" height="125" />
      <nav>
        <RouterLink to="/" class="mr-5 hover:text-green-500">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-green-500">About</RouterLink>
      </nav>
    </div>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
