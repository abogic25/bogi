<script setup>
defineProps({
  icon: String,
  label: String,
  value: [String, Number]
})
</script>

<template>
  <div class="card-lux h-100 fade-up">
    <div class="d-flex justify-content-between align-items-start mb-3">
      <div class="stat-icon"><i :class="['bi', icon]" /></div>
      <i class="bi bi-arrow-up-right" style="color: var(--lux-muted)" />
    </div>
    <div class="stat-value">{{ value }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>
