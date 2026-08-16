<template>
  <section id="qualifications" class="section py-20 relative">
    <!-- Background effects -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/3 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-text transition-colors duration-300">
          Qualifications & Courses
        </h2>

        <p class="text-lg text-text/70 mb-4 transition-colors duration-300">
          Continuous learning and professional development
        </p>

        <div class="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto"></div>
      </div>

      <!-- Main grid -->
      <div class="max-w-6xl mx-auto">

        <!-- Degrees -->
        <div class="mb-20">
          <h3 class="text-2xl font-bold mb-8 text-text flex items-center gap-3">
            <span class="text-3xl">🎓</span>
            Degrees & Certifications
          </h3>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" ref="degreesRef">
            <div v-for="degree in degrees" :key="degree.id"
              class="glass-card bg-card p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group">

              <!-- Header -->
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h4 class="text-xl font-bold text-text mb-1">
                    {{ degree.title }}
                  </h4>
                  <p class="text-primary font-semibold">
                    {{ degree.institution }}
                  </p>
                </div>
                <div class="text-3xl">{{ degree.icon }}</div>
              </div>

              <!-- Details -->
              <div class="space-y-3 mb-4">

                <div class="flex items-center gap-2 text-text/70 text-sm">
                  <svg class="w-4 h-4 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ degree.year }}
                </div>

                <div v-if="degree.gpa" class="flex items-center gap-2 text-text/60 text-sm">
                  <svg class="w-4 h-4 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                  GPA: {{ degree.gpa }}
                </div>

                <p v-if="degree.description" class="text-text/70 text-sm leading-relaxed">
                  {{ degree.description }}
                </p>

              </div>

              <!-- Specializations -->
              <!-- <div v-if="degree.specializations" class="border-t border-primary/10 pt-4">
                <p class="text-xs font-semibold text-text/50 mb-3">
                  Specializations:
                </p>

                <div class="flex flex-wrap gap-2">
                  <span v-for="spec in degree.specializations" :key="spec"
                    class="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                    {{ spec }}
                  </span>
                </div>
              </div> -->

            </div>
          </div>
        </div>

        <!-- Courses -->
        <div>
          <h3 class="text-2xl font-bold mb-8 text-text flex items-center gap-3">
            <span class="text-3xl">📚</span>
            Professional Courses & Certifications
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref="coursesRef">
            <div v-for="course in courses" :key="course.id"
              class="glass-card bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group">

              <!-- Badge -->
              <div class="flex items-start justify-between mb-4">
                <span
                  class="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                  {{ course.status }}
                </span>
                <span class="text-2xl">{{ course.icon }}</span>
              </div>

              <!-- Content -->
              <h4 class="text-lg font-bold text-text mb-2">
                {{ course.title }}
              </h4>

              <p class="text-primary font-semibold text-sm mb-3">
                {{ course.provider }}
              </p>

              <p class="text-text/70 text-sm mb-4 leading-relaxed">
                {{ course.description }}
              </p>

              <!-- Meta -->
              <div class="space-y-2 border-t border-primary/10 pt-4">

                <div class="flex items-center gap-2 text-text/50 text-xs">
                  <svg class="w-3.5 h-3.5 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ course.duration }}
                </div>

                <div v-if="course.skills" class="flex flex-wrap gap-1">
                  <span v-for="skill in course.skills" :key="skill"
                    class="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary font-medium">
                    {{ skill }}
                  </span>
                </div>

                <div v-if="course.link" class="pt-2">
                  <a :href="course.link" target="_blank"
                    class="inline-flex items-center gap-1 text-primary hover:text-neon-blue transition text-xs font-semibold">
                    View Certificate
                  </a>
                </div>

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

const degreesRef = ref<HTMLElement>()
const coursesRef = ref<HTMLElement>()

const degrees = [
  {
    id: 1,
    icon: '🎓',
    title: 'Bachelor of Communications and Electronics Engineering',
    institution: 'Mansoura University',
    year: '2012 – 2017',
    gpa: 'Very Good',
    description: 'Studied communications and electronics engineering with a strong foundation in programming, software development, algorithms, databases, and computer systems.',
    // specializations: [
    //   'Software Engineering',
    //   'Web Development',
    //   'Database Systems'
    // ]
  },
]

