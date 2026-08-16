<template>
    <section id="home" class="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden">
        <!-- Background animated elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-20 right-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse">
            </div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto">
            <div class="text-center">
                <!-- Avatar with floating animation -->
                <div class="mb-8 flex justify-center">
                    <div class="relative w-48 h-48 md:w-56 md:h-56">
                        <!-- Floating container -->
                        <div class="absolute inset-0 animate-float" ref="avatarRef">
                            <!-- Glowing border -->
                            <div
                                class="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue p-1">
                                <div
                                    class="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden transition-colors duration-300">
                                    <!-- Placeholder avatar - replace with actual image -->
                                    <div
                                        class="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                                        <svg class="w-24 h-24 md:w-32 md:h-32 text-neon-purple/50" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Rotating background circle -->
                        <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-purple animate-spin"
                            style="animation-duration: 4s;"></div>
                    </div>
                </div>

                <!-- Subtitle -->
                <!-- <p class="text-lg md:text-xl text-text/70 mb-4 font-light transition-colors duration-300"
                    ref="subtitleRef">
                    Judges a book by its cover.
                </p> -->

                <!-- Main heading -->
                <h1 class="text-5xl md:text-7xl font-bold mb-6 text-text transition-colors duration-300"
                    ref="headingRef">
                    I'm a
                    <br />
                    <span
                        class="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
                        Frontend Developer <br/> (Vue.js | Angular)
                    </span>
                </h1>

                <!-- Description -->
                <p class="text-lg md:text-xl max-w-2xl mx-auto text-text/70 mb-8 leading-relaxed transition-colors duration-300"
                    ref="descRef">
                    Frontend Developer with 1.5+ years of experience building scalable and responsive web applications
using Vue.js, Angular, and TypeScript. Skilled in API integration, state management (Vuex,
Pinia), and performance optimization. Passionate about delivering high-quality UI/UX and
continuously learning modern front-end technologies.
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center" ref="buttonsRef">
                    <a href="#projects"
                        class="px-8 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        View My Work
                    </a>

                    <a href="#contact"
                        class="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 font-semibold transition-all duration-300 cursor-pointer">
                        Get in Touch
                    </a>
                </div>

                <!-- Scroll indicator -->
                <div class="mt-16 flex justify-center animate-bounce" ref="scrollRef">
                    <svg class="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const avatarRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!process.client) return;
    // Stagger animations on load
    if (process.client) {
        const tl = gsap.timeline()

        // Fade in subtitle
        tl.fromTo(
            subtitleRef.value,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 }
        )

        // Fade in heading
        tl.fromTo(
            headingRef.value,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.6'
        )

        // Fade in description
        tl.fromTo(
            descRef.value,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.6'
        )

        // Fade in buttons
        tl.fromTo(
            buttonsRef.value,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.6'
        )

        // Fade in scroll indicator
        tl.fromTo(
            scrollRef.value,
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            '-=0.4'
        )
    }
})
</script>

<style scoped>
:deep(.animate-float) {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}
</style>
