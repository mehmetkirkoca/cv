<template>
  <section id="myPortfolio" class="resume">
    <div class="container">
      <div class="section-title">
        <h2>My Portfolio</h2>
      </div>

      <div class="row">

        <div 
          v-for="(item, index) in portfolioItems" 
          :key="index" 
          class="col-lg-3 col-md-6 d-flex align-items-stretch"
          style="cursor: pointer;"
          @click="openModal(item)"
        >
          <div class="icon-box" data-aos="fade-up" data-aos-delay="100" >
            <h4 class="title">
              {{ item.title }}
            </h4>
            <img
              style="margin: 5px;"
              :src="item.image"
              class="img-fluid img-responsive"
              alt="Portfolio Image"
            />
          </div>
        </div>

        <b-modal v-model="showModal" :title="selectedItem.title">
          <p class="my-4" v-html="selectedItem.description"></p>
          <template #footer>
            <b-button @click="closeModal">Close</b-button>
          </template>
        </b-modal>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import istihdamburosuPng from "../assets/img/istihdamburosu.com.png";
import schoolManagementWebp from "../assets/img/school_management.webp";
import employeeRankingSystem from "../assets/img/employee_ranking_system.webp";

const portfolioItems = reactive([
  {
    title: "Job Search Platform",
    description: `
      <p>
          The "İstihdam Bürosu" website is a job search and recruitment platform that connects job seekers with employers. 
          The platform provides a user-friendly interface to search and apply for job listings across various industries and cities in Turkey.
      </p>

      <h2>Key Features:</h2>
      <ul class="key-features">
          <li><strong>Job Search Bar:</strong> Enables users to filter jobs by city and keyword criteria.</li>
          <li><strong>Highlighted Listings:</strong> Includes sections for "Urgent Job Listings" and "Latest Job Postings" to quickly grab user attention.</li>
          <li><strong>Category Navigation:</strong> A sidebar with categorized job sectors for easy navigation.</li>
          <li><strong>Employer & Employee Registration:</strong> Allows both job seekers and employers to register, post jobs, or browse opportunities.</li>
          <li><strong>Responsive Design:</strong> Ensures accessibility across devices.</li>
      </ul>

      <p>
          The website showcases a clean design, focusing on usability and accessibility to streamline the job search process. 
          Developed using PHP, CSS, and JavaScript, this project demonstrates expertise in crafting tailored web solutions for employment services.
      </p>

      <p class="visit-link">
          <a href="https://www.istihdamburosu.com/" target="_blank">Visit the website: istihdamburosu.com</a>
      </p>
    `,
    image: istihdamburosuPng
  },
  {
    title: "School Management System",
    description: `
      <p>
          I developed a school management system with a 3-user role authentication system: students, parents, and teachers. Teachers could post announcements, tests, and study materials, as well as input information about students so parents could monitor and learn about their students' current status.
      </p>
      <h2>Key Features:</h2>
      <ul>
          <li><strong>3-User Role Authentication:</strong> Students, parents, and teachers have separate access roles.</li>
          <li><strong>Teacher Controls:</strong> Post announcements, upload tests, study materials, and input student-related information.</li>
          <li><strong>Parent Monitoring:</strong> Parents can monitor their children's academic status and updates.</li>
          <li><strong>Student Access:</strong> Students can access learning resources, announcements, and test schedules.</li>
      </ul>
    `,
    image: schoolManagementWebp
  },
  {
    title: "Employee Ranking System",
    description: 
    `<p class="description">
        I worked on an outsourced project for this company that involved awarding points to employees based on their educational qualifications, certifications, and years of service at their current workplace. The system already tracked this information, and my role was to calculate points using the existing data. Additionally, I developed a feature that allowed employees to select their preferred relocation city. Employees were then ranked based on their points, which determined the priority for relocation.
    </p>

    <h2>Key Features:</h2>
    <ul class="key-features">
        <li><strong>Point Calculation System:</strong> Points awarded based on educational qualifications, certifications, and years of service.</li>
        <li><strong>Relocation City Selection:</strong> Employees can choose their preferred relocation city.</li>
        <li><strong>Employee Ranking:</strong> Employees are ranked based on their total points, which determines relocation priority.</li>
    </ul>`,
    image: employeeRankingSystem
  }
]);

const showModal = ref(false);
const selectedItem = reactive({
  title: "",
  description: "",
  image: ""
});


function openModal(item: { title: string; description: string; image: string }) {
  selectedItem.title = item.title;
  selectedItem.description = item.description;
  selectedItem.image = item.image;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

// AOS'u başlat
onMounted(() => {
  AOS.init();
});
</script>
