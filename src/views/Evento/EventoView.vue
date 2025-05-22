<template>
<menu-proyec></menu-proyec>
  <div class="contenedor">
    <ButtonPrime
      label="Nuevo Estudiante"
      severity="contrast"
      @click="openModalEstudiante()"
    />

    <div v-show="loadingUsurios" class="card-items mt-2">
      <div class="card-item" v-for="n in 3" :key="n">
        <SkeletonPrime height="10rem" class="mb-2" />
        <SkeletonPrime width="80%" height="1.5rem" class="mb-1" />
        <SkeletonPrime width="60%" height="1.5rem" class="mb-1" />
        <SkeletonPrime width="50%" height="2rem" />
      </div>
    </div>

    <div class="card-items mt-4" v-show="!loadingUsurios">
      <div class="card-item" v-for="est in estudiantes" :key="est.cedula">
        <div
          class="card-item-img"
          @click="verEstudiante(est)"
          :style="{
            'background-image':
              est.genero === 'M'
                ? 'url(' + require('@/assets/Hombre.jpg') + ')'
                : 'url(' + require('@/assets/Mujer.jpg') + ')',
          }"
        ></div>
        <div class="card-item-dos mt-1">
          <h6 class="aling-center">{{ est.nombre }}</h6>
        </div>
        <div class="card-item-tres mt-1">
          <h6 class="aling-center">{{ est.programa }}</h6>
        </div>
        <div class="card-item-cuatro mt-1">
          <ButtonPrime
            @click="confirmarEliminacion(est)"
            icon="pi pi-trash"
            severity="danger"
          />
        </div>
      </div>
    </div>

    <DialogPrime
      :visible="verModal"
      @update:visible="ocultarModal"
      maximizable
      modal
      header="Información Estudiante"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <div v-show="loadingGuardar">
        <SkeletonPrime height="2rem" width="100%" class="mb-2" />
        <SkeletonPrime height="2rem" width="100%" class="mb-2" />
        <SkeletonPrime height="2rem" width="100%" class="mb-2" />
        <SkeletonPrime height="2rem" width="100%" class="mb-2" />
        <SkeletonPrime height="2rem" width="100%" class="mb-2" />
        <SkeletonPrime height="2rem" width="100%" class="mb-2" />
        <SkeletonPrime height="2rem" width="100%" class="mb-2" />
      </div>

      <div v-show="!loadingGuardar">
        <p class="m-0">
          <InputText
            type="text"
            v-model="estudiante.cedula"
            placeholder="Digite Cédula"
            class="w-100 mb-2"
          />
          <InputText
            type="text"
            v-model="estudiante.nombre"
            placeholder="Digite Nombre"
            class="w-100 mb-2"
          />
          <InputText
            type="text"
            v-model="estudiante.usuario"
            placeholder="Digite Usuario"
            class="w-100 mb-2"
          />
          <InputText
            v-model="estudiante.clave"
            type="password"
            placeholder="Digite Clave"
            :feedback="false"
            class="w-100 mb-2"
          />
          <InputText
            v-model="estudiante.confirmarClave"
            placeholder="Repita Clave"
            type="password"
            :feedback="false"
            class="w-100 mb-2"
          />
          <SelectPrime
            v-model="estudiante.genero"
            :options="generos"
            optionLabel="name"
            placeholder="Seleccione un género"
            class="w-100 mb-2"
          />
          <InputText
            class="w-full mb-2"
            type="text"
            v-model="estudiante.programa"
            placeholder="Digite programa"
          />
          <ButtonPrime
            :label="accionEstudiante"
            severity="contrast"
            @click="guardarEstudiante"
          />
        </p>
      </div>
    </DialogPrime>
    <ConfirmDialog group="templating">
      <template #message="slotProps">
        <div
          class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700"
        >
          <i
            :class="slotProps.message.icon"
            class="!text-6xl text-primary-500"
          ></i>
          <p>{{ slotProps.message.message }}</p>
        </div>
      </template>
    </ConfirmDialog>

    <ToastPrime />
    <footer-view style="position: relative; bottom: 70rem"></footer-view>
  </div>
</template>

<script >
import Skeleton from "primevue/skeleton";
import FooterView from "@/components/FooterView.vue";
import MenuProyec from '@/components/MenuProyec.vue';

