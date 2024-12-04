<template>
  <div class="detalles">
    <img :src="getCocs.strDrinkThumb" class="rounded-3 border-white" alt="Poster">
    <div id="info">
      <h1>{{ getCocs.strDrink }}</h1>
      <h2>{{ getCocs.idDrink }}</h2>
      <h3>{{ getCocs.strAlcoholic }} - {{ getCocs.strCategory }}</h3>
      <p>{{ getCocs.strInstructions }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Detalle',

  data() {
    return {
      id: this.$route.params.id,
    }
  },
  created() {
    this.obtenerCoc(this.id);
  },
  computed: {
    ...mapGetters(["getCocs"]),
  },
  methods: {
    ...mapActions(["obtenerCoc"]),
  }

}
</script>

<style scoped>
h1 {
  font-size: 60px;
}

#info {
  color: rgb(255, 255, 255);
  margin: 20px;
  align-items: center;
  justify-items: center;
}

.detalles {
  margin: 20px;
  border: 3px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  background-color: #ff6720
}

.detalles img {
  max-height: 300px;
}
</style>