<template>
    <section id="home"
        class="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-24 lg:pb-20">
        <!-- Background animated elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                class="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-neon-purple/10 rounded-full blur-3xl animate-pulse">
            </div>
            <div class="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-neon-blue/10 rounded-full blur-3xl animate-pulse"
                style="animation-delay: 1.5s;"></div>
            <div class="absolute inset-0 hero-grid"></div>
        </div>

        <div class="relative z-10 w-full max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">

                <!-- ==================== LEFT : CONTENT ==================== -->
                <div class="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">

                    <!-- Availability badge -->
                    <div ref="badgeRef"
                        class="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-neon-purple/30 bg-neon-purple/10 backdrop-blur-sm">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75 animate-ping"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                        </span>
                        <span class="text-xs sm:text-sm font-medium text-text/80 tracking-wide">
                            Available for new opportunities
                        </span>
                    </div>

                    <!-- Main heading -->
                    <h1 ref="headingRef"
                        class="!text-4xl sm:!text-5xl lg:!text-6xl xl:!text-7xl font-bold !mb-4 leading-[1.15] text-text transition-colors duration-300">
                        I&#39;m
                        <br class="hidden sm:block" />
                        <span
                            class="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent">
                            Esraa Abuhalawa
                        </span>
                    </h1>

                    <!-- Role -->
                    <p ref="roleRef"
                        class="text-lg sm:text-xl lg:text-2xl font-medium text-text/80 tracking-wide mb-5 transition-colors duration-300">
                        Frontend Developer
                        <span class="text-neon-purple">(Vue.js | Angular)</span>
                    </p>

                    <!-- Description -->
                    <p ref="descRef"
                        class="text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 text-text/70 mb-8 leading-relaxed transition-colors duration-300">
                        Frontend Developer with 1.5+ years of experience building scalable and responsive web
                        applications using Vue.js, Angular, and TypeScript. Skilled in API integration, state
                        management (Vuex, Pinia), and performance optimization. Passionate about delivering
                        high-quality UI/UX and continuously learning modern front-end technologies.
                    </p>

                    <!-- CTA Buttons -->
                    <div ref="buttonsRef" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="/Esraa_Abuhalawa_Mahmmoud_frontend_developer.pdf"
                            download="Esraa_Abuhalawa_Mahmmoud_frontend_developer.pdf"
                            class="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neon-purple text-white font-bold shadow-lg shadow-neon-purple/30 hover:bg-neon-purple/90 hover:shadow-neon-purple/50 hover:-translate-y-0.5 transition-all duration-300">
                            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Download my CV
                        </a>

                        <a href="#contact"
                            class="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                            Get in Touch
                        </a>
                    </div>

                    <!-- Quick stats -->
                    <div ref="statsRef" class="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
                        <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
                            <p
                                class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                                {{ stat.value }}
                            </p>
                            <p class="text-xs sm:text-sm text-text/60 tracking-wide">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>

                <!-- ==================== RIGHT : IMAGE ==================== -->
                <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end" ref="imageRef">
                    <div class="relative w-[240px] sm:w-[320px] lg:w-[350px] xl:w-[410px] aspect-square">

                        <!-- Ambient glows -->
                        <div
                            class="absolute -inset-10 rounded-full bg-neon-purple/25 blur-3xl animate-pulse pointer-events-none">
                        </div>
                        <div class="absolute -inset-6 rounded-full bg-neon-blue/20 blur-3xl animate-pulse pointer-events-none"
                            style="animation-delay: 1.2s;"></div>

                        <!-- Floating stack -->
                        <div class="absolute inset-0 animate-float">

                            <!-- Outer dashed orbit -->
                            <div
                                class="absolute -inset-7 rounded-full border border-dashed border-neon-purple/25 spin-slow">
                            </div>

                            <!-- Orbiting dots -->
                            <div class="absolute -inset-7 spin-reverse">
                                <span
                                    class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neon-pink shadow-[0_0_12px_3px_rgba(236,72,153,0.6)]"></span>
                                <span
                                    class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neon-cyan shadow-[0_0_12px_3px_rgba(6,182,212,0.6)]"></span>
                                <span
                                    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_12px_3px_rgba(59,130,246,0.6)]"></span>
                            </div>

                            <!-- Rotating conic ring -->
                            <div class="absolute -inset-2 rounded-full conic-ring spin-medium"></div>

                            <!-- Static soft ring -->
                            <div class="absolute inset-0 rounded-full ring-1 ring-inset ring-neon-purple/25"></div>

                            <!-- Photo -->
                            <div
                                class="group absolute inset-[6px] rounded-full overflow-hidden bg-card shadow-2xl shadow-neon-purple/20 transition-colors duration-300">
                                <img :src="profileImage" alt="Esraa Abuhalawa"
                                    class="w-full h-full object-contain" />
                                <!-- gradient wash -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-neon-purple/25 via-transparent to-neon-blue/10 pointer-events-none">
                                </div>
                                <!-- shine sweep -->
                                <div class="absolute inset-0 shine-sweep pointer-events-none"></div>
                            </div>

                            <!-- Floating tech badges -->
                            <div
                                class="absolute -left-3 sm:-left-6 top-[16%] flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur-md border border-neon-purple/20 shadow-lg badge-float">
                                <i class="devicon-vuejs-plain colored text-xl"></i>
                                <span class="text-xs font-semibold text-text/80 hidden sm:inline">Vue.js</span>
                            </div>

                            <div class="absolute -right-3 sm:-right-6 top-[46%] flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur-md border border-neon-blue/20 shadow-lg badge-float"
                                style="animation-delay: 1s;">
                                <i class="devicon-angularjs-plain colored text-xl"></i>
                                <span class="text-xs font-semibold text-text/80 hidden sm:inline">Angular</span>
                            </div>

                            <div class="absolute left-[4%] -bottom-2 flex items-center gap-2 px-3 py-2 rounded-xl bg-card/80 backdrop-blur-md border border-neon-cyan/20 shadow-lg badge-float"
                                style="animation-delay: 2s;">
                                <i class="devicon-typescript-plain colored text-xl"></i>
                                <span class="text-xs font-semibold text-text/80 hidden sm:inline">TypeScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll indicator -->
        <a href="#experience" ref="scrollRef"
            class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text/50 hover:text-neon-purple transition-colors duration-300">
            <span class="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
            <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </a>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const profileImage = "/images/profile.png"

