<template>
    <section id="projects" class="section py-20 relative">
        <!-- Background effects -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/3 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl  md:text-5xl font-bold mb-4">Featured Projects</h2>
                <p class="text-lg text-text/70 mb-4">Showcasing my best work and technical expertise</p>
                <div class="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto"></div>
            </div>
            <!--Project Card--->
            <div class="max-w-5xl mx-auto space-y-20">
                <div v-for="(project, index) in projects" :key="project.id" :ref="el => setProjectRef(el, index)" class="glass-card overflow-hidden rounded-2xl group
            bg-white/40 dark:bg-[#1e1430]/40
            border border-neon-purple/20 hover:border-neon-purple/40
            shadow-sm hover:shadow-xl hover:shadow-neon-purple/10
            transition-all duration-500">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">

                        <!-- Content side -->
                        <div :class="[
                            'p-8 md:p-12 lg:p-14 flex flex-col justify-center',
                            index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'
                        ]">
                            <!-- Index + Tag -->
                            <!-- <div class="flex items-center gap-3 mb-5" data-animate>
                                <span class="text-xs font-mono font-semibold text-neon-purple/50 tracking-wider">
                                    {{ String(index + 1).padStart(2, '0') }}
                                </span>
                                <span class="w-6 h-px bg-neon-purple/30"></span>
                                <span
                                    class="inline-block px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-semibold tracking-wide uppercase">
                                    {{ project.category }}
                                </span>
                            </div> -->

                            <!-- Project title -->
                            <h3 class="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight leading-tight"
                                data-animate>
                                {{ project.title }}
                            </h3>
                            <!-- Project description -->
                            <p class="text-text/70 mb-6 leading-relaxed text-sm" data-animate>{{ project.description }}
                            </p>

                            <!-- Tools used -->
                            <div class="mb-8" data-animate>
                                <h4 class="text-xs font-semibold text-neon-blue mb-3 tracking-wide uppercase">Tools Used
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="tech in project.techs" :key="tech" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                bg-neon-purple/5 dark:bg-neon-purple/10
                                border border-neon-purple/20
                                text-gray-700 dark:text-neon-purple text-xs font-medium
                                hover:border-neon-purple/50 hover:bg-neon-purple/10 dark:hover:bg-neon-purple/20
                                transition-colors duration-200">
                                        <i v-if="techIcons[tech]" :class="techIcons[tech]" class="colored text-sm"></i>
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>

                            <!-- Links -->
                            <div class="flex gap-3 flex-wrap" data-animate>
                                <a :href="project.github" target="_blank" rel="noopener noreferrer"
                                    :aria-label="`View ${project.title} source code on GitHub`" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                            border border-neon-purple/40 text-gray-700 dark:text-neon-purple
                            hover:border-neon-purple hover:bg-neon-purple/5 dark:hover:bg-neon-purple/10
                            font-semibold text-sm transition-all duration-300">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Code
                                </a>
                                <a :href="project.live" target="_blank" rel="noopener noreferrer"
                                    :aria-label="`View ${project.title} live demo`" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                            bg-gradient-to-r from-neon-purple to-neon-blue text-white
                            font-semibold text-sm
                            hover:shadow-lg hover:shadow-neon-purple/30
                            transition-all duration-300 transform hover:-translate-y-0.5">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Live Demo
                                </a>
                            </div>
                        </div>

                        <!-- Image side -->
                        <div :class="[
                            'h-72 lg:h-auto bg-gradient-to-br flex items-center justify-center overflow-hidden relative',
                            index % 2 === 0 ? 'lg:order-last from-neon-purple/20 to-neon-blue/20' : 'lg:order-first from-neon-blue/20 to-neon-purple/20'
                        ]">
                        <img
  v-if="project.image"
  :src="project.image"
  :alt="project.title"
  class="w-full h-[502px] object-cover object-top
           will-change-transform
           group-hover:scale-110"
