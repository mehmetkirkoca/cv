<template>
  <div class="mobile-nav-toggle d-xl-none" v-on:click="toggleHeader()">
    <font-awesome-icon v-if="!showHeader" icon="fa-solid fa-bars" />
    <font-awesome-icon v-if="showHeader" icon="fa-solid fa-times" />
  </div>

  <!-- ======= Header ======= -->
  <header id="header" v-if="showHeader">
    <div class="d-flex flex-column">

      <div class="profile">
        <img :src="profilePicture" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Mehmet Kırkoca</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="https://www.linkedin.com/in/mehmetkirkoca" target="_blank" class="linkedin">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
          <a href="https://github.com/mehmetkirkoca" class="github" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github fa-xl" />
          </a>
          <a href="https://twitter.com/devMkir" class="twitter" target="_blank">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#myLinks" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>My Links</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->

</template>

<script lang="ts">
    import profilePicture from '../assets/img/profile-img.png';
    export default {
        data: function () {
            return {
                profilePicture,
                showHeader: true
            }
        },
        components: {
          
        },
        methods:{
          toggleHeader() {
            this.showHeader = !this.showHeader
          }
        }
    }
</script>