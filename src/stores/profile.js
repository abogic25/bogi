import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    name: 'Alex Morgan',
    role: 'Full-Stack Developer',
    tagline: 'Building elegant digital experiences with modern web tech.',
    location: 'Jakarta, Indonesia',
    email: 'alex.morgan@example.com',
    phone: '+62 812 3456 7890',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      dribbble: 'https://dribbble.com'
    },
    bio: `I'm a passionate full-stack developer with 6+ years of experience
    crafting scalable web applications and delightful user interfaces.
    I specialize in Vue, Node.js, and cloud-native architecture.`,
    stats: [
      { icon: 'bi-briefcase', label: 'Years Experience', value: '6+' },
      { icon: 'bi-kanban',    label: 'Projects Completed', value: '48' },
      { icon: 'bi-people',    label: 'Happy Clients', value: '32' },
      { icon: 'bi-award',     label: 'Awards Won', value: '7' }
    ],
    skills: [
      { name: 'Vue.js / Nuxt',    level: 95 },
      { name: 'JavaScript / TS',  level: 92 },
      { name: 'Node.js / Express',level: 88 },
      { name: 'UI / UX Design',   level: 82 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'Docker / CI-CD',   level: 78 }
    ],
    projects: [
      {
        title: 'Fintech Dashboard',
        description: 'Real-time analytics dashboard for a fintech startup with 50k+ users.',
        tags: ['Vue 3', 'Pinia', 'Chart.js'],
        icon: 'bi-graph-up-arrow',
        link: '#'
      },
      {
        title: 'E-Commerce Platform',
        description: 'Headless commerce with SSR, payment integration, and admin panel.',
        tags: ['Nuxt', 'Stripe', 'Tailwind'],
        icon: 'bi-bag-check',
        link: '#'
      },
      {
        title: 'Task Management App',
        description: 'Collaborative workspace with real-time sync and drag & drop.',
        tags: ['Vue', 'Firebase', 'WebSocket'],
        icon: 'bi-check2-square',
        link: '#'
      },
      {
        title: 'Portfolio CMS',
        description: 'Custom CMS for creative agencies with theme builder.',
        tags: ['Node.js', 'MongoDB', 'JWT'],
        icon: 'bi-brush',
        link: '#'
      }
    ],
    experience: [
      {
        role: 'Senior Full-Stack Developer',
        company: 'Nexus Digital',
        period: '2022 — Present',
        description: 'Leading frontend architecture and mentoring junior developers.'
      },
      {
        role: 'Frontend Developer',
        company: 'PixelWorks Studio',
        period: '2019 — 2022',
        description: 'Built responsive SPAs and design systems for enterprise clients.'
      },
      {
        role: 'Junior Web Developer',
        company: 'StartUp Hub',
        period: '2018 — 2019',
        description: 'Developed MVPs and collaborated with cross-functional teams.'
      }
    ]
  }),
  getters: {
    initials: (state) =>
      state.name.split(' ').map(n => n[0]).join('').toUpperCase()
  }
})