const courses = [
  {
    id: 1,
    icon: '🅰️',
    title: 'Angular Diploma',
    provider: 'Route Academy',
    status: 'Completed',
    description: 'Comprehensive Angular training covering standalone components, routing, RxJS, services, state management, REST APIs, authentication, and building real-world applications.',
    duration: '02/2025 – 10/2025',
    skills: ['Angular', 'RxJS', 'TypeScript', 'HTML5', 'CSS3', 'Javascript', 'Bootstrp', 'Tailwind', 'REST APIs'],
    link: 'https://drive.google.com/file/d/1CnrIbBy3OCXw1mp3s3-IvVC_RlOqr3KD/view?usp=sharing'
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Web Design',
    provider: 'National Telecommunication Institute (NTI)',
    status: 'Completed',
    description: 'Learned web design fundamentals, responsive layouts, UI principles, HTML, CSS, and Bootstrap.',
    duration: '08/2021',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
    link: 'https://drive.google.com/file/d/14Jxa_pKrmOghSaTAs6Te-Sj-lnaTJg9F/view?usp=sharing'
  },
  {
    id: 3,
    icon: '💻',
    title: 'Front-End Web Development Track',
    provider: 'Udacity',
    status: 'Completed',
    description: 'Covered modern front-end development concepts including JavaScript, responsive web development, APIs, and interactive user interfaces.',
    duration: '12/2020',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    link: 'https://drive.google.com/file/d/18E_3EIGsuFMBTFNm0urehFCe4uSoMHiR/view?usp=sharing'
  },
  {
    id: 4,
    icon: '📱',
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    status: 'Completed',
    description: 'Focused on building responsive websites using modern HTML and CSS techniques following web accessibility best practices.',
    duration: '04/2021',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'],
    link: 'https://www.freecodecamp.org/certification/esraa-abuhalawa/responsive-web-design'
  },
  {
    id: 5,
    icon: '⚙️',
    title: 'JavaScript Algorithms and Data Structures',
    provider: 'freeCodeCamp',
    status: 'Completed',
    description: 'Studied JavaScript fundamentals, ES6 features, algorithms, data structures, object-oriented programming, and problem solving.',
    duration: '04/2021',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6'],
    link: 'https://www.freecodecamp.org/certification/esraa-abuhalawa/javascript-algorithms-and-data-structures'
  },
  {
    id: 6,
    icon: '🌐',
    title: 'Full-Stack Web Development',
    provider: 'MCIT & YAT Learning Centers',
    status: 'Completed',
    description: 'Introduced to front-end and back-end web development concepts, databases, web technologies, and application deployment.',
    duration: '09/2020 – 11/2020',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL', 'Web Development'],
    link: 'https://drive.google.com/file/d/1YLnFbSPKkvvlgk9mW4zPN8Q-fJlF7TG0/view?usp=sharing'
  },
  {
    id: 7,
    icon: '🎨',
    title: 'Graphic Design',
    provider: 'National Telecommunication Institute (NTI)',
    status: 'Completed',
    description: 'Learned graphic design fundamentals, branding concepts, typography, color theory, and digital design tools.',
    duration: '2021',
    skills: ['Graphic Design', 'Adobe Photoshop', 'Adobe Illustrator'],
    link: 'https://drive.google.com/file/d/1RADsvgl8l8mSIcLsLIXJLw4ZrA0KzdrZ/view?usp=sharing'
  }
]
onMounted(() => {
  if (process.client) {
    // Degrees animation
    if (degreesRef.value) {
      const cards = degreesRef.value.querySelectorAll('.glass-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: degreesRef.value,
            start: 'top center+=100',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Courses animation
    if (coursesRef.value) {
      const courses = coursesRef.value.querySelectorAll('.glass-card')
      gsap.fromTo(
        courses,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: coursesRef.value,
            start: 'top center+=100',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }
})
</script>

<style scoped>
.glass-card {
  background: rgba(30, 20, 48, 0.4);
  backdrop-filter: blur(10px);
}
</style>
