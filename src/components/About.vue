<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container">

      <div class="section-title">
        <h2>About</h2>
        <p>
          I am a solution-oriented and innovative software developer with a strong technical background in PHP and
          Node.js, along with in-depth experience in data technologies such as MySQL, Redis, MongoDB, and ElasticSearch.
          I have developed comprehensive projects using Laravel and Vue.js, driven by a passion for creating
          high-performance, scalable applications. I prefer using the Ubuntu operating system and actively utilize GIT
          for version control. In CI/CD processes, I prioritize quality through GitHub Actions and end-to-end testing
          with Cypress. My goal is to contribute effectively to your company's growth journey with robust and efficient
          software solutions.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-9 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Full Stack Web Developer.</h3>
          <p class="fst-italic">
            Fully passionate and highly motivated fullstack web developer who is looking for new opportunities feel free
            to contact me.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15 March 1987</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Turkey/Bursa</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{{ year }}</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mehmet_kirkoca@hotmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>



      </div>

    </div>
  </section><!-- End About Section -->
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>

<script lang="ts">

export default {
  data: function () {
    return {
      year: new Date().getFullYear() - 1987
    }
  }
}
</script>