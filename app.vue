<template>
   <!-- Start page splash screen -->
    <div v-if="isLoading" class="start-page">
      <Start />
    </div>
    <div v-else>
       <RouterView />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Start from '~/components/Start.vue'

import { useTheme } from '~/composables/useTheme'

const { initTheme } = useTheme()

const isLoading = ref(true)
onMounted(() => {
    initTheme()
  // Simulate loading time for the start page
  setTimeout(() => {
    isLoading.value = false
  }, 3000) // Adjust this duration as needed
})
</script>

<style scoped>
.start-page {
  opacity: 1;
  transition: opacity 0.8s ease;
}
</style>
