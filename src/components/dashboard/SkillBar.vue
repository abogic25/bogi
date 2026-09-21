<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  name: String,
  level: Number
})

const width = ref(0)

onMounted(() => {
  setTimeout(() => { width.value = props.level }, 150)
})
</script>

<template>
  <div class="mb-3">
    <div class="d-flex justify-content-between mb-2">
      <span class="fw-semibold">{{ name }}</span>
      <span style="color: var(--lux-gold-soft)">{{ level }}%</span>
    </div>
    <div class="skill-track">
      <div class="skill-fill" :style="{ width: width + '%' }" />
    </div>
  </div>
</template>
