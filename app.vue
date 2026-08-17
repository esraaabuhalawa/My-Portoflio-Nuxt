<template>
  <NuxtPage />

  <Transition name="fade">
    <div v-if="isLoading" class="start-page">
      <Start />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Start from '~/components/Start.vue'
import { useTheme } from '~/composables/useTheme'

const { initTheme } = useTheme()

const isLoading = ref(true)

onMounted(() => {
  initTheme()
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
</script>

<style scoped>
.start-page {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg, #000); /* match your theme */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>