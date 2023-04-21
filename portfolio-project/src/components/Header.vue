<template>

<div class="navbar"><h3>Kian Miridoozini</h3> 
  
    <router-link to="/" class="router-link">Home</router-link>
    <router-link to="/MyWorks" class="router-link">My Works</router-link>
    <router-link to="/Contacts" class="router-link">Contacts</router-link>

</div>

</template>



<script setup>
</script>

<style  scoped>



.navbar {
  display: flex;
  width: 100%;
  background-color: #211427;
  overflow: auto;
  justify-content: center;
  align-items: center;
  
}
.navbar h3{
  position: absolute;
  left: 5%;
  color: rgba(255, 255, 255, 0.838);
  font-size: 1rem;
  font-weight: 300;
}

.navbar .router-link {
  float: left;
  padding: 10px;
  color: rgba(255, 255, 255, 0.838);
  text-decoration: none;
  font-size: 16px;
  width: 15%; 
  text-align: center;
  transition:0.25s;  
}

.navbar .router-link:hover {
  background-color: #6E1840;
  color: #E8C969 ; opacity: 80%;
}

.navbar .router-link.active {
  background-color: #6E1840;
}

@media all and (max-width: 609px) {
  .navbar .router-link {
    float: none;
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: left;
  }
  .navbar h3{
    display: none;
  }
}

</style>