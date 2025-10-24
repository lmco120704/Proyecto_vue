<template>
  <div class="col">
    <div class="card h-100">
      <img :src="imageUrl" class="card-img-top" :alt="title">
      <div class="card-body text-center">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ price }}</p>
        <a href="#" class="btn btn-outline-primary">Agregar al Carrito</a>
      </div>
    </div>
  </div>
</template>

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
</script>
