<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { useRouter } from 'vue-router'
import { useUIStore } from '@/stores/ui'

const props = defineProps({
  profile: {
    type: Object,
    required: true
  }
})

const isLoading = ref(true)
const router = useRouter()
const uiStore = useUIStore()

onMounted(() => {
  // Hide loading after page is fully interactive
  isLoading.value = false
  
  // Also hide after timeout as fallback
  const timeoutId = setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

watch(
  () => router.isReady,
  async (ready) => {
    if (ready) {
      isLoading.value = false
    }
  }
)

onBeforeUnmount(() => {
  clearTimeout(timeoutId) // Note: timeoutId is declared inside onMounted, need to fix
})
</script>

<template>
  <Transition name="page-fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-logo">
          <div class="logo-circle">
            <div class="logo-inner">{{ profile.initials }}</div>
          </div>
        </div>
        <div class="loading-text">
          <h1>{{ profile.name }}</h1>
          <p class="role">{{ profile.role }}</p>
        </div>
        <div class="loading-bar">
          <span></span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { useRouter } from 'vue-router'
import { useUIStore } from '@/stores/ui'

export default {
  name: 'LoadingScreen',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup() {
    const isLoading = ref(true)
    const router = useRouter()
    const uiStore = useUIStore()

    onMounted(() => {
      isLoading.value = false
      
      const timeoutId = setTimeout(() => {
        isLoading.value = false
      }, 2000)
    })

    watch(
      () => router.isReady,
      (ready) => {
        if (ready) {
          isLoading.value = false
        }
      }
    )

    return { isLoading }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  background: var(--lux-dark);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transform: scale(0.8);
  transition: transform .4s cubic-bezier(0.16, 1, 0.3, 1);
}

.loading-screen.loading-hidden .loading-content {
  transform: scale(1);
}

.loading-logo {
  width: 80px; height: 80px;
  display: grid; place-items: center;
}

.logo-circle {
  width: 60px; height: 60px;
  border: 3px solid var(--lux-gold);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--lux-gold), #8a6d12);
  display: grid; place-items: center;
  position: relative;
  box-shadow: 0 0 30px rgba(201, 162, 39, 0.4);
}

.logo-circle::before {
  content: '';
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 1px solid var(--lux-border);
}

.logo-inner {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: 2px;
}

.loading-text {
  text-align: center;
}

.loading-text h1 {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(90deg, var(--lux-gold-soft), var(--lux-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 3px;
}

.loading-text .role {
  color: var(--lux-muted);
  font-size: .9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: .5rem;
}

.loading-bar {
  width: 200px; height: 2px;
  background: linear-gradient(90deg, var(--lux-border), var(--lux-gold), var(--lux-border));
  position: relative;
  overflow: hidden;
}

.loading-bar span {
  position: absolute;
  top: 0; bottom: 0;
  width: 20%;
  background: var(--lux-gold);
  box-shadow: 0 0 10px var(--lux-gold);
  animation: barMove 3s linear infinite;
}

@keyframes barMove {
  0% { left: -20%; }
  100% { left: 120%; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.loading-screen.leaving {
  opacity: 0;
  pointer-events: none;
}

.page-enter-active,
.page-leave-active {
  transition: opacity .5s cubic-bezier(0.16, 1, 0.3, 1),
    transform .5s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>