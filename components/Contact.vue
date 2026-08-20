<template>
    <section id="contact" class="section py-20 relative overflow-hidden">
        <!-- Background effects -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-1/2 right-0 w-full h-full bg-gradient-to-b from-neon-purple/10 to-transparent">
            </div>
            <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10">
            <!-- Main heading -->
            <div class="text-center mb-20">
                <h2 class="text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
                <p class="text-xl text-dark-300 max-w-2xl mx-auto">
                    I'm always excited about collaborating on interesting projects and discussing new opportunities.
                    Let's create something amazing together!
                </p>
                <div class="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mt-8"></div>
            </div>

            <!-- Main contact grid -->
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" ref="cardsRef">
                    <!-- Email Card -->
                    <div
                        class="glass-card p-8 rounded-xl border border-neon-purple/20 hover:border-neon-purple/50 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-neon-lg">
                        <div class="flex items-center justify-between mb-6">
                            <div
                                class="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white text-3xl">
                                📧
                            </div>
                            <span
                                class="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-semibold">Primary</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-2 text-white">Email</h3>
                        <p class="text-dark-300 mb-4 text-sm">Get in touch via email for any inquiries</p>
                        <a href="mailto:esr.saad123@gmail.com"
                            class="inline-flex items-center gap-2 text-neon-purple hover:text-neon-pink transition-colors font-semibold">
                            esr.saad123@gmail.com
                            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <!-- Location Card -->
                    <div
                        class="glass-card p-8 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-neon-lg">
                        <div class="flex items-center justify-between mb-6">
                            <div
                                class="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center text-white text-3xl">
                                📍
                            </div>
                            <span
                                class="px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-semibold">Location</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-2 text-white">Location</h3>
                        <p class="text-dark-300 mb-4 text-sm">Based in San Francisco, available for remote work</p>
                        <p class="font-semibold text-neon-blue">Mansoura , Egypt</p>
                    </div>

                    <!-- Availability Card -->
                    <div
                        class="glass-card p-8 rounded-xl border border-neon-pink/20 hover:border-neon-pink/50 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-neon-lg">
                        <div class="flex items-center justify-between mb-6">
                            <div
                                class="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center text-white text-3xl">
                                🚀
                            </div>
                            <span
                                class="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-semibold">Status</span>
                        </div>
                        <h3 class="text-2xl font-bold mb-2 text-white">Availability</h3>
                        <p class="text-dark-300 mb-4 text-sm">Open to exciting opportunities and collaborations</p>
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 rounded-full bg-neon-pink animate-pulse"></div>
                            <p class="font-semibold text-neon-pink">Open to Work</p>
                        </div>
                    </div>
                </div>

                <!-- Contact Methods -->
                <div class="glass-card p-12 rounded-xl border border-neon-purple/20 dark:border-neon-purple/20 mb-16"
                    ref="methodsRef">
                    <h3 class="text-2xl font-bold mb-8 text-gray-700 dark:text-white">
                        Quick Contact Methods
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <!-- Phone -->
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center text-neon-purple text-xl flex-shrink-0">
                                📱
                            </div>

                            <div>
                                <p class="text-gray-500 dark:text-dark-400 text-sm">
                                    Phone
                                </p>
                                <p
                                    class="text-gray-700 dark:text-white  tracking-wide transition-colors duration-300 hover:text-cyan-400 font-semibold">
                                    +20 111 99 86 471
                                </p>
                            </div>
                        </div>

                        <!-- LinkedIn -->
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xl flex-shrink-0">
                                💼
                            </div>

                            <div>
                                <p class="text-gray-500 dark:text-dark-400 text-sm">
                                    LinkedIn
                                </p>
                                <a target="_blank" href="https://www.linkedin.com/in/esraa-abuhalawa/"
                                    class="text-gray-700 hover:text-cyan-500 dark:text-white font-semibold">
                                    https://www.linkedin.com/in/esraa-abuhalawa/
                                </a>
                            </div>
                        </div>

                        <!-- Response Time -->
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-neon-pink/20 flex items-center justify-center text-neon-pink text-xl flex-shrink-0">
                                ⏱️
                            </div>

                            <div>
                                <p class="text-gray-500 dark:text-dark-400 text-sm">
                                    Response Time
                                </p>
                                <p class="text-gray-700 dark:text-white font-semibold">
                                    Within 24 hours
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Social links -->
                <div class="flex justify-center items-center gap-6 mb-16" ref="socialRef">
                    <a href="https://github.com/esraaabuhalawa" target="_blank" rel="noopener noreferrer"
                        class="group w-14 h-14 rounded-lg bg-glass-card hover:shadow-neon flex items-center justify-center text-neon-purple hover:text-white hover:bg-gradient-to-r hover:from-neon-purple hover:to-neon-blue transition-all duration-300 transform hover:scale-110 border border-neon-purple/20">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/esraa-abuhalawa/" target="_blank" rel="noopener noreferrer"
                        class="group w-14 h-14 rounded-lg bg-glass-card hover:shadow-neon flex items-center justify-center text-neon-blue hover:text-white hover:bg-gradient-to-r hover:from-neon-blue hover:to-neon-cyan transition-all duration-300 transform hover:scale-110 border border-neon-blue/20">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                    </a>

                    <a href="https://wa.me/01119986471" target="_blank" rel="noopener noreferrer"
                        class="group w-14 h-14 rounded-lg bg-glass-card hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center text-[#25D366] hover:text-white hover:bg-[#25D366] transition-all duration-300 transform hover:scale-110 border border-[#25D366]/20">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path
                                d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.106 1.523 5.833L0 24l6.348-1.65A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.921 0-3.72-.55-5.24-1.5l-.375-.223-3.897 1.014 1.04-3.797-.244-.39A9.735 9.735 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                        </svg>
                    </a>

                    <a href="mailto:esr.saad123@gmail.com" target="_blank" rel="noopener noreferrer"
                        class="group w-14 h-14 rounded-lg bg-glass-card hover:shadow-[0_0_20px_rgba(234,67,53,0.5)] flex items-center justify-center text-[#EA4335] hover:text-white hover:bg-[#EA4335] transition-all duration-300 transform hover:scale-110 border border-[#EA4335]/20">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h.909L12 12.545l9.455-8.724h.909c.904 0 1.636.732 1.636 1.636z" />
                        </svg>
                    </a>


                </div>

                <!-- CTA Section -->
                <div class="glass-card p-12 rounded-xl bg-white/60 dark:bg-[#1e1430]/40 border border-neon-purple/20
    hover:border-neon-purple/50 dark:hover:shadow-neon-lg backdrop-blur-[10px] hover:-translate-y-2 max-w-3xl mx-auto text-center"
                    ref="ctaRef">
                    <h3 class="text-4xl font-bold mb-4 text-white">Ready to start a project?</h3>
                    <p class="text-lg text-dark-300 mb-8">Drop me a line and let's discuss your next amazing idea!</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:esr.saad123@gmail.com"
                            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold hover:shadow-neon transition-all duration-300 transform hover:scale-105">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send me an email
                        </a>
                        <a href="#experience"
                            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 font-bold transition-all duration-300">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            View my experience
                        </a>
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
const methodsRef = ref<HTMLElement>()
const socialRef = ref<HTMLElement>()
const ctaRef = ref<HTMLElement>()

onMounted(() => {
    if (process.client) {
        // Fade in contact cards
        if (cardsRef.value) {
            const cards = cardsRef.value.querySelectorAll('.glass-card')
            gsap.fromTo(
                cards,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: cardsRef.value,
                        start: 'top center+=100',
                        toggleActions: 'play none none none',
                    },
                }
            )
        }

        // Fade in methods
        if (methodsRef.value) {
            gsap.fromTo(
                methodsRef.value,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: methodsRef.value,
                        start: 'top center+=100',
                        toggleActions: 'play none none none',
                    },
                }
            )
        }

        // Fade in social links
        if (socialRef.value) {
            const socials = socialRef.value.querySelectorAll('a')
            gsap.fromTo(
                socials,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: socialRef.value,
                        start: 'top center+=100',
                        toggleActions: 'play none none none',
                    },
                }
            )
        }

        // Fade in CTA
        if (ctaRef.value) {
            gsap.fromTo(
                ctaRef.value,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: ctaRef.value,
                        start: 'top center+=100',
                        toggleActions: 'play none none none',
                    },
                }
            )
        }
    }
})
</script>

<style scoped></style>
