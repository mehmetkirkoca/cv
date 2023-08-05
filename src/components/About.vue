<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container">

      <div class="section-title">
        <h2>About</h2>
        <p>
          As an experienced software developer, I am good at PHP and MySQL, as well as Node.js. My expertise extends to
          other popular technologies such as Redis, and MongoDB. I have a proven track record of developing successful
          web-based applications using a range of languages and frameworks, including PHP, Laravel, Vue.js, JavaScript,
          and jQuery. I have also worked extensively with RESTful APIs, JSON, XML, and SOAP. The Laravel framework is my
          go-to platform. In my development process, I utilize Ubuntu as my operating system and GIT for version control.
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