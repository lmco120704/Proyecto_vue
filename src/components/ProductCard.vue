<template>
  <div class="col">
    <div class="card h-100">
      <img :src="imageUrl" class="card-img-top" :alt="title">
      <div class="card-body text-center">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ price }}</p>
        <button @click="addToCart" class="btn btn-outline-primary">Agregar al Carrito</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../store/cart.js'
import Swal from 'sweetalert2'

const props = defineProps({
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

const addToCart = () => {
  cart.add({
    imageUrl: props.imageUrl,
    title: props.title,
    price: props.price
  })
  Swal.fire({
    title: '¡Vehículo agregado!',
    text: `${props.title} ha sido agregado al carrito.`,
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}
</script>
