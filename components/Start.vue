<template>
    <div class="fixed inset-0 overflow-hidden bg-dark-900 z-50">
        <!-- Animated background -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-20 left-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse">
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"
                style="animation-delay: 2s;"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 h-full flex flex-col items-center justify-center px-4">
            <!-- Main content -->
            <div class="text-center max-w-2xl mx-auto" ref="contentRef">
                <!-- Animated logo/title -->
                <div class="mb-8" ref="logoRef">
                    <div class="inline-block">
                        <h1 class="text-7xl md:text-8xl font-bold">
                            <span
                                class="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
                                DEV
                            </span>
                        </h1>
                        <div class="h-1 w-full bg-gradient-to-r from-neon-purple to-neon-blue mt-4"></div>
                    </div>
                </div>

                <!-- Subtitle with typing effect -->
                <p class="text-2xl md:text-3xl text-dark-200 font-light mb-4" ref="subtitleRef">
                    Full Stack Developer & Creative Technologist
                </p>

                <!-- Description -->
                <p class="text-lg text-dark-300 mb-12 leading-relaxed" ref="descRef">
                    Crafting beautiful, high-performance web applications with modern technologies.
                    Specializing in Vue, Nuxt, and cloud-native solutions.
                </p>

                <!-- Floating particles -->
                <div class="flex justify-center gap-4 mb-12" ref="particlesRef">
                    <div class="w-2 h-2 rounded-full bg-neon-purple animate-pulse"></div>
                    <div class="w-2 h-2 rounded-full bg-neon-blue animate-pulse" style="animation-delay: 0.2s;"></div>
                    <div class="w-2 h-2 rounded-full bg-neon-pink animate-pulse" style="animation-delay: 0.4s;"></div>
                </div>

                <!-- CTA Buttons -->
                <!-- <div class="flex flex-col sm:flex-row gap-4 justify-center" ref="buttonsRef">
                    <button @click="startJourney"
                        class="group px-8 py-4 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold text-lg hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                        <span class="flex items-center justify-center gap-2">
                            Enter Portfolio
                            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>
                </div> -->
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" ref="scrollRef">
                <svg class="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const contentRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const particlesRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)

const startJourney = () => {
    if (process.client) {
        // Fade out and hide start page
        const tl = gsap.timeline()
        if (!contentRef.value) return

        tl.to(contentRef.value, {
            opacity: 0,
            y: -50,
            duration: 0.6,
            ease: 'power2.in',
        })

        tl.to(
            document.querySelector('.start-page'),
            {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.8,
            },
            '-=0.4'
        )
    }
}

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