const stats = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: 'Vue / Angular', label: 'Core Stack' },
]

const badgeRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const roleRef = ref<HTMLElement | null>(null)
const descRef = ref<HTMLElement | null>(null)
const buttonsRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (!process.client) return;
    // Stagger animations on load — only animate elements that exist to avoid GSAP "target null" warnings
    const tl = gsap.timeline()

    if (imageRef.value) {
        tl.fromTo(imageRef.value, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' })
    }

    if (badgeRef.value) {
        tl.fromTo(badgeRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.7')
    }

    if (headingRef.value) {
        tl.fromTo(headingRef.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    }

    if (roleRef.value) {
        tl.fromTo(roleRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.6')
    }

    if (descRef.value) {
        tl.fromTo(descRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    }

    if (buttonsRef.value) {
        tl.fromTo(buttonsRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    }

    if (statsRef.value) {
        tl.fromTo(statsRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    }

    if (scrollRef.value) {
        tl.fromTo(scrollRef.value, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.4')
    }
})
</script>

<style scoped>
/* Floating avatar stack */
.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-18px);
    }
}

/* Small badges bob independently */
.badge-float {
    animation: badgeFloat 5s ease-in-out infinite;
}

@keyframes badgeFloat {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

/* Rotating conic gradient ring (masked down to a thin ring) */
.conic-ring {
    background: conic-gradient(from 0deg,
            transparent 0deg,
            #a855f7 60deg,
            #ec4899 120deg,
            transparent 190deg,
            #3b82f6 280deg,
            transparent 360deg);
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
}

.spin-slow {
    animation: heroSpin 26s linear infinite;
}

.spin-medium {
    animation: heroSpin 9s linear infinite;
}

.spin-reverse {
    animation: heroSpin 18s linear infinite reverse;
}

@keyframes heroSpin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

/* Light sweep across the photo */
.shine-sweep {
    background: linear-gradient(115deg,
            transparent 35%,
            rgba(255, 255, 255, 0.22) 48%,
            transparent 60%);
    background-size: 250% 250%;
    animation: shineSweep 5.5s ease-in-out infinite;
}

@keyframes shineSweep {

    0%,
    65% {
        background-position: 180% 0;
    }

    100% {
        background-position: -60% 0;
    }
}

/* Subtle grid backdrop */
.hero-grid {
    background-image:
        linear-gradient(to right, rgba(168, 85, 247, 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(168, 85, 247, 0.07) 1px, transparent 1px);
    background-size: 56px 56px;
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 45%, #000 20%, transparent 80%);
    mask-image: radial-gradient(ellipse 70% 60% at 50% 45%, #000 20%, transparent 80%);
}

@media (prefers-reduced-motion: reduce) {

    .animate-float,
    .badge-float,
    .spin-slow,
    .spin-medium,
    .spin-reverse,
    .shine-sweep {
        animation: none;
    }
}
</style>
