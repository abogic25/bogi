<script setup>
import { useProfileStore } from '@/stores/profile'
import SkillBar from '@/components/dashboard/SkillBar.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

const profile = useProfileStore()

const tools = [
  { name: 'VS Code',        icon: 'bi-code-square' },
  { name: 'Figma',          icon: 'bi-palette' },
  { name: 'Git / GitHub',   icon: 'bi-git' },
  { name: 'Docker',         icon: 'bi-box-seam' },
  { name: 'Postman',        icon: 'bi-send-check' },
  { name: 'Linux',          icon: 'bi-terminal' }
]
</script>

<template>
  <div>
    <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

    <div class="row g-3">
      <div class="col-lg-7">
        <div class="card-lux h-100 fade-up fade-up-1">
          <h5 class="fw-bold mb-4">Core Proficiency</h5>
          <SkillBar
            v-for="s in profile.skills"
            :key="s.name"
            :name="s.name"
            :level="s.level"
          />
        </div>
      </div>

      <div class="col-lg-5">
        <div class="card-lux h-100 fade-up fade-up-2">
          <h5 class="fw-bold mb-4">Tools & Environment</h5>
          <div class="row g-2">
            <div
              v-for="t in tools"
              :key="t.name"
              class="col-6"
            >
              <div
                class="d-flex align-items-center gap-2 p-3"
                style="background: rgba(255,255,255,.03);
                       border:1px solid var(--lux-border);
                       border-radius:12px;"
              >
                <i :class="['bi', t.icon]" style="color: var(--lux-gold-soft); font-size:1.2rem;" />
                <span class="small fw-semibold">{{ t.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
