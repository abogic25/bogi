<script setup>
import { ref, reactive } from 'vue'
import { useProfileStore } from '@/stores/profile'
import SectionTitle from '@/components/common/SectionTitle.vue'

const profile = useProfileStore()

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = form.email = form.subject = form.message = ''
  }, 3000)
}
</script>

<template>
  <div>
    <SectionTitle title="Contact" subtitle="Let's build something great together" />

    <div class="row g-3">
      <div class="col-lg-4">
        <div class="card-lux h-100 fade-up fade-up-1">
          <h5 class="fw-bold mb-3">Get in Touch</h5>
          <ul class="list-unstyled mb-4">
            <li class="mb-3 d-flex gap-3">
              <i class="bi bi-envelope stat-icon" style="font-size:.9rem; width:36px; height:36px; border-radius:10px; display:grid; place-items:center;" />
              <div>
                <div class="small" style="color: var(--lux-muted)">Email</div>
                <div>{{ profile.email }}</div>
              </div>
            </li>
            <li class="mb-3 d-flex gap-3">
              <i class="bi bi-telephone stat-icon" style="font-size:.9rem; width:36px; height:36px; border-radius:10px; display:grid; place-items:center;" />
              <div>
                <div class="small" style="color: var(--lux-muted)">Phone</div>
                <div>{{ profile.phone }}</div>
              </div>
            </li>
            <li class="d-flex gap-3">
              <i class="bi bi-geo-alt stat-icon" style="font-size:.9rem; width:36px; height:36px; border-radius:10px; display:grid; place-items:center;" />
              <div>
                <div class="small" style="color: var(--lux-muted)">Location</div>
                <div>{{ profile.location }}</div>
              </div>
            </li>
          </ul>

          <div class="d-flex flex-wrap gap-2">
            <a :href="profile.social.github"   target="_blank" class="btn btn-lux-outline btn-sm"><i class="bi bi-github" /></a>
            <a :href="profile.social.linkedin" target="_blank" class="btn btn-lux-outline btn-sm"><i class="bi bi-linkedin" /></a>
            <a :href="profile.social.twitter"  target="_blank" class="btn btn-lux-outline btn-sm"><i class="bi bi-twitter-x" /></a>
            <a :href="profile.social.dribbble" target="_blank" class="btn btn-lux-outline btn-sm"><i class="bi bi-dribbble" /></a>
          </div>
        </div>
      </div>

      <div class="col-lg-8">
        <div class="card-lux h-100 fade-up fade-up-2">
          <h5 class="fw-bold mb-3">Send a Message</h5>

          <div
            v-if="submitted"
            class="alert d-flex align-items-center gap-2 mb-3"
            style="background: rgba(34,197,94,.1); border:1px solid rgba(34,197,94,.3); color:#22c55e; border-radius:10px;"
          >
            <i class="bi bi-check-circle" /> Message sent! I'll get back to you soon.
          </div>

          <form @submit.prevent="handleSubmit">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small">Your Name</label>
                <input v-model="form.name" type="text" class="form-control form-control-lux" placeholder="John Doe" required />
              </div>
              <div class="col-md-6">
                <label class="form-label small">Email</label>
                <input v-model="form.email" type="email" class="form-control form-control-lux" placeholder="john@example.com" required />
              </div>
              <div class="col-12">
                <label class="form-label small">Subject</label>
                <input v-model="form.subject" type="text" class="form-control form-control-lux" placeholder="Project inquiry" required />
              </div>
              <div class="col-12">
                <label class="form-label small">Message</label>
                <textarea v-model="form.message" rows="5" class="form-control form-control-lux" placeholder="Tell me about your project..." required />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-lux">
                  <i class="bi bi-send me-1" /> Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
