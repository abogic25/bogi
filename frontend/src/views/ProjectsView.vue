<script setup>
import { ref, computed } from 'vue'
import { useProfileStore } from '@/stores/profile'
import ProjectCard from '@/components/dashboard/ProjectCard.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

const profile = useProfileStore()
const filter = ref('All')

const allTags = computed(() => {
  const set = new Set()
  profile.projects.forEach(p => p.tags.forEach(t => set.add(t)))
  return ['All', ...set]
})

const filtered = computed(() =>
  filter.value === 'All'
    ? profile.projects
    : profile.projects.filter(p => p.tags.includes(filter.value))
)
</script>

<template>
  <div>
    <SectionTitle title="Projects" subtitle="Selected work I'm proud of" />

    <div class="d-flex flex-wrap gap-2 mb-4">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="btn btn-sm"
        :class="filter === tag ? 'btn-lux' : 'btn-lux-outline'"
        @click="filter = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="row g-3">
      <div
        v-for="(p, i) in filtered"
        :key="p.title"
        class="col-md-6"
      >
        <div :class="`fade-up fade-up-${(i % 4) + 1}`">
          <ProjectCard :project="p" />
        </div>
      </div>
    </div>
  </div>
</template>
