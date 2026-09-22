<script setup>
import { useProfileStore } from '@/stores/profile'
import SectionTitle from '@/components/common/SectionTitle.vue'

const profile = useProfileStore()
</script>

<template>
  <div>
    <SectionTitle title="About Me" subtitle="A short story about my journey" />

    <div class="row g-3">
      <div class="col-lg-7">
        <div class="card-lux h-100 fade-up fade-up-1">
          <p style="color: var(--lux-muted); line-height: 1.75;">
            {{ profile.bio }}
          </p>
          <p style="color: var(--lux-muted); line-height: 1.75;" class="mb-0">
            I believe great software is a blend of clean architecture,
            empathetic design, and constant iteration. When I'm not coding,
            you'll find me exploring design trends, contributing to open source,
            or writing technical articles.
          </p>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card-lux h-100 fade-up fade-up-2">
          <h5 class="fw-bold mb-3">Quick Facts</h5>
          <ul class="list-unstyled mb-0">
            <li class="d-flex justify-content-between border-bottom py-2" style="border-color: var(--lux-border) !important;">
              <span style="color: var(--lux-muted)">Location</span>
              <span>{{ profile.location }}</span>
            </li>
            <li class="d-flex justify-content-between border-bottom py-2" style="border-color: var(--lux-border) !important;">
              <span style="color: var(--lux-muted)">Experience</span>
              <span>6+ Years</span>
            </li>
            <li class="d-flex justify-content-between border-bottom py-2" style="border-color: var(--lux-border) !important;">
              <span style="color: var(--lux-muted)">Focus</span>
              <span>Vue & Node</span>
            </li>
            <li class="d-flex justify-content-between py-2">
              <span style="color: var(--lux-muted)">Availability</span>
              <span style="color:#22c55e">Open</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-12">
        <div class="card-lux mt-2 fade-up fade-up-3">
          <h5 class="fw-bold mb-4">Experience</h5>
          <div class="timeline">
            <div
              v-for="exp in profile.experience"
              :key="exp.company"
              class="timeline-item"
            >
              <div class="d-flex flex-wrap justify-content-between">
                <div>
                  <div class="fw-bold">{{ exp.role }}</div>
                  <div style="color: var(--lux-gold-soft); font-size:.9rem;">
                    {{ exp.company }}
                  </div>
                </div>
                <span class="badge-lux align-self-start">{{ exp.period }}</span>
              </div>
              <p class="mt-2 mb-0" style="color: var(--lux-muted)">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
