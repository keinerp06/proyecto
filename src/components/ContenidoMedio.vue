<template>
  <div>
    <div class="main">
      <div class="Slider-frame">
        <div class="textSlider">
          <h2>
            PIDE TU HABITACION
            <a href="/habitaciones/Habitaciones_general/index.html"
              ><b>¡AQUI!</b></a
            >
          </h2>
        </div>
        <ul>
          <li><img src="../assets/slider/OIG1.jpg" alt="" /></li>
          <li>
            <img src="../assets/slider/pexels-pixabay-164595.jpg" alt="" />
          </li>
          <li>
            <img src="../assets/slider/pexels-pixabay-279746.jpg" alt="" />
          </li>
          <li>
            <img
              src="../assets/slider/pexels-vecislavas-popa-1743231.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div class="icons">
        <h1>Descubre tu nuevo hospedaje favorito</h1>
        <div class="iconos">
          <div class="icono6">
            <div class="ico6"><i class="fa-solid fa-infinity"></i></div>
            <div class="letra">
              <h6>Todo incluido</h6>
            </div>
          </div>

          <div class="icono1">
            <div class="ico1">
              <i class="fa-solid fa-paw"></i>
            </div>
            <div class="letra">
              <h6>Mascota</h6>
            </div>
          </div>
          <div class="icono2">
            <div class="ico2"><i class="fa-solid fa-spa"></i></div>

            <div class="letra">
              <h6>spa</h6>
            </div>
          </div>
          <div class="icono3">
            <div class="ico3"><i class="fa-solid fa-mug-hot"></i></div>
            <div class="letra">
              <h6>Cafeteria</h6>
            </div>
          </div>
          <div class="icono4">
            <div class="ico4">
              <i class="fa-sharp fa-solid fa-person-swimming"></i>
            </div>
            <div class="letra">
              <h6>Piscina</h6>
            </div>
          </div>
          <div class="icono5">
            <div class="ico5"><i class="fa-solid fa-house"></i></div>
            <div class="letra">
              <h6>Cabaña</h6>
            </div>
          </div>
          <div class="icono7">
            <div class="ico7"><i class="fa-solid fa-water"></i></div>
            <div class="letra">
              <h6 class="h6">Vista al mar</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="Todo">
        <h1 class="parrafo">
          Descubre alojamientos en los destinos mas buscados
        </h1>
        <div class="contenedor">
          <div class="contenedor-mitad">
            <div class="contenedor1">
              <div class="img1"></div>
              <div class="info">
                <h2>Santa Marta</h2>
                <p>Colombia</p>
              </div>
            </div>

            <div class="contenedor2">
              <div class="img2"></div>
              <div class="info">
                <h2>San Andres</h2>
                <p>Colombia</p>
              </div>
            </div>

            <div class="contenedor3">
              <div class="img3"></div>
              <div class="info">
                <h2>Medellin</h2>
                <p>Colombia</p>
              </div>
            </div>

            <div class="contenedor4">
              <div class="img4"></div>
              <div class="info">
                <h2>Valledupar</h2>
                <p>Colombia</p>
              </div>
            </div>

            <div class="contenedor5">
              <div class="img5"></div>
              <div class="info">
                <h2>Santa Marta</h2>
                <p>Colombia</p>
              </div>
            </div>
            <div class="contenedor6">
              <div class="img6"></div>
              <div class="info">
                <h2>Bogota</h2>
                <p>Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContenidoMedio",
};
</script>
<style scoped>
.main {
  margin-top: 80px;
}

.Slider-frame {
  margin-bottom: 20px;
  position: relative;
  width: 1300px;
  height: 550px;
  margin: 50px auto 0;
  overflow: hidden;
  border-radius: 10px;
}

.Slider-frame ul {
  display: flex;
  padding: 30px 0;
  width: 400%;
  animation-iteration-count: infinite;
  animation-name: slide;
  animation-duration: 12s;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-delay: 0.5s;
  transition: margin-left 1s ease-in-out;
}

.Slider-frame li {
  border-radius: 10px;
  list-style: none;
  width: 100%;
}

.Slider-frame img {
  width: 100%;
  border-radius: 10px;
}

