<template>
    <section id="projects" class="section py-20 relative">
        <!-- Background effects -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/3 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <p class="text-lg text-dark-300 mb-4">Showcasing my best work and technical expertise</p>
                <div class="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto"></div>
            </div>
            <!-- Projects alternating layout -->
            <div class="max-w-5xl mx-auto space-y-16">
                <div v-for="(project, index) in projects"
                    :key="project.id"
                    :ref="el => setProjectRef(el, index)"
                    class="glass-card overflow-hidden rounded-xl group border border-neon-purple/20 hover:border-neon-purple/50 transition-colors">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <!-- Content side -->
                        <div :class="[
                            'p-8 md:p-12 flex flex-col justify-center',
                            index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'
                        ]">
                            <!-- Tag -->
                            <div class="mb-4" data-animate>
                                <span
                                    class="inline-block px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-semibold">
                                    {{ project.category }}
                                </span>
                            </div>

                            <!-- Project title -->
                            <h3 class="text-3xl md:text-4xl font-bold mb-4 text-white" data-animate>{{ project.title }}</h3>

                            <!-- Project description -->
                            <p class="text-dark-300 mb-6 leading-relaxed text-lg" data-animate>{{ project.description }}</p>

                            <!-- Key features -->
                            <div v-if="project.features" class="mb-6 pb-6 border-b border-neon-purple/10" data-animate>
                                <h4 class="text-sm font-semibold text-neon-blue mb-3">Key Features:</h4>
                                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <li v-for="feature in project.features" :key="feature"
                                        class="flex items-start gap-2 text-dark-300 text-sm">
                                        <span class="text-neon-purple flex-shrink-0">→</span>
                                        <span>{{ feature }}</span>
                                    </li>
                                </ul>
                            </div>

                        

                            <!-- Tools used -->
                            <div class="mb-6" data-animate>
                                <h4 class="text-sm font-semibold text-neon-blue mb-3">Tools Used:</h4>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in project.techs" :key="tech"
                                        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-semibold hover:border-neon-purple/60 hover:bg-neon-purple/20 transition-colors">
                                        <i v-if="techIcons[tech]" :class="techIcons[tech]" class="colored text-sm"></i>
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>

                            <!-- Links -->
                            <div class="flex gap-4 flex-wrap" data-animate>
                                <a :href="project.github" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 font-semibold transition-all duration-300 transform hover:scale-105">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                                <a :href="project.live" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Live Demo
                                </a>
                            </div>
                        </div>

                        <!-- Image side -->
                        <div :class="[
                            'h-80 lg:h-auto bg-gradient-to-br flex items-center justify-center overflow-hidden relative',
                            index % 2 === 0 ? 'lg:order-last from-neon-purple/20 to-neon-blue/20' : 'lg:order-first from-neon-blue/20 to-neon-purple/20'
                        ]">
                            <div class="text-8xl transition-transform duration-500 group-hover:scale-110">{{ project.emoji }}</div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                            <!-- Play video button -->
                            <button v-if="project.video" @click="openVideo(project)"
                                :aria-label="`Watch ${project.title} demo video`"
                                class="absolute inset-0 flex items-center justify-center cursor-pointer">
                                <span
                                    class="play-btn w-16 h-16 rounded-full bg-neon-purple/80 backdrop-blur-sm flex items-center justify-center text-white shadow-neon transition-all duration-300 hover:scale-110 hover:bg-neon-purple">
                                    <svg class="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Video popup -->
        <Teleport to="body">
            <div v-if="activeProject" ref="modalRef"
                class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                @click.self="closeVideo">
                <div ref="modalContentRef" class="relative w-full max-w-4xl rounded-xl overflow-hidden border border-neon-purple/40 shadow-neon-lg bg-card">
                    <!-- Header -->
                    <div class="flex items-center justify-between px-4 py-3 bg-card border-b border-neon-purple/20">
                        <h3 class="text-base font-semibold text-text">{{ activeProject.title }} — Demo</h3>
                        <button @click="closeVideo" aria-label="Close video"
                            class="w-8 h-8 rounded-full flex items-center justify-center text-text hover:bg-neon-purple/20 hover:text-neon-purple transition-colors cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <video :src="activeProject.video" controls autoplay class="w-full aspect-video bg-black"></video>
                </div>
            </div>
        </Teleport>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
    id: number
    title: string
    emoji: string
    category: string
    description: string
    features: string[]
    techs: string[]
    github: string
    live: string
    video: string
}

const projectsRef = ref<(HTMLElement | null)[]>([])

const setProjectRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    projectsRef.value[index] = el instanceof HTMLElement ? el : null
}

// Map tech names to devicon classes (fallback: plain text chip)
const techIcons: Record<string, string> = {
    'Nuxt 3': 'devicon-nuxtjs-plain',
    'Vue 3': 'devicon-vuejs-plain',
    'TypeScript': 'devicon-typescript-plain',
    'PostgreSQL': 'devicon-postgresql-plain',
    'Redis': 'devicon-redis-plain',
    'React': 'devicon-react-original',
    'Firebase': 'devicon-firebase-plain',
    'Tailwind CSS': 'devicon-tailwindcss-plain',
    'Socket.io': 'devicon-socketio-original',
    'Node.js': 'devicon-nodejs-plain',
    'JavaScript': 'devicon-javascript-plain',
    'Sass': 'devicon-sass-original',
    'Docker': 'devicon-docker-plain',
}

