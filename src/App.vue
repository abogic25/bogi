<script setup>
import { RouterView } from 'vue-router'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <div class="app-shell">
    <AppSidebar />
    <div class="main-area">
      <AppNavbar />
      <main class="content">
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .25s ease, transform .25s ease;
}
.page-enter-from { opacity: 0; transform: translateY(8px); }
.page-leave-to   { opacity: 0; transform: translateY(-8px); }
</style>
