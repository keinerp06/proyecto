
<template>
  <menu-proyec></menu-proyec>
  <contenido-medio></contenido-medio>
  <div class="Todo">
    <div v-for="destinos in Destinos" :key="destinos.id">
      <div class="card">
        <div class="component-img">
          <img :src="destinos.imagen" alt="" class="image-card" />
          <h4 class="name-card-float">{{ destinos.nombre }}</h4>
        </div>
        <div class="component-detail">
          <p>{{ destinos.nombre }}</p>
          <h3>{{ destinos.filas }}</h3>

          <ButtonPrime @click="AbrirModal(destinos)" class="boton"
            >Ver Detalles</ButtonPrime
          >
        </div>
      </div>
    </div>

    <!-- Modal fuera del loop para evitar duplicados -->
    <DialogPrime
      :visible="abierto"
      maximizable
      modal
      :header="ciudadSeleccionada ? ciudadSeleccionada.nombre : 'Detalles'"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      @update:visible="CerrarModal"
    >
      <div class="modal-content" v-if="ciudadSeleccionada">
        <div class="modal-card">
          <div class="modal-img">
            <img :src="ciudadSeleccionada.imagen" alt="" class="modal-image" />
          </div>
          <div class="modal-detail">
            <h2 class="modal-title">{{ ciudadSeleccionada.nombre }}</h2>
            <div class="modal-info">
              <h3 class="modal-filas">{{ ciudadSeleccionada.filas }}</h3>
              <!-- Aquí puedes agregar más información de la ciudad -->
              <div
                class="modal-description"
                v-if="ciudadSeleccionada.descripcion"
              >
                <p>{{ ciudadSeleccionada.descripcion }}</p>
              </div>
            </div>
            <div class="modal-actions">
              <ButtonPrime @click="CerrarModal" class="boton-cerrar">
                Cerrar
              </ButtonPrime>
              <ButtonPrime @click="verCiudad" class="boton-ver-ciudad">
                Ver más información
              </ButtonPrime>
            </div>
          </div>
        </div>
      </div>
    </DialogPrime>
  </div>
  <FooterView style="position: relative; bottom: 60rem"></FooterView>
</template>

<script>
import ContenidoMedio from "@/components/ContenidoMedio.vue";
import FooterView from "@/components/FooterView.vue";
import MenuProyec from "@/components/MenuProyec.vue";

export default {
  name: "VistaProyect",

  components: {
    MenuProyec,
    ContenidoMedio,
    FooterView,
  },
  data() {
    return {
      Destinos: [],
      abierto: false,
      ciudadSeleccionada: null, // Nueva propiedad para almacenar la ciudad seleccionada
    };
  },

  methods: {
    getALLDestinos: async function () {
      let url =
        "https://cobuses.com.co/APIV2/model/destinos.php?dato=getalldestinos";

      let vue = this;
      await this.axios
        .get(url)
        .then(function (response) {
          // handle success
          console.log("estos son los datos");
          console.log(response.data);

          console.log("STATUS");
          console.log(response.status);

          vue.Destinos = response.data;
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
    AbrirModal: function (ciudad) {
      // Ahora recibe la ciudad como parámetro
      this.ciudadSeleccionada = ciudad;
      this.abierto = true;
      console.log("Ciudad seleccionada:", ciudad);
    },
    CerrarModal: function () {
      this.abierto = false;
      // Opcionalmente puedes limpiar la selección
      // this.ciudadSeleccionada = null;
    },
    verCiudad: function () {
      if (this.ciudadSeleccionada) {
        alert("La ciudad seleccionada es: " + this.ciudadSeleccionada.nombre);
        // Aquí puedes agregar más lógica, como navegar a otra página
        // this.$router.push(`/ciudad/${this.ciudadSeleccionada.id}`);
      }
    },
  },
  created: async function () {
    this.getALLDestinos();
  },
};
</script>

<style scoped>
.boton {
  background: color black;
}

/* Contenedor principal */
.Todo {
  position: relative;
  top: 15rem;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Carta individual */
.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* Contenedor de imagen */
.component-img {
  position: relative;
  height: 250px;
  overflow: hidden;
}

/* Imagen de la carta */
.image-card {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.card:hover .image-card {
  transform: scale(1.05);
}

/* Etiqueta flotante en la imagen */
.name-card-float {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

/* Contenido de detalles */
.component-detail {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: white;
}

/* Títulos en el detalle */
.component-detail h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

/* Párrafos en el detalle */
.component-detail p {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Botones dentro del detalle */
.component-detail button {
  margin-top: auto;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.component-detail button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

/* Estilos para el modal */
.modal-content {
  padding: 1rem;
}

.modal-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-img {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.modal-detail {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  text-align: center;
}

.modal-info {
  text-align: center;
  padding: 1rem 0;
}

.modal-filas {
  font-size: 1.5rem;
  color: #667eea;
  margin: 0.5rem 0;
}

.modal-description {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.modal-description p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.boton-cerrar {
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.boton-ver-ciudad {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.boton-cerrar:hover,
.boton-ver-ciudad:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .Todo {
    top: 5rem;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }

  .component-img {
    height: 200px;
  }

  .component-detail {
    padding: 1rem;
  }

  .name-card-float {
    bottom: 10px;
    left: 10px;
    padding: 6px 12px;
    font-size: 12px;
  }

  .modal-img {
    height: 200px;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .Todo {
    width: 95%;
    top: 3rem;
  }

  .component-img {
    height: 180px;
  }

  .modal-img {
    height: 180px;
  }
}

/* Animaciones de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease forwards;
}

.card:nth-child(2) {
  animation-delay: 0.2s;
}

.card:nth-child(3) {
  animation-delay: 0.4s;
}

/* Estados de carga */
.card.loading {
  opacity: 0.7;
  pointer-events: none;
}

.card.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>