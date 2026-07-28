<template>
  <div class="min-h-screen bg-card text-text transition-colors duration-300">
    <!-- Main portfolio content -->
    <Navbar />
    <Hero />
    <WorkExperience />
    <Skills />
    <Qualifications />
    <Projects />
    <Contact/>

    <!-- Footer -->
    <footer
      class="border-t border-neon-purple/20 py-8 px-4 text-center text-text bg-card mt-16">
      <p>© 2024 Esraa Abuhalawa. Built with Nuxt, GSAP, and Tailwind CSS.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import WorkExperience from '~/components/WorkExperience.vue'
import Skills from '~/components/Skills.vue'
import Qualifications from '~/components/Qualifications.vue'
import Projects from '~/components/Projects.vue'
import Contact from '~/components/Contact.vue'
</script>
