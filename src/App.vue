<script setup lang="ts">
import Header from './components/Header.vue';
import About from './components/About.vue';
import Resume from './components/Resume.vue';
// import MyPortfolio from './components/MyPortfolio.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  
  <Header />

  <div class="container" id="main">
    <About />
    <Resume />
    <!-- <MyPortfolio /> -->
  </div>

  <Footer />

</template>
