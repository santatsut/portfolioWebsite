<script setup>
</script>


<template>
  <div id="body">
    <!-- Top Section -->
    <div id="topSection">
      <!-- Flex container for left + right -->
      <div id="topContent">
        <div id="leftSection">
          <div id="homeMain">
            <div id="titleText">
              <h1>Phille 18</h1>
              <h1>Web Developer</h1>
              <h5 id="proText">Location: Linköping 📍</h5>
            </div>
            <h1 id="introText">Lets Talk</h1>
            <h4>Learn more About Me →</h4>
          </div>
        </div>

      <div id="rightSection">
        <div id="skillSection">
          <div class="bentoBox" id="skillBox">
            <img src="../components/images/htmlLogo.png" alt="img of html">
            <h3>HTML</h3>
          </div>
          <div class="bentoBox" id="skillBox">
            <img src="../components/images/cssLogo.svg" alt="img of html">
            <h3>CSS</h3>
          </div>
          <div class="bentoBox" id="skillBox">
            <img src="../components/images/jsLogo.png" alt="img of html">
            <h3>JavaScript</h3>
          </div>
          <div class="bentoBox" id="skillBox">
            <img src="../components/images/vueLogo.png" alt="img of html">
            <h3>Vue</h3>
          </div>
          <div class="bentoBox" id="skillBox">
            <img src="" alt="img of html">
            <h3>React</h3>
          </div>
          <div class="bentoBox" id="skillBox">
            <img src="" alt="img of html">
            <h3>Node.js</h3>
          </div>
          <div class="bentoBox" id="skillBox">
            <img src="" alt="img of html">
            <h3>Git</h3>
          </div>
          <div class="bentoBox" id="skillBox">
            <img src="" alt="img of html">
            <h3>Figma</h3>
          </div>
        </div>
          <div class="bentoBox" id="shortText">
            <h3>Web Developer</h3>
            <p>Web developer with a passion for creating dynamic and responsive websites. Skilled in HTML, CSS, and JavaScript, with a focus on user experience and accessibility. Eager to contribute to innovative projects and collaborate with teams to deliver high-quality web solutions.</p>
          </div>
        </div>
      </div>
    </div>
  </div> 

</template>

<style>

#body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#topSection {
  position: relative;
  width: 100%;
  height: 100vh;
}

#topContent {
  display: flex;
  align-items: flex-start;
  position: relative;
  width: 100%;
  margin-top: 25px;
}

#titleText h1 {
  color: var(--color-text);
}

#proText {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Times New Roman', Times, serif;
  font-size: medium;
  margin-top: 10px;
  font-weight: 300;
  letter-spacing: 0.2rem;
  color: rgb(199, 199, 199);

}

#background {
  position: absolute;
  margin-left: 23%;
  width: 50%;
}

#homeMain {
  margin: 50px 100px 0 100px;
}

#introText {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--color-text);
  font-size: 12rem;
  margin-top: 50px;
  font-weight: 700;
  max-width: 35vw;
  line-height: 1.2;
  letter-spacing: 1rem;
  margin-bottom: 0;
}

.bentoBox {
  display: flex;
  flex-direction: column;
  background-color: var(--baseColor);
  color: var(--color-text);
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}

.bentoBox h3 {
  margin: 0;
}

.bentoBox h5 {
  font-family: 'Times New Roman', Times, serif;
  font-size: small;
  margin: 25px;
}

#rightSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}

#skillSection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  position: relative;
  list-style: none;
  column-gap: 20px;
  row-gap: 25px;
  width: 30rem;
  height: auto;
}

#skillBox {
  gap: 12px;
  position: relative;
  width: 11vw;
  height: 8vh;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

#skillBox img {
  width: 30px;
  height: 30px;
  background-color: rgb(44, 44, 44);
  padding: 15px;
  border-radius: 8px;
  margin-left: 5px;
}

#shortText {
  position: relative;
  width: 30rem;
  margin: 25px;
  height: 275px;
}

#shortText h3 {
  font-weight: 400;
  text-decoration: underline;
}

#shortText p {
  font-family: 'Times New Roman', Times, serif;
  margin: 25px;
  font-weight: 300;
  text-align: center;
}
</style>
