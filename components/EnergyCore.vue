<template>
    <div class="flex justify-center items-center">
        <!-- Animated rotating circles -->
        <div class="relative w-32 h-32 md:w-40 md:h-40">
            <!-- Outer rotating ring -->
            <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-purple border-r-neon-blue opacity-60 animate-spin"
                style="animation-duration: 3s"></div>

            <!-- Middle rotating ring -->
            <div class="absolute inset-4 rounded-full border-2 border-transparent border-t-neon-blue border-r-neon-purple opacity-40 animate-spin"
                style="animation-duration: 5s; animation-direction: reverse"></div>

            <!-- Central glowing core -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue shadow-neon animate-pulse"
                    ref="coreRef">
                    <!-- Inner glow -->
                    <div class="w-full h-full rounded-full flex items-center justify-center">
                        <div class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/30 animate-pulse"></div>
                    </div>
                </div>
            </div>

            <!-- Pulsing outer aura -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 blur-xl animate-pulse"
                style="animation-duration: 2s"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const coreRef = ref<HTMLElement>()

onMounted(() => {
    if (process.client && coreRef.value) {
        // Infinite pulsing animation
        gsap.fromTo(
            coreRef.value,
            { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
            {
                boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)',
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            }
        )
    }
})
</script>

<style scoped>
.animate-spin {
    animation: spin 4s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
