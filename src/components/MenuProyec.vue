<template>
  <div>
    <div class="header">
      <div class="logo-header"></div>
      <menu class="menu">
        <li><a href="/main/Index.html">Inicio</a></li>
        <li>
          <a href="/habitaciones/Habitaciones_general/index.html"
            >Habitaciones</a
          >
        </li>
        <li><a href="/Restaurante/main.html">Restaurante</a></li>
        <li><a href="/main/eventos/eventos.html">Eventos</a></li>
        <li>
          <a href="/main/contacto/contacto.html" rel="noopener noreferrer"
            >Contacto</a
          >
        </li>
      </menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuProyec",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  justify-content: space-between;
  font-family: "Noto Sans TC", sans-serif;
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  box-shadow: 5px 0 10px (0.0, 0.6);
  background-color: #fff;
  /* fija el header */
  position: fixed;
  z-index: 1;
}

.logo-header {
  background-image: url(../assets/logo.png);
  width: 100px;
  height: 100px;
  background-size: cover;
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
</style>