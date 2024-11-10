<template>
  <section id="myPortfolio" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>My Portfolio</h2>
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <a href="" target="_blank">
            <img style="margin: 5px;" :src="istihdamburosuPng" width="250" heigth="40">
          </a>
        </div>

        <div class="col-lg-6" data-aos="fade-up">

          <b-button @click="showModal = true">Launch demo modal</b-button>

          <b-modal v-model="showModal" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
            <template #footer>
            <b-button @click="closeModal">Close</b-button>
            </template>
          </b-modal>


        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import istihdamburosuPng from '../assets/img/istihdamburosu.com.png';
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS on mount
onMounted(() => {
  AOS.init();
});

const showModal = ref(false);
function closeModal() {
  showModal.value = false;
}

</script>