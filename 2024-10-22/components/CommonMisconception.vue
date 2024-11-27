<script setup lang="ts">
defineProps<{
  lead: string;
  text: string;
}>();
</script>

<template>
  <div class="text-center mt-20">
    <strong>{{ lead }}</strong>
    {{ text }}
  </div>
</template>

<style scoped>
strong {
  @apply block mb-4 font-normal text-5xl text-accent;
}
</style>
