<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="counterStore.countUp">+</button>
    <button @click="counterStore.countDown">-</button>
    <button @click="counterStore.reset">Reset</button>
  </div>
</template>

<script setup lang="ts">
const counterStore = useCounterState();
const { counter } = counterStore;
</script>