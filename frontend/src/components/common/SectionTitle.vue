<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>

<template>
  <div class="mb-4">
    <div class="title-accent" />
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle mb-0">{{ subtitle }}</p>
  </div>
</template>
