<template>
  <menu-proyec></menu-proyec>
  <div class="contacto">
    <h1>FOMULARIO DE CONTACTO</h1>
    <h2 class="subTitulo">
      <b> ¡Contactanos! </b>
    </h2>
    <div class="input-group">
      <label class="label">Nombre</label>
      <input
        autocomplete="off"
        name="Nombre"
        id="nombre"
        class="input"
        type="name"
      />
      <div></div>
    </div>

    <div class="input-group">
      <label class="label">Email </label>
      <input
        autocomplete="off"
        name="Email"
        id="Email"
        class="input"
        type="email"
      />
      <div></div>
    </div>

    <div class="input-group">
      <label class="label">Telefono</label>
      <input
        autocomplete="off"
        name="telefono"
        id="telefono"
        class="input"
        type="text"
      />
      <div></div>
    </div>

    <div class="input-group">
      <label class="label">Asunto</label>
      <input
        autocomplete="off"
        name="Asunto"
        id="Asunto"
        class="input"
        type="text"
      />
      <div></div>
    </div>

 
    <div class="input-group">
      <label class="label">Enviar mensaje</label>
      <input
        autocomplete="off"
        name="Asunto"
        id="Asunto"
        class="input"
        type="text"
      />
      <div></div>
    </div>

    <button type="button" class="enviar">Enviar</button>
  </div>

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
</template>

<script>
import MenuProyec from "../MenuProyec.vue";
export default {
  components: { MenuProyec },
  name: "ContactoComponent",
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  width: 100%;
}

body {
  width: 100%;
  height: 100%;
  background-color: #edf5fb;
}

.contacto {
  position: relative;
  left: 40rem;
  top: 18rem;
  display: flex;
  background-color: #fafafa10;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 700px;
  display: flex;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  border: 4px solid gray;
  border-top: 40px;
}

.contacto section {
  margin-top: 30px;
}

.contacto h1 {
  margin-bottom: 60px;
}

textarea {
  border-radius: 15px;
  width: 243px;
  height: 34px;
}

.enviar {
  background-color: #135d66;
  color: #fff;
  border-radius: 10px;
  width: 80px;
  height: 40px;
}

.tituloEventos {
  display: inline-block;
  color: #737373;
  position: relative;
  left: 360px;
  top: 557px;
  font-size: 28px;
}

.contactoLogo {
  font-size: 34px;
  user-select: none;
}

.footer {
  position: absolute;
  bottom: -200px;
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
  margin-top: 126px;
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
/* From Uiverse.io by alexruix */
.input {
  max-width: 190px;
  height: 44px;
  background-color: #05060f0a;
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
}

.label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #05060f99;
  transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
}

.input:hover,
.input:focus,
.input-group:hover .input {
  outline: none;
  border-color: #05060f;
}

.input-group:hover .label,
.input:focus {
  color: #05060fc2;
}
</style>