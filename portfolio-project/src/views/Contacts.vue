<template>
  <div class="body">
    <div class="c-flex-container">
      <div class="c-inner-container">
        <h3 class="c-text-container">Follow me on my social media:</h3>
        <div class="c-icon-container">

             <a href="https://www.facebook.com/kianmiridoozini"> <img class="icon" src="@/assets/icons/facebook.png" alt="icon" height="60px" >  </a>
             <a href="https://www.youtube.com/@Kian.Miridoozini"> <img class="icon" src="@/assets/icons/youtube.png" alt="icon" height="60px"> </a>
             <a href="https://www.linkedin.com/in/kian-miridoozini"> <img class="icon" src="@/assets/icons/linkedin.png" alt="icon" height="60px"> </a>
             <a href="https://instagram.com"> <img class="icon" src="@/assets/icons/instagram.png" alt="icon" height="60px"> </a>

        </div>
        <h3 class="c-text-container2">Contact me via:</h3>
          <div class="c-icon-container2">
            <a href="https://gmail.com"> <img class="icon" src="@/assets/icons/gmail.png" alt="icon" height="60px"> </a>
            
          </div>
          <h2 class="e-address"> kian.miridoozini@gmail.COM</h2>
      </div>
    </div>
  </div>
  </template>

<script>

  export default {
    name: "contacts",

   };
  </script>

<style>

.body{
    border: 4px solid #000000;
     box-shadow : 0 0 40px 5px  #8e1e52;

}

.c-flex-container {
    margin-top: 5%;
   display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  background-color: #211427;
  justify-content:space-around;
  margin-bottom: 5%;
  height: auto;

}

.c-flex-container > div {
  background-color: #e8c869e8;
  width: 50%;
     text-align: left;
  padding: 2% 5% 2% 5%;
   font-size: 2vw;
   border: 4px solid #000000;
  box-shadow: 0 0 4px 5px  #8e1e52;
   
}
.c-flex-container > div:hover{
  box-shadow: 0 0 4px 5px #c72a73;
  background-color: #e8c869eb;
}
.c-inner-container p{
    padding-top: 8%;
    text-align: start;
}

.c-inner-container{
    display: flex;
    justify-content: center;
    border-radius: 15%;
    flex-wrap: wrap;
    margin: 1%;
     border: 2px solid #000000;
     box-shadow: 0 0 4px 5px #8e1e52;
}
.c-text-container , .c-text-container2, .e-address{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
   
}
.c-icon-container{
    display: flex;
    justify-content: space-between;
    width: 85%;
    justify-items: center;
    align-items: center;
    padding-top: 10%;
    padding-bottom: 10%;
    
}
.c-icon-container2{
    display: flex;
    width: 85%;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 2%;
    
}
.e-address, .c-flex-container img{
    transition:0.25s;  

}
.c-flex-container img:hover{
    scale: 1.5;
}
.e-address:hover{
    background-color: #6E1840;
  color: #E8C969 ; opacity: 80%;
}

@media all and (max-width: 700px){
    .c-icon-container{
        width: 85%;
        height: auto;
        flex-direction: column;
        justify-items: center;
    align-items: center;
    }
    .c-text-container, .c-text-container2, .e-address, .c-flex-container > div {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        font-size: 1.5em
    }
    .e-address{
        font-size: 1em;
        text-align: center;
    }
}


</style>

  