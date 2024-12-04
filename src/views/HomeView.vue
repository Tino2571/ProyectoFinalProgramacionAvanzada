<template>
  <div class="home">
    <h1> Cocteles</h1>
    <div class="colorblack">Buscador de cocteles</div>
    <input v-model="palabra" type="text" class="form-control buscador" placeholder="Escribe una palabra para buscar">
    <button class="boton btn btn-dark mx-2" @click="buscar">Buscar</button>
    <br>
    <div v-if="getCocs.length">
      <card v-for="m in getCocs" :key="m.idDrink" :titulo="m.strDrink" :imagen="m.strDrinkThumb"
        :alcohol="m.strAlcoholic" :id="m.idDrink" :tipo="m.strCategory">
      </card>
    </div>
    <div v-else class="mt-5">
      Sin nada para mostrar
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import card from "../components/card.vue";

export default {
  name: 'HomeView',
  components: {
    card
  },
  data() {
    return {
      palabra: ""
    }
  },
  watch: {
    palabra(value) {
      if (value === "") {
        this.limpiarCocs();
      }
    }
  },
  computed: {
    ...mapGetters(["getCocs"]),
  },
  methods: {
    ...mapActions(["obtenerCocs", "limpiaCocs"]),
    buscar() {
      alert("JAJSAJSJAJAJAJ HOLA SOY EL TINO, YA JALO JAJASJFAJFSAJFASJ");
      this.obtenerCocs(this.palabra);
    }
  }
}
</script>

<style scoped>
.colorblack {
  color: black;
  font-size: larger;
}

.buscador {
  width: 300px;
  display: inline-block;
}

.boton {
  display: inline-block;
  font-weight: bold;
  background-color: #ff6720;

}
</style>