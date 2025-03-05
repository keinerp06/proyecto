<template>
  <div></div>
  <MenuProyec></MenuProyec>
  <ContenidoMedio></ContenidoMedio>
  <FooterView></FooterView>
</template>

<script>
import ContenidoMedio from '@/components/ContenidoMedio.vue';
import FooterView from '@/components/FooterView.vue';
import MenuProyec from '@/components/MenuProyec.vue';

export default {
    name: 'VistaProyect',

    components: {
        MenuProyec,
        ContenidoMedio,
        FooterView
    }

}
</script>

<style>

</style>