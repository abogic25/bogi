<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <div class="card-lux h-100 d-flex flex-column fade-up">
    <div class="d-flex align-items-center gap-3 mb-3">
      <div class="stat-icon"><i :class="['bi', project.icon]" /></div>
      <h5 class="mb-0 fw-bold">{{ project.title }}</h5>
    </div>
    <p style="color: var(--lux-muted)" class="flex-grow-1">
      {{ project.description }}
    </p>
    <div class="d-flex flex-wrap gap-2 mb-3">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="badge-lux"
      >{{ tag }}</span>
    </div>
    <a :href="project.link" class="btn btn-lux-outline align-self-start">
      View Project <i class="bi bi-arrow-right ms-1" />
    </a>
  </div>
</template>
