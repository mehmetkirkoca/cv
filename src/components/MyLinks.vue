<template>
  <section id="myLinks" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>My Links</h2>
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <a href="https://www.showwcase.com/mehmetkirkoca" target="_blank">
            <img style="margin: 5px;" :src="showwcase" width="190" heigth="40">
          </a>
          <a href="https://replit.com/@mkirdev" target="_blank">
            <img style="margin: 5px;" :src="replit" width="250" heigth="40">
          </a>
          <a href="https://www.codewars.com/users/mehmetkirkoca" target="_blank">
            <img style="margin: 5px;" :src="codewars" width="250" heigth="40">
          </a>
          <a href="https://leetcode.com/mehmetkirkoca/" target="_blank">
            <img style="margin: 5px;" :src="leetCode" width="250" heigth="40">
          </a>
          <a href="https://www.hackerrank.com/mehmet_kirkoca" target="_blank">
            <img style="margin: 5px;" :src="hackerRank" width="250" heigth="40">
          </a>
        </div>
        <div class="col-lg-6" data-aos="fade-up">
          <a href="https://exercism.org/profiles/intro" target="_blank">
            <img style="margin: 5px;" :src="exercismIo" width="250" heigth="40">
          </a>
          <a href="https://edabit.com/user/bWnS7RLwQYybgbbjM" target="_blank">
            <img style="margin: 5px;" :src="edabit" width="250" heigth="40">
          </a>
          <a href="https://www.freecodecamp.org/mkDev" target="_blank">
            <img style="margin: 5px;" :src="freeCodeCamp" alt="" width="250" heigth="40" class="img-fluid">
          </a>
          <a href="https://stackoverflow.com/users/6284461" target="_blank">
            <img style="margin: 5px;" :src="stackOverflow" width="250" heigth="40">
          </a>
          <a href="https://codepen.io/mkirdev" target="_blank">
            <img style="margin: 5px;" :src="codePen" width="250" heigth="40">
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import showwcase from '../assets/img/showwcase.jpeg';
import codewars from '../assets/img/codewars.png';
import freeCodeCamp from '../assets/img/freecodecamp.png';
import stackOverflow from '../assets/img/stackoverflow.svg';
import hackerRank from '../assets/img/hackerRankLogo.png';
import leetCode from '../assets/img/leetcode.svg';
import exercismIo from '../assets/img/exercism.svg';
import replit from '../assets/img/replit.svg';
import edabit from '../assets/img/edabit.png';
import codePen from '../assets/img/codepen.png';
onMounted(() => {
  AOS.init();
})
</script>