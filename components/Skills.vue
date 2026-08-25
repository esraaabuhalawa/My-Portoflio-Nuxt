<template>
    <section id="skills" class="section py-20 relative">
        <!-- Centered text about availability -->
        <div class="text-center mb-16" ref="headerRef">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p class="text-lg text-dark-300 max-w-xl mx-auto mb-4">
                I specialize in modern web technologies and frameworks, constantly learning and growing.
            </p>
            <div class="inline-block px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30">
                <p class="text-neon-purple text-sm font-semibold">✓ Available for exciting projects</p>
            </div>
        </div>

        <!-- Tech Icons Row -->
        <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto" ref="techRef">
            <div v-for="tech in technologies" :key="tech.name" class="group relative tech-item">
                <!-- Icon container -->
                <div
                    class="tech-card w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border border-neon-purple/20 flex items-center justify-center cursor-pointer transition-shadow duration-300 hover:shadow-neon hover:border-neon-purple/60">
                    <i :class="tech.icon" class="text-3xl md:text-4xl colored"></i>
                </div>

                <!-- Tooltip -->
                <div
                    class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded bg-neon-purple text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {{ tech.name }}
                </div>
            </div>
        </div>

        <!-- Glowing element with animation -->
        <!-- <div class="mt-20 flex justify-center">
            <EnergyCore />
        </div> -->
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement>()
const techRef = ref<HTMLElement>()

const technologies = [
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },

  { name: 'Vue 3', icon: 'devicon-vuejs-plain' },
  { name: 'Nuxt', icon: 'devicon-nuxtjs-plain' },

  { name: 'Angular', icon: 'devicon-angular-plain' },

  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
  { name: 'Sass', icon: 'devicon-sass-original' },

  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Figma', icon: 'devicon-figma-plain' }
]

let ctx: gsap.Context | null = null

onMounted(() => {
    if (!techRef.value) return

    ctx = gsap.context(() => {
        // Header fade-in
        if (headerRef.value) {
            gsap.from(headerRef.value.children, {
                opacity: 0,
                y: 30,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.value,
                    start: 'top bottom-=100',
                },
            })
        }

        const cards = gsap.utils.toArray<HTMLElement>('.tech-card', techRef.value!)

        // Staggered pop-in with rotation
        gsap.from(cards, {
            opacity: 0,
            scale: 0,
            rotation: -120,
            duration: 0.8,
            stagger: {
                each: 0.08,
                from: 'center',
            },
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: techRef.value,
                start: 'top bottom-=120',
            },
        })

        // Continuous floating, each card slightly out of phase
        cards.forEach((card, i) => {
            gsap.to(card, {
                y: -10,
                duration: 1.8 + (i % 4) * 0.35,
                repeat: -1,
                yoyo: true,
                delay: i * 0.15,
                ease: 'sine.inOut',
            })
        })
    }, techRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>
