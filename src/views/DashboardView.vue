<script setup>
import { useProfileStore } from '@/stores/profile'
import StatCard from '@/components/dashboard/StatCard.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

const profile = useProfileStore()
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="card-lux mb-4 fade-up fade-up-1">
      <div class="row align-items-center g-4">
        <div class="col-lg-auto text-center">
          <div class="hero-avatar mx-auto">{{ profile.initials }}</div>
        </div>
        <div class="col-lg">
          <span class="badge-lux d-inline-block mb-2">PORTFOLIO</span>
          <h1 class="fw-bold mb-1">
            Hi, I'm <span style="color: var(--lux-gold-soft)">{{ profile.name }}</span>
          </h1>
          <p class="mb-2" style="color: var(--lux-gold-soft); font-weight:600;">
            {{ profile.role }}
          </p>
          <p style="color: var(--lux-muted); max-width: 620px;" class="mb-3">
            {{ profile.tagline }}
          </p>
          <div class="d-flex flex-wrap gap-2">
            <RouterLink :to="{ name: 'contact' }" class="btn btn-lux">
              <i class="bi bi-send me-1" /> Hire Me
            </RouterLink>
            <RouterLink :to="{ name: 'projects' }" class="btn btn-lux-outline">
              <i class="bi bi-folder2-open me-1" /> View Projects
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats -->
    <SectionTitle title="At a Glance" subtitle="Key numbers about my journey" />
    <div class="row g-3 mb-4">
      <div
        v-for="(s, i) in profile.stats"
        :key="s.label"
        class="col-sm-6 col-lg-3"
      >
        <div :class="`fade-up fade-up-${i + 1}`">
          <StatCard :icon="s.icon" :label="s.label" :value="s.value" />
        </div>
      </div>
    </div>

    <!-- Quick info -->
    <div class="row g-3">
      <div class="col-md-6">
        <div class="card-lux h-100 fade-up fade-up-2">
          <h5 class="fw-bold mb-3">
            <i class="bi bi-geo-alt me-2" style="color: var(--lux-gold-soft)" />
            Contact Info
          </h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><i class="bi bi-envelope me-2" style="color: var(--lux-muted)" />{{ profile.email }}</li>
            <li class="mb-2"><i class="bi bi-telephone me-2" style="color: var(--lux-muted)" />{{ profile.phone }}</li>
            <li><i class="bi bi-geo me-2" style="color: var(--lux-muted)" />{{ profile.location }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-lux h-100 fade-up fade-up-3">
          <h5 class="fw-bold mb-3">
            <i class="bi bi-share me-2" style="color: var(--lux-gold-soft)" />
            Social
          </h5>
          <div class="d-flex flex-wrap gap-2">
            <a :href="profile.social.github"   target="_blank" class="btn btn-lux-outline"><i class="bi bi-github me-1" /> GitHub</a>
            <a :href="profile.social.linkedin" target="_blank" class="btn btn-lux-outline"><i class="bi bi-linkedin me-1" /> LinkedIn</a>
            <a :href="profile.social.twitter"  target="_blank" class="btn btn-lux-outline"><i class="bi bi-twitter-x me-1" /> Twitter</a>
            <a :href="profile.social.dribbble" target="_blank" class="btn btn-lux-outline"><i class="bi bi-dribbble me-1" /> Dribbble</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
