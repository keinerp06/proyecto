<template>
  <div>
    <menu-proyec></menu-proyec>
    <main>
      <div class="imagen_grande">
        <h3>Habitacion mas solicitada:</h3>
        <img src="/src/assets/hoteles/Casanare.jpg" alt="" />
        <P
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          consectetur atque natus, similique maiores voluptatum vel, dolores
          vitae beatae cum facere optio? Mollitia cum recusandae laudantium,
          praesentium fugit nobis voluptates! Perferendis illum eligendi ea ipsa
          sequi facere veniam amet sunt mollitia cupiditate, aspernatur in
          dolore laudantium fugit accusamus facilis, iure error sed totam velit,
          nihil doloremque possimus reprehenderit! Eveniet, voluptates!</P
        >
      </div>
      <div class="contenedor_del_contenedor">
        <div class="cuadros">
          <h3>Otras Habitaciones</h3>
          <a href="/habitaciones/primera_habitacion/index.html">
            <div class="img1">
              <p>Santorini</p>
              <p>Sede medellin</p>
            </div>
          </a>
          <a href="/habitaciones/segunda_habitacion/index.html">
            <div class="img2">
              <p>Candel Resort</p>
              <p>Sede santa marta</p>
            </div>
          </a>
          <a href="/habitaciones/tercera_habitacion/inde.html">
            <div class="img3">
              <p>Oz Resort</p>
              <p>Sede valledupar</p>
            </div>
          </a>
        </div>
      </div>
    </main>
    <!--copia y pega el footer xd-->
    <footer class="footer">
      <div class="logo-header-footer"></div>
      <div class="footer1">Todos los derechos reservados</div>
      <div class="footer2">
        <h2>Redes sociales</h2>
        <div class="instagram"></div>
        <div class="Twitter"></div>
        <div class="Youtube"></div>
        <ul>
          <li class="instagram-li">Instagram</li>
          <li class="twitter-li">Twitter</li>
          <li class="youtube-li">Youtube</li>
        </ul>
      </div>
      <div class="footer3">
        <h2 class="contactos">Contactanos</h2>
        noseque@gmail.com
      </div>
    </footer>
  </div>
</template>

<script>
import MenuProyec from "../MenuProyec.vue";
export default {
  components: { MenuProyec },
  name: "HabitacionesComponent",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  object-fit: cover;
  font-family: system, -apple-system, BlinkMacSystemFont, \.SFNSText-Regular,
    San Francisco, Roboto, Segoe UI, Helvetica Neue, Lucida Grande, sans-serif;
}
html {
  height: 100%;
  width: 100%;
}

main {
  min-height: 100%;
  min-width: 100%;
}
body {
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  background-color: white;
}
.header {
  justify-content: space-around;
  font-family: "Noto Sans TC", sans-serif;
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  box-shadow: 5px 0 10px rgb(0, 0, 0, 0.6);
  background-color: #fff;
  /* fija el header */
  position: fixed;
  z-index: 2;
}

.logo-header {
  background-image: url(/src/assets/logo.png);
  width: 100px;
  height: 100px;
  background-size: cover;
  justify-content: start;
}

.menu {
  list-style: none;
  display: flex;
  width: 70%;
  gap: 60px;
}

.menu > li {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  transition: 0.69s;
}

.menu > li:hover {
  background: #abebc6;
  padding: 0 30px;
  transition: padding 1s, transform 3s;
  transform: translateY(0px);
}

a {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
}

.imagen_grande {
  position: relative;
  top: 50%;
  left: 10%;
  height: 550px;
  width: 1000px;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 130px;
}

.imagen_grande img {
  border-radius: 20px;
  height: 100%;
  width: 100%;
}

.imagen_grande P {
  position: relative;
  top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
}

.imagen_grande h3 {
  position: relative;
  left: 20px;
  bottom: 5px;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2rem;
}

.contenedor_del_contenedor {
  position: relative;
  top: 150px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}
.cuadros {
  height: 300px;
  width: 600px;
  display: grid;
  grid-template-rows: 25px 150px;
  grid-template-columns: 200px 200px 200px;
}

.cuadros h3 {
  grid-column: span 3;
  display: inline-block;
  position: relative;
  bottom: 0;
  width: 95%;
  left: 10px;
  border-bottom: 2px solid black;
}

.img1 {
  position: relative;
  left: 5px;
  top: 10px;
  height: 100%;
  width: 90%;
  background-image: url(/src/assets/slider/pexels-pixabay-164595.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  grid-row: 2;
  grid-column: span 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
}

.img1 p {
  position: relative;
  height: 20px;
  width: 100%;
  font-weight: bold;
  top: 46%;
  left: 3%;
}

.img2 {
  position: relative;
  left: 5px;
  top: 10px;
  height: 100%;
  width: 90%;
  background-image: url(/src/assets/slider/OIG1.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  grid-row: 2;
  grid-column: span 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
}

.img2 p {
  position: relative;
  height: 20px;
  width: 100%;
  font-weight: bold;
  top: 46%;
  left: 3%;
}

.img3 {
  position: relative;
  left: 5px;
  top: 10px;
  height: 100%;
  width: 90%;
  background-image: url(/src/assets/slider/pexels-vecislavas-popa-1743231.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  grid-row: 2;
  grid-column: span 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
}

.img3 p {
  position: relative;
  height: 20px;
  width: 100%;
  font-weight: bold;
  top: 46%;
  left: 3%;
}
.footer {
  position: relative;
  bottom: -250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: rgb(19, 93, 102);
}

ul li {
  margin-top: 20px;
  list-style: none;
}

.footer1,
.footer2,
.footer3 {
  display: flex;
  bottom: 60px;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #fff;
}

.contactos {
  font-weight: bold;
}

.instagram {
  position: absolute;
  left: 0px;
  width: 25px;
  height: 25px;
  background-size: cover;
  background-image: url(/src/assets/slider/instagram.png);
  top: 40px;
}

.Twitter {
  background-image: url(/src/assets/slider/Logo_of_Twitter.png);
  width: 25px;
  height: 25px;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 85px;
  left: 0px;
}

.Youtube {
  background-image: url(/src/assets/slider/Youtube_logo.png);
  width: 25px;
  height: 25px;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  top: 125px;
  left: 0px;
}

.logo-header-footer {
  position: relative;
  background-image: url(/src/assets/logo.png);
  width: 150px;
  height: 150px;
  background-size: cover;
  bottom: 49.1%;
}

a {
  text-decoration: none;
}
</style>