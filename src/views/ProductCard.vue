<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

// Función para cambiar la imagen si no carga correctamente
const fallbackImage = (event) => {
  event.target.src = "https://cdn.pixabay.com/photo/2016/11/29/06/15/auto-1868726_640.jpg";
};
</script>

<template>
  <div class="col">
    <div class="card h-100 shadow-sm">
      <!-- Imagen con control de error -->
      <img
        :src="imageUrl"
        class="card-img-top"
        alt="auto"
        loading="lazy"
        @error="fallbackImage"
      />

      <div class="card-body text-center">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text text-success fw-bold">{{ price }}</p>
        <button class="btn btn-primary btn-sm">Ver detalles</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  height: 220px;
  object-fit: cover;
  object-position: center;
  border-bottom: 1px solid #ddd;
}
</style>
