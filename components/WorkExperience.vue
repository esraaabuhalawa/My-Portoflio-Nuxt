<template>
    <section id="experience" class="section py-20 relative">
        <!-- Background gradient -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/2 left-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
                <!-- <p class="text-lg text-dark-300 mb-4">Building scalable solutions and leading teams</p> -->
                <div class="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto"></div>
            </div>

            <!-- Timeline view for larger screens -->
            <div class="max-w-5xl mx-auto">
                <!-- Timeline grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" ref="cardsRef">
                    <div v-for="experience in experiences" :key="experience.id"
                        class="glass-card !p-4 rounded-xl group hover:shadow-neon-lg transition-all duration-300 transform hover:-translate-y-2 border border-neon-purple/20 hover:border-neon-purple/50">

                        <!-- Header with icon and badge -->
                        <div class="flex items-start justify-between mb-6">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-16 h-16 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-white text-3xl flex-shrink-0">
                                    {{ experience.icon }}
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold mb-1 mt-2 text-white">{{ experience.title }}</h3>
                                    <p class="text-neon-purple font-semibold">{{ experience.company }}</p>
                                </div>
                            </div>
                            <span v-if="experience.badge"
                                class="!px-3 !py-1 rounded-full bg-neon-purple/20 border border-neon-purple/50 text-neon-purple text-xs font-semibold">
                                {{ experience.badge }}
                            </span>
                        </div>

                        <!-- Duration -->
                        <div class="flex items-center gap-2 text-dark-400 text-sm mb-4">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {{ experience.duration }}
                        </div>

                        <!-- Description -->
                        <p class="text-dark-300 leading-relaxed mb-6">{{ experience.description }}</p>

                        <!-- Achievements -->
                        <div v-if="experience.achievements" class="mb-6">
                            <h4 class="text-sm font-semibold text-neon-blue mb-3">Key Achievements:</h4>
                            <ul class="space-y-2">
                                <li v-for="(achievement, idx) in experience.achievements" :key="idx"
                                    class="flex items-start gap-2 text-dark-300 text-sm">
                                    <span class="text-neon-purple flex-shrink-0 mt-1">✓</span>
                                    <span>{{ achievement }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Tech stack -->
                        <div v-if="experience.techs" class="border-t border-neon-purple/10 pt-4">
                            <p class="text-xs font-semibold text-dark-400 mb-3">Tech Stack:</p>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tech in experience.techs" :key="tech"
                                    class="px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-semibold hover:border-neon-purple/50 transition-colors">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cardsRef = ref<HTMLElement>()

const experiences = [
    {
        id: 1,
        icon: '⚡',
        title: 'Junior Frontend developer',
        company: 'Misk Its, Qussier -Red Sea',
        description: 'Developed responsive UI components and fixed critical bugs. Improved page load time and user experience.',
        duration: '05/2024 – 10/2025',
        badge: 'Frontend',
        achievements: [
            'Developed 5+ production web applications using Vue.js and Angular',
            'Built 20+ reusable UI components, improving development speed',
            'Improved application performance by ~25% through optimization',
            'Integrated 50+ REST API endpoints for dynamic data handling',
            'Identified and resolved 50+ UI bugs',
            'Collaborated with designers to deliver pixel-perfect UI'
        ],
        techs: ['Vue', 'Vuex', 'Pinia', 'Prime vue', 'Element Plus', 'Angular', 'Prime Ng', 'RJX', 'TypeScript', 'JavaScript', 'CSS', 'Tailwind CSS', 'Bootstrap', 'REST APIs', 'Git', 'Figma']
    },
    {
        id: 2,
        icon: '🎯',
        title: 'Frontend Developer Intern',
        company: 'Upskilling',
        description: 'Participating in an intensive frontend training program to strengthen Angular skills, explore modern development practices, and build production-ready portfolio projects.',
        duration: '04/2026 – 08/2026',
        badge: 'Intern',
        achievements: [
            'Built multiple responsive portfolio projects using Angular and TypeScript',
            'Strengthened knowledge of modern Angular architecture and best practices',
            'Implemented reusable and scalable UI components with PrimeNG',
            'Integrated REST APIs and managed application state effectively',
            'Applied Git workflows and collaborative development practices',
            'Focused on writing clean, maintainable, and reusable code'
        ],
        techs: [
            'Angular 16',
            'Angular 21',
            'Angular Material',
            'Bootstrap',
            'ngx-bootstrap',
            'PrimeNG',
            'Tailwind',
            'Prime Flex',
            'RxJS',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'Git',
            'REST APIs'
        ]
    },
    {
        id: 3,
        icon: '💼',
        title: 'IT Help Desk and E-commerce Coordinator',
        company: 'Fahad Abdullah A. Rahman Saeed Trading Est.',
        description: 'Managed e-commerce platforms and updated website content.',
        duration: '04/2019 – 08/2020',
        achievements: [
            'Managed e-commerce platforms and updated website content',
            'Worked with Magento, OpenCart, and WordPress',
            'Maintained system stability and provided technical support',
            'Assisted in implementing new features for e-commerce platforms'
        ],
        techs: ['OpenCart', ' Magento', 'WordPress']
    },
]

onMounted(() => {
    if (process.client && cardsRef.value) {
        const cards = cardsRef.value.querySelectorAll('.glass-card')

        gsap.fromTo(
            cards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: cardsRef.value,
                    start: 'top center+=100',
                    toggleActions: 'play none none none',
                },
            }
        )
    }
})
</script>

<style scoped>
.glass-card {
    transition: all 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-8px);
}
</style>
