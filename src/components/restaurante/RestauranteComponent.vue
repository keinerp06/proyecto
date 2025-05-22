<template>
  <div class="todo">
    <div class="cartas">
      <div class="contenedor-mitad1">
        <div class="contenedor1">
          <div class="img1"></div>
          <div class="info">
            <h2>Bandeja Paisa</h2>
            <p class="enlace">Ver mas</p>
          </div>
        </div>
        <div class="contenedor2">
          <div class="img2"></div>
          <div class="info">
            <h2>Langosta Thermidor</h2>
            <p class="enlace">Ver mas</p>
          </div>
        </div>
      </div>
      <div class="contenedor-mitad2">
        <div class="contenedor3">
          <div class="img3"></div>
          <div class="info">
            <h2>Costillas de cerdo al horno</h2>
            <p class="enlace">Ver mas</p>
          </div>
        </div>
        <div class="contenedor4">
          <div class="img4"></div>
          <div class="info">
            <h2>Tomahawk</h2>
            <p class="enlace">Ver mas</p>
          </div>
        </div>
      </div>
    </div>
    <div class="jugos">
      <h2 class="h2">jugos</h2>
      <div class="contenedor-jugos">
        <div class="jugo">
          <i class="fa-solid fa-glass-water"></i>
          <h3>Mariposa Naranja</h3>
          <button class="boton">$12000</button>
        </div>
        <div class="jugo">
          <i class="fa-solid fa-glass-water"></i>
          <h3>limonada de coco</h3>
          <button class="boton">$12000</button>
        </div>
        <div class="jugo">
          <i class="fa-solid fa-glass-water"></i>
          <h3>limonada de coco</h3>
          <button class="boton">$12000</button>
        </div>
        <div class="jugo">
          <i class="fa-solid fa-glass-water"></i>
          <h3>limonada de coco</h3>
          <button class="boton">$12000</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestauranteComponent",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.todo {
  position: relative;
  display: flex;
  width: 100%;
  height: 550px;
  top: 50px;
  justify-content: center;
  gap: 100px;
}

.cartas {
  background-size: cover;
  outline: 1px solid gray;
  border-radius: 20px;
  width: 700px;
  height: 100%;
}

.contenedor-mitad1,
.contenedor-mitad2 {
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
}

.contenedor1 {
  width: 45%;
  height: 100%;
  border-radius: 20px;
  outline: 1px solid gray;
}

.contenedor2 {
  width: 45%;
  height: 100%;
  border-radius: 20px;
  outline: 1px solid gray;
}

.contenedor3 {
  width: 45%;
  height: 100%;
  border-radius: 20px;
  outline: 1px solid gray;
}

.contenedor4 {
  width: 45%;
  height: 100%;
  border-radius: 20px;
  outline: 1px solid gray;
}

.img1 {
  background-image: url(/src/assets/platos/Bandeja\ paisa.jpeg);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.img2 {
  background-image: url(/src/assets/platos/Langosta.jpeg);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.img3 {
  background-image: url(/src/assets/platos/costillas.jpeg);
  width: 100%;
  height: 200px;
  background-size: cover;
  border-radius: 20px;
}

.img4 {
  background-image: url(/src/assets/platos/Tomahawk.jpg);
  width: 100%;
  height: 200px;
  background-size: 315px 200px;
  border-radius: 20px;
}

.info {
  padding: 0 10px;
}

.enlace {
  cursor: pointer;
}

.enlace:hover {
  background-color: transparent;
}

.jugos {
  width: 300px;
  height: 100%;
  border: solid 2px;
  border-radius: 20px;
}

.contenedor-jugos {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
}

.h2 {
  display: flex;
  justify-content: center;
}

.jugo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fa-solid {
  font-size: 60px;
}

.boton {
  width: 150px;
  height: 35px;
  border-radius: 10px;
  background-color: darkgreen;
  color: white;
}

.boton:hover {
  cursor: pointer;
}

.parrafo {
  padding: 50px;
  margin: 4px;
}
</style>