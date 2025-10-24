<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
  {
    imageUrl: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Deportivo Z",
    price: "$55,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sedan Clásico",
    price: "$32,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Lujo Imperial",
    price: "$78,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "SUV Todoterreno",
    price: "$45,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Eléctrico Volt",
    price: "$62,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Convertible Air",
    price: "$59,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Clásico '69",
    price: "$85,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Urbano Go",
    price: "$21,000"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Superveloce",
    price: "$150,000"
  }
];
</script>

<template>
  <!-- Hero Section -->
  <header class="hero-section text-white text-center">
    <div class="container d-flex flex-column justify-content-center align-items-center" style="height: 60vh;">
      <h1 class="display-4">El Futuro de la Conducción</h1>
      <p class="lead">Descubre nuestro modelo estrella 2025</p>
      <a href="#" class="btn btn-primary btn-lg">Más Información</a>
    </div>
  </header>

  <!-- Products Section -->
  <main class="container my-5">
    <h2 class="text-center mb-4">Nuestro Catálogo</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :image-url="product.imageUrl"
        :title="product.title"
        :price="product.price"
      />
    </div>
  </main>
</template>