const projects: Project[] = [
   {
    id: 1,
    title: 'Angular E-Commerce',
    emoji: '🛍️',
    category: 'Frontend',
    description: 'A full-featured e-commerce web application built with Angular 20, TypeScript, Tailwind CSS, and Server-Side Rendering (SSR). It includes secure JWT authentication, shopping cart, wishlist, multilingual support, and a fully responsive user interface for an optimized shopping experience.',
    features: [
        'JWT authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart management',
        'Wishlist functionality',
        'Multilingual support (i18n)',
        'Responsive design for all devices',
        'Server-Side Rendering (SSR) for improved SEO and performance',
        'Product details and category browsing'
    ],
    techs: [
        'Angular 20',
        'TypeScript',
        'Tailwind CSS',
        'Flowbite',
        'Angular SSR',
        'RxJS',
        'REST API'
    ],
    github: 'https://github.com/esraaabuhalawa/angular-e-commerce.git',
    live: 'https://angular-e-commerce-topaz.vercel.app',
    video: '/images/0_Woman_Laptop_3840x2160.mp4',
},
{
    id: 2,
    title: 'Food Recipe Platform',
    emoji: '🍽️',
    category: 'Frontend',
    description: 'A modern role-based food recipe platform built with Angular 16 and TypeScript. Features secure JWT authentication, recipe discovery, admin and user dashboards, email verification, responsive UI, and REST API integration.',
    features: [
        'JWT authentication and role-based authorization',
        'Recipe browsing with search, filtering, and categories',
        'Admin dashboard for recipe and user management',
        'User registration, email verification, and password recovery',
        'Responsive design with Bootstrap 5',
        'File upload support for recipes',
        'International phone number validation',
        'Route guards and HTTP interceptors for secure navigation'
    ],
    techs: [
        'Angular 16',
        'TypeScript',
        'RxJS',
        'Bootstrap 5',
        'ng-select',
        'ngx-bootstrap',
        'ngx-toastr',
        'ngx-pagination',
        'ngx-file-drop',
        'REST API',
        'JWT'
    ],
    github: 'https://github.com/esraaabuhalawa/FoodApp-Angular.git',
    live: 'https://food-app-amber-theta.vercel.app',
    video: '/images/0_Woman_Laptop_3840x2160.mp4',
},
{
    id: 3,
    title: 'Hotel Management System',
    emoji: '🏨',
    category: 'Frontend',
    description: 'A modern Hotel Management System built with Angular 21, TypeScript, Tailwind CSS, and PrimeNG. The application streamlines hotel operations with secure authentication, room and booking management, multilingual support, and a responsive admin dashboard.',
    features: [
        'Public website for browsing rooms, facilities, and hotel services',
        'Secure authentication with sign up, sign in, and account management',
        'Admin dashboard for managing rooms, bookings, users, facilities, and advertisements',
        'Multi-language support (English & Arabic) with RTL/LTR layouts',
        'Responsive design using PrimeNG and Tailwind CSS',
        'Standalone Angular architecture with modern Angular APIs'
    ],
    techs: [
        'Angular 21',
        'TypeScript',
        'PrimeNG',
        'Tailwind CSS',
        'RxJS',
        'ngx-translate',
        'Angular Router',
        'Font Awesome'
    ],
    github: 'https://github.com/your-username/hotel-management-system',
    live: 'https://hms-angular-pi.vercel.app',
    video: '/images/0_Woman_Laptop_3840x2160.mp4',
},
    {
        id: 4,
        title: 'Portfolio Website',
        emoji: '💼',
        category: 'Frontend',
        description: 'A stunning portfolio website showcasing creative projects with smooth animations, interactive elements, and responsive design. Built with modern technologies for optimal performance.',
        features: [
            'Smooth scroll animations',
            'Dark theme with glassmorphism',
            'Mobile-first responsive design',
            'SEO optimized',
            'Fast page load times',
            'Interactive project showcase'
        ],
        techs: ['Nuxt 3', 'GSAP', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/esraaabuhalawa/HMS-Angular.git',
        live: 'https://hms-angular-pi.vercel.app/',
        video: '/images/0_Woman_Laptop_3840x2160.mp4',
    },
]

// ─── Video popup ───
const activeProject = ref<Project | null>(null)
const modalRef = ref<HTMLElement | null>(null)
const modalContentRef = ref<HTMLElement | null>(null)

const openVideo = async (project: Project) => {
    activeProject.value = project
    document.body.style.overflow = 'hidden'
    await nextTick()

    if (modalRef.value && modalContentRef.value) {
        gsap.fromTo(modalRef.value, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        gsap.fromTo(
            modalContentRef.value,
            { opacity: 0, scale: 0.85, y: 40 },
            { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.4)' }
        )
    }
}

const closeVideo = () => {
    if (!modalRef.value || !modalContentRef.value) {
        activeProject.value = null
        document.body.style.overflow = ''
        return
    }
    gsap.to(modalContentRef.value, { opacity: 0, scale: 0.9, y: 20, duration: 0.25, ease: 'power2.in' })
    gsap.to(modalRef.value, {
        opacity: 0,
        duration: 0.25,
        delay: 0.1,
        onComplete: () => {
            activeProject.value = null
            document.body.style.overflow = ''
        },
    })
}

const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && activeProject.value) closeVideo()
}

// ─── Scroll animations ───
let ctx: gsap.Context | null = null

onMounted(() => {
    window.addEventListener('keydown', onKeydown)

    ctx = gsap.context(() => {
        projectsRef.value.forEach((el, index) => {
            if (!el) return

            const isEven = index % 2 === 0

            gsap.from(el, {
                opacity: 0,
                x: isEven ? -60 : 60,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top center+=150',
                },
            })

            // Stagger the inner content blocks
            gsap.from(el.querySelectorAll('[data-animate]'), {
                opacity: 0,
                y: 25,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top center+=100',
                },
            })
        })
    })
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
    ctx?.revert()
})
</script>

<style scoped>
.glass-card {
    transition: all 0.3s ease;
}

.glass-card:hover {
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
}
</style>
