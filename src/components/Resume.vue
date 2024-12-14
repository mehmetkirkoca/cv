<template>
  <!-- ======= Resume Section ======= -->
  <section id="resume" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>Resume</h2>
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>Mehmet Kırkoca</h4>
            <p>
              <em>
                I am a solution-oriented and innovative software developer with a passion for creating high-performance,
                scalable applications. I have a proven track record in developing comprehensive projects and prioritize
                quality in my work. My goal is to contribute effectively to your company's growth journey with robust
                and efficient software solutions.
              </em>
            </p>
            <ul>
              <li>Bursa Turkey</li>
              <li>mehmet_kirkoca@hotmail.com</li>
            </ul>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Ankara University</h4>
            <h5>2005 - 2008</h5>
            <p><em>Computer and Technology School of Higher Education</em></p>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>FULL-STACK WEB DEVEOPER</h4>
            <h5>2016 - Present</h5>
            <p><em>Türk Ticaret Yazılım Hizmetleri</em></p>
            <ul>

              <li>
                <h6>2021 and now</h6>
                <ul>
                  <li>Actively working on haberyazilimi V3, developing it as a full-stack panel/website.</li>
                  <li>haberyazilimi V3 includes a page builder called Composer, allowing you to add components to page
                    layouts and build website pages.</li>
                  <li>Using Node.js for the HTML rendering process and site serving with microservices.</li>
                  <li>Implemented caching using Redis and memory cache.</li>
                  <li>Utilizing Redis pub/sub for messaging between microservices.</li>
                  <li>Using Elasticsearch for fast and relevant content searching.</li>
                  <li>Used technologies: PHP, Node.js, Redis, Elasticsearch, MySQL, CSS, Vue.js, JavaScript, jQuery</li>
                </ul>
              </li>

              <li>
                <h6>2020:</h6>
                <ul>
                  <li>Worked on the WebTv project, the company's web conferencing app based on the BigBlueButton
                    open-source project. Altered the user interface and added a few extra features.</li>
                  <li>Used technologies: Meteor, React.js, MongoDB, CSS, JavaScript.</li>
                </ul>
              </li>


              <li>
                <h6>2019:</h6>
                <ul>
                  <li>Worked on maintenance for theadx project, a Demand-Side Platform (DSP) and a Data Management
                    Platform (DMP).</li>
                  <li>Developed emarketingsuite.net, another DMP tool, using the Laravel framework and creating an API
                    to
                    integrate with theadx.</li>
                  <li>Utilized Golang to parse large XML data for performance improvement.</li>
                  <li>Used technologies: Laravel, Golang, MySQL, CSS, JavaScript, jQuery.</li>
                </ul>
              </li>

              <li>
                <h6>2018:</h6>
                <ul>
                  <li>Worked on web3 projects, focusing on the back-end and API consuming side.</li>
                  <li>Created a data segmentation tool for blockchain and developed the client-side and admin panel
                    using
                    Laravel.</li>
                  <li>Integrated Telegram API bots and assisted colleagues with community management and airdrop
                    campaigns.</li>
                  <li>Used technologies: Laravel, MySQL, CSS, JavaScript, jQuery.</li>
                </ul>
              </li>

              <li>
                <h6>2017:</h6>
                <ul>
                  <li>Developed an ERP app with Laravel for a small-sized lawyer company.</li>
                  <li>Used technologies: Laravel, MySQL, CSS, JavaScript, jQuery.</li>
                </ul>
              </li>


              <li>
                <h6>2016:</h6>
                <ul>
                  <li>Worked on haberyazilimi V2, improving themes and enhancing user experience.</li>
                  <li>Developed outsourced projects with CodeIgniter and created custom WordPress plugins for WordPress
                    websites.</li>
                  <li>Used technologies: PHP, Memcache, MySQL, CSS, JavaScript, jQuery.</li>
                </ul>
              </li>

            </ul>
          </div>
          <div class="resume-item">
            <h4>Full-Stack Web deveoper</h4>
            <h5>2012 - 2015</h5>
            <p><em>Htt Bilgisayar</em></p>
            <ul>
              <li>
                I worked here as a junior web developer and learned everything from scratch.
                While I had coding skills before, I didn't have much professional experience.
                I learned PHP, Javascript, jQuery, CSS, and MySQL from scratch. During my time here,
              </li>
              <li>I developed a school management system with a 3-user role authentication system: students, parents,
                and
                teachers. Teachers could post announcements, tests, and study materials, as well as input information
                about students so parents could monitor and learn about their students' current status.
              </li>
              <li>I developed the Istihdam Bürosu website to serve as a comprehensive platform for job seekers and
                employers. The website features a user-friendly interface designed with modern web standards, utilizing
                PHP for server-side scripting, CSS for styling, and JavaScript for enhanced interactivity.</li>
              <li>
                I worked on an outsourced project for this company that involved awarding points to employees based on their educational qualifications, certifications, and years of service at their current workplace. 
                The system already tracked this information, and my role was to calculate points using the existing data. Additionally, I developed a feature that allowed employees to select their preferred relocation city. 
                Employees were then ranked based on their points, which determined the priority for relocation.
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End Resume Section -->
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init();
})
</script>