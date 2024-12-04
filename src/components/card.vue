<template>
  <div @click="navegar" class="m-2 carta">
    <img :src="imagen" class="rounded-3 border-white" alt="Poster">
    <div id="info">
      <h1>{{ titulo }}</h1>
      <h2>{{ id }}</h2>
      <h3>{{ alcohol }} - {{ tipo }}</h3>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    imagen: String,
    titulo: String,
    id: String,
    tipo: String,
    alcohol: String,
  },
  methods: {
    navegar() {
      this.$router.push({ name: "Detalle", params: { id: this.id } });
    }
  }
};
</script>

<style scoped>
.carta {
  margin: 20px;
  border: 3px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  background-color: #ff6720
}

.carta:hover {
  background: #242425;
  transform: scale(0.9);
}

.carta img {
  max-height: 400px;
}

#info {
  color: white;
  margin: 20px;
  align-items: center;
  justify-items: center;
}

h1{
  font-size: 60px;
}
</style>