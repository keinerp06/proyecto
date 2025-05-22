<template>
<menu-proyec></menu-proyec>
  <RestauranteComponent></RestauranteComponent>
  <div class="Todo">
    <div v-for="motico in Motos" :key="motico.id">
      <div class="paisajes">
        <div class="card">
          <div class="component-img">
            <img :src="motico.imagen" alt="" class="image-card" />
            <h4 class="name-card-float">{{ motico.nombre }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterView style="position: relative; bottom: 50rem"></FooterView>
</template>

<script>
import FooterView from "@/components/FooterView.vue";
import RestauranteComponent from "@/components/restaurante/RestauranteComponent.vue";
import MenuProyec from '@/components/MenuProyec.vue';

export default {
  name: "RestaurnateView",
  components: {
    RestauranteComponent,
    FooterView,
    MenuProyec,
  },
  data() {
    return {
      Motos: [],
    };
  },
  methods: {
    getALLMotos: async function () {
      let url = "http://localhost:80/api/motos";

      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log("estos son los datos");
          console.log(response.data);

          console.log("STATUS");
          console.log(response.status);

          vue.Motos = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
          console.log("Proceso terminando");
        });
    },
  },
  created: async function () {
    this.getALLMotos();
  },
};
</script>

<style scoped>
.Todo {
  position: relative;
  top: 15rem;
  height: 600px;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 1rem;
  /* border: 2px red solid; */
}

.card {
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 10px rgba(216, 219, 0, 0.664);
  border-radius: 10px;
}

.component-img {
  position: relative;
  top: 0;
  left: 0;
  flex-grow: 2;
}

.component-detail {
  flex-grow: 1;
  padding: 1rem;
}

.image-card {
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: center center;
}

.name-card-float {
  position: absolute;
  bottom: 5px;
  left: 1rem;
  color: white;
  padding: 1rem;
  background-color: rgba(18, 19, 15, 0.89);
  border-radius: 9999px;
}
</style>