/>
                        <div v-else
                                class="text-8xl transition-transform duration-700 ease-out group-hover:scale-110 select-none">
                                {{ project.emoji }}
                            </div>


                            <div class="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent">
                            </div>

                            <!-- Play video button -->
                            <button v-if="project.video" @click="openVideo(project)"
                                :aria-label="`Watch ${project.title} demo video`"
                                class="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                                <span
                                    class="play-btn w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg ring-1 ring-white/30 transition-all duration-300 hover:scale-110 hover:bg-neon-purple/80">
                                    <svg class="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-------------------2-->

        </div>

        <!-- Video popup -->
        <Teleport to="body">
            <div v-if="activeProject" ref="modalRef"
                class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                @click.self="closeVideo">
                <div ref="modalContentRef"
                    class="relative w-full max-w-4xl rounded-xl overflow-hidden border border-neon-purple/40 shadow-neon-lg bg-card">
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
    techs: string[],
    image?: string,
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
        image: '/images/projects/e-commerce.png',
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
            'ngx-bootstrap',
            'ngx-file-drop',
            'REST API',
            'Role Based',
        ],
        image: '/images/projects/food-app.png',
        github: 'https://github.com/esraaabuhalawa/FoodApp-Angular.git',
        live: 'https://food-app-amber-theta.vercel.app',
        video: '/images/0_Woman_Laptop_3840x2160.mp4',
    },
    {
        id: 4,
        title: 'Project Management System',
        emoji: '🏨',
        category: 'Frontend',
        description: 'A modern Project Management System built with Angular 16 and TypeScript, designed to streamline team collaboration and task management through dedicated authenticated dashboards for employees and managers. The application includes secure authentication, protected routes, profile and password management, file uploads, interactive charts, notifications, and reusable shared components.',
        features: [
            'Secure authentication with registration, account verification, and password recovery',
            'Separate authenticated dashboards for employees and managers',
            'Protected routes using authentication and logged-in guards',
            'Profile and password management with file upload functionality',
            'Interactive data visualization using ApexCharts',
            'Real-time user notifications using ngx-toastr',
            'Reusable shared components for dialogs, loading states, layouts, and common UI elements',
            'Responsive dashboard interface for efficient team and project management'
        ],
        techs: [
            'Angular 16',
            'TypeScript',
            'Angular Material',
            'Bootstrap 5',
            'RxJS',
            'Role Based',
            'REST API',
            'Angular Router',
            'Font Awesome'
        ],
        image: '/images/projects/PMS.png',
        github: 'https://github.com/esraaabuhalawa/pms-angular',
        live: 'https://pms-angular-zeta.vercel.app',
        video: '/images/0_Woman_Laptop_3840x2160.mp4',
    },
    {
        id: 5,
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
        image: '/images/projects/HMS.png',
        github: 'https://github.com/esraaabuhalawa/pms-angular',
        live: 'https://hms-angular-pi.vercel.app',
        video: '/images/0_Woman_Laptop_3840x2160.mp4',
    },
    {
        id: 6,
        title: 'Online Quiz Application',
        emoji: '📝',
        category: 'Frontend',
        description: 'A modern bilingual online Quiz Application built with Angular 21, TypeScript, PrimeNG, and RxJS. The application supports two roles from a single codebase: Instructors can manage groups, students, question banks, quizzes, and results, while Students can join quizzes using a code, answer questions through a timed stepper, and review their results.',
        features: [
            'Role-based experiences for Instructors and Students',
            'Instructor dashboard for managing groups, students, question banks, quizzes, and results',
            'Students can join quizzes using a unique quiz code',
            'Timed quiz experience with step-by-step question navigation',
            'Quiz result review and performance tracking',
            'Bilingual support (English & Arabic) with RTL/LTR layouts',
            'Lazy-loaded routes with standalone Angular components',
            'Reactive state management using Angular Signals and RxJS',
            'JWT-based authentication with secure token handling',
            'Custom PrimeNG theme with responsive and modern UI'
        ],
        techs: [
            'Angular 21',
            'TypeScript 5.9',
            'PrimeNG 21',
            'PrimeIcons',
            'PrimeFlex',
            'SCSS',
            'RxJS',
            'Angular Signals',
            'ngx-translate',
            'Angular Router',
            'JWT',
            'date-fns',
            'Vitest'
        ],
        image: '/images/projects/Quiz.png',
        github: 'https://github.com/esraaabuhalawa/Quiz-app',
        live: 'https://quiz-app-delta-sage.vercel.app',
        video: '/images/0_Woman_Laptop_3840x2160.mp4',
    },
    {
        id: 7,
        title: 'Personal Portfolio Website',
        emoji: '💼',
        category: 'Frontend',
        description: 'A modern personal portfolio website built with Vue 3, Vite, and Bootstrap 5. The responsive one-page application showcases professional information, services, achievements, portfolio projects, testimonials, and contact details with reusable components and smooth navigation.',
        features: [
            'Responsive one-page portfolio experience',
            'Smooth navigation with Vue Router',
            'Reusable components for portfolio sections',
            'Bootstrap-based responsive styling and layout',
            'About, services, achievements, portfolio, testimonials, and contact sections',
            'Font Awesome icons for enhanced visual presentation'
        ],
        techs: [
            'Vue 3',
            'Vite',
            'Vue Router',
            'Bootstrap 5',
            'Sass',
            'Font Awesome'
        ],
        image: '/images/projects/portofolio.png',
        github: 'https://github.com/esraaabuhalawa/Nourhan-Portofolio.git',
        live: 'https://nourhan-portofolio.vercel.app/',
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
img{
    transition: all .35s ease-in-out;
}
</style>
