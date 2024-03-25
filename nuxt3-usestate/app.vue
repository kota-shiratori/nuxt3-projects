<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="changeTitle('Hello Nuxt3!')">Change Title</button>
  </div>
</template>

<script setup>
import { useTitle } from '/composables/index.ts';

const { title, changeTitle } = useTitle();
</script>
