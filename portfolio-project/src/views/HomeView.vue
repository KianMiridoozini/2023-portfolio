<template>
  <div class="body">
    <div class="holder">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/-SWguzL7pbs" frameborder="0"></iframe>
      </div>
      <div class="flex-container">
        <div class="inner-container">
          <h2 class="text-container">About Me</h2>
          <p>Aspiring multimedia-designer with passion for content creation and technology.
           I value optimizing everything I do, wether it’s related to enhancing user experience,
            or help branding a product. It is important to me to contribute with everything 
            I have in my arsenal to fulfill both client’s and user’s needs.</p>
        </div>
      
        <div class="inner-container">
          <div class="text-container2">
            <div class="education">
              <h2>Education </h2> 
              <ul>
                <li>Multimedia-design <br> (2022 - present)</li>
              </ul> 
            </div>
            <div class="cv-skills">
              <h2>Skills</h2>
              <ul>
                <li>Web development</li>
                <li>Content creation</li>
                <li>UX/UI</li>
              </ul>  
              <div class="CV-Link">
                <a href="https://drive.google.com/uc?export=download&id=1axZZ4diz-VzBFOM92sq4WTj8C8db-1gk" target="_blank">Get my full CV</a>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-skill">
      <div class="skills">
        <div class="skills-bar"><h1>Abilities</h1> 
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line"><span class="html"></span></div>
          </div>
          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line"><span class="css"></span></div>
          </div>
          <div class="bar">
            <div class="info">
              <span>PHOTO & VIDEO</span>
            </div>
            <div class="progress-line"><span class="photo-n-video"></span></div>
          </div>
          <div class="bar">
            <div class="info">
              <span>ILLUSTRATION</span>
            </div>
            <div class="progress-line">
              <span class="illustration"></span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>UX & UI</span>
            </div>
            <div class="progress-line">
              <span class="ux-n-ui"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}


</script>



<style>
    .body {
        border: 4px solid #000000;
        box-shadow: 0 0 40px 1px #8e1e52;
        height: 100%;

    }

    .holder {
        padding: 5%;
    }

    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
        border: 5px solid #000000;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        
    }
    .video-container:hover{
        box-shadow: 0 5px 30px #c12e72, 0 15px 12px rgba(0, 0, 0, 0.22);
    }

    .video-container iframe,
    .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .flex-container {
        margin-top: 5%;
        display: flex;
        flex-flow: row wrap;
        flex-wrap: wrap;
        background-color: #211427;
        justify-content: space-around;
        margin-bottom: -5%;
        border-right: 10px white;
        border: 5px solid #000000;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    }
    .flex-container:hover{
      box-shadow: 0 5px 30px #c12e72, 0 15px 12px rgba(0, 0, 0, 0.22);
    }

    .flex-container > div {
        color: white;
        width: 45%;
        text-align: left;
        
        padding: 2% 3% 4% 3%;
        font-size: 1.1rem;
        margin: 1%;
      
        /* border: 2px solid #000000;
        box-shadow: 0 0 4px 5px #8e1e52; */
    }
    /* .flex-container > div:hover{
      box-shadow: 0 0 4px 5px #c72a73;
      background-color: #e8c869eb;
    } */
    .inner-container p {
        padding-top: 8%;
        text-align: start;
        letter-spacing: 2px;
        line-height: 1.5;
        word-spacing: 1px;
        
    }

    .inner-container {
        display: flex;
        justify-content: center;
        border-radius: 8%;
        flex-wrap: wrap;
        
        
    }

    .text-container,
    .text-container2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text-container2 {
      
       
        padding-top: 8%;
        text-align: start;
        letter-spacing: 2px;
        line-height: 1.5;
        word-spacing: 1px;
        

    }

    .cv-skills {
        margin-top: 40%;
    }

    .cv-skills ul {
        padding-top: 10%;
    }

    .education h2 {
        padding-bottom: 10%;
    }

    .CV-Link{
      padding-top: 40%;
    }
    .CV-Link a{   
      color: #f7f7f7;
    }
    .CV-Link a:hover{
      color: rgb(230, 0, 255);
    }

    @media all and (max-width: 300px) {
        .flex-container > div {
            width: 90%;
            height: auto;
            margin: 20px;
            border-radius: 2%;
            
        }

    }
    @media all and (max-width: 700px) {
      .flex-container p {
          text-align: justify;

        }
    }

    @media all and (max-width: 550px) {
        .flex-container > div {
            width: 90%;
            height: auto;
            margin: 20px;
            font-size: 1.1em;
            text-align: left;

        }
        .flex-container p {
          text-align: justify;

        }
    }

    .container-skill {
        padding: 5%;
    }

    .skills {
        background: #211427;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3), (0, 0, 0, 0.22);
        }
      
        .skills-bar {
  padding: 5% 10%;
  border: 5px solid #000000;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  }
  .skills-bar:hover{
    box-shadow: 0 5px 30px #c12e72, 0 15px 12px rgba(0, 0, 0, 0.22);
  }

.skills-bar h1 {
  color: #ffffff;
  text-align: center;
  text-shadow: 0 6px 5px #c12e72;
}

.skills-bar .bar {
  margin: 25px 0;
}

.skills-bar .bar .info {
  margin-bottom: 8px;
  color: #ffffff;
}

.skills-bar .bar .info span {
  font-size: 1rem;
  font-weight: 400;
}

.skills-bar .bar .progress-line {
  position: relative;
  height: 10px;
  width: 100%;
  background: #f0f0f0;
 
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.bar .progress-line span {
  position: absolute;
  background: #c12e73;
  height: 100%;

  transform: scaleX(0);
  transform-origin: left;
  animation: animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.progress-line .html {
  width: 65%;
}

.progress-line .css {
  width: 65%;
}

.progress-line .photo-n-video {
  width: 70%;
}

.progress-line .illustration {
  width: 57%;
}

.progress-line .ux-n-ui {
  width: 75%;
}

.bar .progress-line span::before {
  position: absolute;
  content: "";
  height: 0;
  right: 0;
  top: -14px;
  width: 0;
  border: 7px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-style: #f0f0f0;
  border-top-color: #b71ca8;
}

.bar .progress-line span::after {
  position: absolute;
  right: 0;
  top: -28px;
  color: #000000;
  font-size: 12px;
  font-weight: 700;
  background: #ffffffe4;
  padding: 1px 8px;
  border-radius: 3%;
}

.progress-line .html::after {
  content: "65%";
}

.progress-line .css::after {
  content: "65%";
}

.progress-line .photo-n-video::after {
  content: "70%";
}

.progress-line .illustration::after {
  content: "57%";
}

.progress-line .ux-n-ui::after {
  content: "75%";
}


.bar:hover{
  scale: 1.03;
}
@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

@media all and (max-width: 730px) {
  .skills-bar .bar .progress-line{
    width: 100%;
  }
}

</style>