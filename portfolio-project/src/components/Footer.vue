<template>
    
  <footer >
       <div class="footer">
         <div class="row">
            <ul>
                  <li><a href="https://www.linkedin.com/in/kian-miridoozini">LinkedIn</a></li>
                  <li><a href="https://www.youtube.com/@Kian.Miridoozini">YouTube</a></li>
                  <li><a href="https://www.facebook.com/kianmiridoozini">Facebook</a></li>
                  <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
         </div>
        <div class="row">
              Kian.Miridoozini@gmail.com
        </div>
       </div>
  </footer>
    
</template>


<script setup>
</script>



<style scoped>

.footer{
background:#000;
padding:10px 0px;
font-family: 'Play', sans-serif;
text-align:center;
}

.footer .row{
width:100%;
margin:1% 0%;
padding:0.6% 0%;
color:gray;
font-size:0.8em;
}

.footer .row a{
text-decoration:none;
color:gray;
transition:0.25s;  
}

.footer .row a:hover{
color:#fff;
}

.footer .row ul{
width:100%;
}

.footer .row ul li{
display:inline-block;
margin:0px 30px;
}

.footer .row a i{
font-size:2em;
margin:0% 1%;
}

@media (max-width:720px){
.footer{
text-align:center;
padding:5%;
}
.footer .row ul li{
display: flex;
flex-direction: column;
justify-content: center;
margin:10px 0px;
padding: 3%;

}
.footer .row a i{
margin:0% 3%;
}
}

</style>