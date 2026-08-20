<template>
    <div class="fixed inset-0 overflow-hidden z-50 bg-white dark:bg-dark-900 transition-colors duration-500">
        <!-- Animated background -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse
                        bg-neon-purple/10 dark:bg-neon-purple/20"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse
                        bg-neon-blue/10 dark:bg-neon-blue/20"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse
                        bg-neon-pink/5 dark:bg-neon-pink/10" style="animation-delay: 2s;"></div>

            <!-- subtle texture so light mode doesn't look flat -->
            <div class="absolute inset-0
                        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)]
                        dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)]
                        bg-[size:24px_24px]"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <div class="text-center max-w-2xl mx-auto" ref="contentRef">
                <!-- Logo -->
                <div class="mb-8" ref="logoRef">
                    <div class="inline-block">
                        <h1 class="text-7xl md:text-8xl font-bold flex justify-center">
                            <img :src="logoLight" alt="Logo" class="block h-10 w-auto dark:hidden" />
                            <img :src="logoDark" alt="" aria-hidden="true"
                                class="hidden h-10 w-auto dark:block" />
                        </h1>
                        <div class="h-1 w-full bg-gradient-to-r from-neon-purple to-neon-blue mt-4 rounded-full"></div>
                    </div>
                </div>

                <!-- Optional tagline -->
                <p class="mb-8 text-sm md:text-base text-gray-500 dark:text-gray-400 transition-colors">
                    <slot name="tagline" />
                </p>

                <!-- Floating particles -->
                <div class="flex justify-center gap-4 mb-12" ref="particlesRef">
                    <div class="w-2 h-2 rounded-full bg-neon-purple animate-pulse"></div>
                    <div class="w-2 h-2 rounded-full bg-neon-blue animate-pulse" style="animation-delay: 0.2s;"></div>
                    <div class="w-2 h-2 rounded-full bg-neon-pink animate-pulse" style="animation-delay: 0.4s;"></div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" ref="scrollRef">
                <svg class="w-6 h-6 text-neon-purple/70 dark:text-neon-purple transition-colors" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
const logoDark = '/images/logo-dark.png'
const logoLight = '/images/logo-light.png'

const logoRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const particlesRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)


onMounted(() => {
    if (!process.client) return

    const tl = gsap.timeline()

    if (logoRef.value)
        tl.fromTo(logoRef.value, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 })

    if (subtitleRef.value)
        tl.fromTo(subtitleRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')

    if (descRef.value)
        tl.fromTo(descRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')

    if (particlesRef.value)
        tl.fromTo(
            particlesRef.value.querySelectorAll('div'),
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
            '-=0.6'
        )

    if (buttonsRef.value)
        tl.fromTo(buttonsRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')

    if (scrollRef.value)
        tl.fromTo(scrollRef.value, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.4')
})
</script>

<style scoped>
:deep(.start-page) {
    transition: opacity 0.8s ease;
}
</style>