export default {
  components: {
    SkeletonPrime: Skeleton,
    FooterView,
    MenuProyec,
  },
  data() {
    return {
      loadingUsurios: false,
      loadingGuardar: false,
      saveEstudiante: true,
      accionEstudiante: "Guardar",
      verModal: false,
      estudiantes: [],
      datosValidados: false,
      generos: [
        { name: "Masculino", code: "M" },
        { name: "Femenino", code: "F" },
      ],

      estudiante: {
        cedula: 0,
        nombre: "",
        usuario: "",
        clave: "",
        confirmarClave: "",
        genero: "",
        programa: "",
      },
    };
  },
  methods: {
    async getAllEstudiantes() {
      this.loadingUsurios = true;
      const url =
        "https://cobuses.com.co/APIV2/model/usuarios.php?dato=getallusuarios";
      try {
        const response = await this.axios.get(url);
        this.estudiantes = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loadingUsurios = false;
      }
    },

    openModalEstudiante() {
      this.verModal = true;
      this.saveEstudiante = true;
      this.accionEstudiante = "Guardar";
      this.estudiante = {
        cedula: 0,
        nombre: "",
        usuario: "",
        clave: "",
        confirmarClave: "",
        genero: "",
        programa: "",
      };
    },

    async guardarEstudiante() {
      if (!this.validar()) return;

      this.loadingGuardar = true;

      const data = {
        cedula: this.estudiante.cedula,
        nombre: this.estudiante.nombre,
        usuario: this.estudiante.usuario,
        clave: this.estudiante.clave,
        genero: this.estudiante.genero.code,
        programa: this.estudiante.programa,
      };

      const url = this.saveEstudiante
        ? "https://cobuses.com.co/APIV2/model/usuarios.php?dato=insertusuario"
        : "https://cobuses.com.co/APIV2/model/usuarios.php?dato=updateusuario";

      try {
        const response = await this.axios.post(url, JSON.stringify(data));
        alert(response.data);
        this.verModal = false;
        this.getAllEstudiantes();
        this.openModalEstudiante();
      } catch (error) {
        console.error(error);
      } finally {
        this.loadingGuardar = false;
      }
    },

    validar() {
      if (this.estudiante.cedula == 0) {
        alert("Por favor digite la cédula del estudiante");
        return false;
      } else if (!this.estudiante.nombre) {
        alert("Por favor digite el nombre del estudiante");
        return false;
      } else if (this.estudiante.clave !== this.estudiante.confirmarClave) {
        alert("Las claves no coinciden");
        return false;
      }
      return true;
    },

    ocultarModal(value) {
      if (!value) this.verModal = false;
    },

    async eliminar(est) {
      const data = { cedula: parseInt(est.cedula) };
      const url =
        "https://cobuses.com.co/APIV2/model/usuarios.php?dato=deleteusuario";

      try {
        const response = await this.axios.post(url, JSON.stringify(data));
        alert(response.data);
        this.getAllEstudiantes();
      } catch (error) {
        console.error(error);
        alert("Error al eliminar el estudiante");
      }
    },
    confirmarEliminacion(est) {
      this.$confirm.require({
        group: "templating",
        header: "Desea eliminar el usuario?",
        message: "Por favor seleccione una opcion.",
        icon: "pi pi-exclamation-circle",
        severity: "contrast",
        rejectProps: {
          label: "Cancelar",
          icon: "pi pi-times",
          severity: "contrast",
          outlined: true,
          size: "small",
        },
        acceptProps: {
          label: "Aceptar",
          severity: "danger",
          icon: "pi pi-youtube",
          size: "small",
        },
        accept: () => {
          this.eliminar(est);
        },
        reject: () => {},
      });
    },

    verEstudiante(estudiante) {
      this.estudiante = {
        ...estudiante,
        genero: {
          name: estudiante.genero === "M" ? "Masculino" : "Femenino",
          code: estudiante.genero,
        },

        confirmarClave: estudiante.clave,
      };

      this.accionEstudiante = "Actualizar";
      this.saveEstudiante = false;
      this.verModal = true;
    },
  },
  created() {
    this.getAllEstudiantes();
  },
};
</script>

<style>
.contenedor {
  background-color: #f9f9f9;
}

.card-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 90%;
  margin: 0 auto;
  transition: opacity 0.7s ease;
}

.card-item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 18rem;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-item:hover {
  background-color: #f0f0f0;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  border: solid 2px #248a1b;
}

.card-item-img {
  height: 10rem;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 5px 5px 0 0;
}
</style>