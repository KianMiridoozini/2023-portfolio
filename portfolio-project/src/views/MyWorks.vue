<template>

<div class="body">
<div class="mw-container"> <h1 class="container-text">Photos</h1>
  <div class="grid gallery"> 
    <div class="cell">
      <img src="@/assets/images/image-1.jpeg" alt="image-1">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         <p>Photography competition - 3rd place</p>
      </div>
    </div>
    <div class="cell">
      <img src="@/assets/images/image-2.jpeg" alt="image-2">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         <p>BBQ event - semester project</p>
      </div>
    </div>
    <div class="cell">
      <img src="@/assets/images/image-3.jpeg" alt="image-3">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         <p>BBQ event - semester project</p>
      </div>
    </div>
    <div class="cell">
      <img src="@/assets/images/image-4.jpeg" alt="image-4">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         <p>BBQ event - semester project</p>
      </div>
    </div>
    <div class="cell">
      <img src="@/assets/images/image-5.jpeg" alt="image-5">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         <p>Brand promotion - Fanø</p>
      </div>
    </div>
    <div class="cell">
      <img src="@/assets/images/image-6.jpeg" alt="image-6">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         <p>Photography competition</p>
      </div>
    </div>
   
  </div>
</div>

<div class="mw-container"> <h1 class="container-text">Videos</h1>
  <div class="grid gallery"> 
    <div class="cell">
      <img src="" alt="video-1">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
       
      </div>
    </div>
    <div class="cell">
      <img src="" alt="video-2">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
     
      </div>
    </div>
    <div class="cell">
      <img src="" alt="video-3">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         
      </div>
    </div>
    <div class="cell">
      <img src="" alt="video-4">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         
      </div>
    </div>
    <div class="cell">
      <img src="" alt="video-5">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         
      </div>
    </div>
    <div class="cell">
      <img src="" alt="video-6">
      <div class="description" style="position:absolute; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); color:#fff; padding:10px;">
         
      </div>
    </div>
   
  </div>
</div>


</div>

</template>


<script>
import image1 from '@/assets/images/image-1.jpeg'
import image2 from '@/assets/images/image-2.jpeg'
import image3 from '@/assets/images/image-3.jpeg'
import image4 from '@/assets/images/image-4.jpeg'
import image5 from '@/assets/images/image-5.jpeg'
import image6 from '@/assets/images/image-6.jpeg'


export default {
  name: 'MyWorks',

  data() {
    return {
      images: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,

        // add more images as needed
      ]
    }
  }
}

</script>


 
  
<style>

.mw-container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 3.5%;
  text-align: center;
  color: white;
}

.container-text{
    padding: 3%;
    font-weight: 350;
    font-size: 2.5rem;
    
}

.cell {
  margin: 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 3px solid #000000;
  box-shadow: 0 0 15px  #8e1e52;
  transition: all 0.25s ease-out;
}

.cell img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    
}
.cell:hover{
    transform: scale(1.1);
    overflow: visible;
}


.cell:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.description {
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  background-color:rgba(0, 0, 0, 0.5);
  color:#fff;
  padding:10px;
  display: block;
  opacity: 0; 
  transition: opacity 0.2s ease-out; 
}


.cell:hover .description {
  opacity: 1;
}

/* two columns */
@media screen and (min-width: 300px) {
  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cell {
    width: calc(50% - 2rem);
  }
}

/* three columns */
@media screen and (min-width: 800px) {
  .cell {
    width: calc(33.3333% - 2rem);
  }
}

</style>



  