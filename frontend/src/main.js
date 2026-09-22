import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'
import './components/LoadingScreen.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('scroll-reveal', {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed')
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    observer.observe(el)
  }
})

app.directive('tilt', {
  mounted(el) {
    const inner = el.querySelector('.tilt-inner') || el.firstElementChild
    if (!inner) return
    
    let mouseX = 0
    let mouseY = 0
    let lastX = 0
    let lastY = 0
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX = e.clientX - centerX
      mouseY = e.clientY - centerY
    })
    
    function animate() {
      const smoothFactor = 0.1
      const targetX = mouseX * 5
      const targetY = mouseY * 5
      
      lastX += (targetX - lastX) * smoothFactor
      lastY += (targetY - lastY) * smoothFactor
      
      inner.style.transform = `rotateX(${ -lastY }deg) rotateY(${ lastX }deg)`
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    // Reset on mouse leave
    el.addEventListener('mouseleave', () => {
      lastX = 0
      lastY = 0
      inner.style.transform = ''
    })
  }
})

app.mount('#app')