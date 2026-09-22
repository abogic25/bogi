<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUIStore } from '@/stores/ui'
import { useProfileStore } from '@/stores/profile'

const ui = useUIStore()
const profile = useProfileStore()
const route = useRoute()

const pageTitle = computed(() => route.meta?.title || 'Dashboard')
</script>

<template>
  <header class="topbar">
    <div class="d-flex align-items-center gap-3">
      <button
        class="btn btn-lux-outline d-lg-none"
        @click="ui.toggleSidebar()"
        aria-label="Toggle menu"
      >
        <i class="bi bi-list" />
      </button>
      <div>
        <div class="fw-bold">{{ pageTitle }}</div>
        <div class="small d-none d-sm-block" style="color: var(--lux-muted)">
          Welcome back, {{ profile.name.split(' ')[0] }}
        </div>
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">
      <span class="badge-lux d-none d-md-inline-flex align-items-center gap-1">
        <i class="bi bi-circle-fill" style="font-size:.5rem; color:#22c55e" />
        Available for work
      </span>
      <div
        class="d-flex align-items-center justify-content-center"
        style="width:40px;height:40px;border-radius:50%;
               background:linear-gradient(135deg,var(--lux-gold),#7a5f10);
               color:#1a1a1a;font-weight:800;"
      >
        {{ profile.initials }}
      </div>
    </div>
  </header>
</template>
