<script setup lang="ts">
import Header from './components/Header.vue';
import About from './components/About.vue';
import Resume from './components/Resume.vue';
import MyLinks from './components/MyLinks.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  
  <Header />

  <div class="container" id="main">
    <About />
    <Resume />
    <MyLinks />
  </div>

  <Footer />

</template>