@keyframes slide {
  0% {
    margin-left: 0;
  }

  20% {
    margin-left: 0;
  }

  25% {
    margin-left: -100%;
  }

  45% {
    margin-left: -100%;
  }

  50% {
    margin-left: -200%;
  }

  70% {
    margin-left: -200%;
  }

  75% {
    margin-left: -300%;
  }

  100% {
    margin-left: -300%;
  }
}

.textSlider {
  position: absolute;
  background-color: #fafafa10;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  color: #fff;
  top: 220px;
  align-items: center;
  font-size: 18px;
  backdrop-filter: blur(0.4rem);
  -webkit-backdrop-filter: blur(0.4rem);
}

.textSlider h2 {
  user-select: none;
}

b {
  background-color: #83cda2;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}

/* iconos*/
.icons {
  padding: 50px;
}

.icons h1 {
  padding: 0 3px;
}

.iconos {
  display: flex;
  position: relative;
  right: 100px;
  justify-content: center;

  gap: 40px;
  padding: 10px 0;
  top: 10px;

  font-size: 50px;

  cursor: pointer;
}

.icono1 {
  color: black;

  width: 70px;
  height: 70px;
  border: solid 1px black;
  border-radius: 60px;
  cursor: pointer;
}

.ico1 {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 5px;
}

.letra {
  padding: 20px;
  font-size: 30px;
  padding: 10px;
  right: 50px;
  cursor: pointer;
  position: relative;
  top: 10px;
  right: 5px;
}

.icono2 {
  color: black;
  background: transparent;
  width: 70px;
  height: 70px;
  border: solid 1px black;
  border-radius: 60px;
}

.ico2 {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 5px;
}

.icono3 {
  color: black;
  background: transparent;
  width: 70px;
  height: 70px;
  border: solid 1px black;
  border-radius: 60px;
}

.ico3 {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 5px;
}

.icono4 {
  color: black;
  background: transparent;
  width: 70px;
  height: 70px;
  border: solid 1px black;
  border-radius: 60px;
}

.ico4 {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 5px;
}

.icono5 {
  color: black;
  background: transparent;
  width: 70px;
  height: 70px;
  border: solid 1px black;
  border-radius: 60px;
}

.ico5 {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 5px;
}

.icono6 {
  color: black;
  background: transparent;
  width: 70px;
  height: 70px;
  border: solid 1px black;
  border-radius: 60px;
}

.ico6 {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 5px;
}

.icono7 {
  color: black;
  background: transparent;
  width: 70px;
  height: 70px;
  border: solid 1px black;
  border-radius: 60px;
}

.ico7 {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 5px;
}

.h6 {
  display: flex;
  justify-content: flex-start;

  align-items: center;
  font-size: 15px;
}

.icono1:hover {
  background-color: lightskyblue;
}

.icono2:hover {
  background: lightskyblue;
}

.icono3:hover {
  background: lightskyblue;
}

.icono4:hover {
  background: lightskyblue;
}

.icono5:hover {
  background: lightskyblue;
}

.icono6:hover {
  background: lightskyblue;
}

.icono7:hover {
  background: lightskyblue;
}
.Todo{
    padding: 60px;
}
.contenedor1 {
  width: 300px;
  height: 250px;
  border-radius: 20px;
  outline: 1px solid gray;
}

.img1 {
  background-image: url(../assets/hoteles/cartagenaa.webp);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.contenedor2 {
  margin-left: 20px;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  outline: 1px solid gray;
}

.img2 {
  background-image: url(../assets/hoteles/san\ andres.webp);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.contenedor3 {
  margin-left: 20px;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  outline: 1px solid gray;
}

.img3 {
  background-image: url(../assets/hoteles/Medellin.webp);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.contenedor-mitad {
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
  flex-direction: row;
}

.info {
  padding: 0 10px;
}

.contenedor4 {
  margin-left: 20px;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  outline: 1px solid gray;
}

.img4 {
  background-image: url(../assets/hoteles/Valledupar.jpg);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.contenedor5 {
  margin-left: 20px;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  outline: 1px solid gray;
}

.img5 {
  background-image: url(../assets/hoteles/san\ andres.webp);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.contenedor6 {
  margin-left: 20px;
  width: 300px;
  height: 250px;
  border-radius: 20px;
  outline: 1px solid gray;
}

.img6 {
  background-image: url(../assets/hoteles/Casanare.jpg);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.parrafo {
  padding: 0 40px;
  margin: 4px;
}
</style>