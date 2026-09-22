<script setup>
import { useProfileStore } from '@/stores/profile'
import { useUIStore } from '@/stores/ui'

const profile = useProfileStore()
const ui = useUIStore()

const links = [
  { name: 'dashboard', label: 'Dashboard',  icon: 'bi-grid-1x2' },
  { name: 'about',     label: 'About',      icon: 'bi-person-badge' },
  { name: 'projects',  label: 'Projects',   icon: 'bi-kanban' },
  { name: 'skills',    label: 'Skills',     icon: 'bi-lightning-charge' },
  { name: 'contact',   label: 'Contact',    icon: 'bi-envelope-paper' }
]
</script>

<template>
  <!-- overlay for mobile -->
  <div
    class="sidebar-overlay"
    :class="{ show: ui.sidebarOpen }"
    @click="ui.closeSidebar()"
  />

  <aside class="sidebar" :class="{ open: ui.sidebarOpen }">
    <div class="sidebar-brand">
      <div class="logo">{{ profile.initials }}</div>
      <div>
        <div class="name">{{ profile.name }}</div>
        <div class="role">{{ profile.role }}</div>
      </div>
    </div>

    <nav class="d-flex flex-column">
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="{ name: link.name }"
        class="nav-link-lux"
        @click="ui.closeSidebar()"
      >
        <i :class="['bi', link.icon]" />
        <span>{{ link.label }}</span>
      </RouterLink>
    </nav>

    <div class="mt-4 pt-4 border-top" style="border-color: var(--lux-border) !important;">
      <div class="small text-uppercase mb-2" style="color: var(--lux-muted); letter-spacing:1px;">
        Connect
      </div>
      <div class="d-flex gap-2">
        <a :href="profile.social.github" target="_blank" class="btn btn-lux-outline btn-sm">
          <i class="bi bi-github" />
        </a>
        <a :href="profile.social.linkedin" target="_blank" class="btn btn-lux-outline btn-sm">
          <i class="bi bi-linkedin" />
        </a>
        <a :href="profile.social.twitter" target="_blank" class="btn btn-lux-outline btn-sm">
          <i class="bi bi-twitter-x" />
        </a>
      </div>
    </div>
  </aside>
</template>
