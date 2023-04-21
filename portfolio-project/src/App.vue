
<template>

<Header/>
  <div class="parallax">
    <div class="b-wrapper">
    
      <div>
        <section>
<RouterView/>
       </section>
      </div>

</div>
</div>
<Footer/>
</template> 






<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';




</script>


<style >
.parallax{
    /* The image used */
background-image: url(@/assets/images/stars.jpeg);
/* Full height */
height: 100%; 

/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

</style>
