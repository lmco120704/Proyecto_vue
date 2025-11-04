<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";

// Variables reactivas
const products = ref([]);
const cargando = ref(true);
const marcaSeleccionada = ref("toyota"); // marca inicial

// Función para cargar autos desde la API pública
const cargarAutos = async () => {
  cargando.value = true;
  try {
    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${marcaSeleccionada.value}?format=json`);
    const data = await res.json();

    // Convertimos los resultados en un formato compatible con las tarjetas
    products.value = data.Results.slice(0, 9).map(model => ({
    imageUrl: `https://loremflickr.com/600/400/${marcaSeleccionada.value},car`,
    title: `${marcaSeleccionada.value.toUpperCase()} ${model.Model_Name}`,
    price: `$${(Math.random() * 80000 + 20000).toFixed(0)}`
  }));

  } catch (error) {
    console.error("Error al obtener autos:", error);
  } finally {
    cargando.value = false;
  }
};

// Ejecutar al montar el componente
onMounted(cargarAutos);

// Cambiar de marca y recargar autos
const cambiarMarca = () => {
  marcaSeleccionada.value = marcaSeleccionada.value === "toyota" ? "nissan" : "toyota";
  cargarAutos();
};
</script>

<template>
  <!-- Hero Section -->
  <header class="hero-section text-white text-center bg-dark">
    <div class="container d-flex flex-column justify-content-center align-items-center" style="height: 60vh;">
      <h1 class="display-4">El Futuro de la Conducción</h1>
      <p class="lead mb-4">Explora modelos reales de {{ marcaSeleccionada.toUpperCase() }}</p>
      <button class="btn btn-light btn-lg" @click="cambiarMarca">
        Cambiar a {{ marcaSeleccionada === 'toyota' ? 'NISSAN' : 'TOYOTA' }}
      </button>
    </div>
  </header>

  <!-- Products Section -->
  <main class="container my-5">
    <h2 class="text-center mb-4">Catálogo de {{ marcaSeleccionada.toUpperCase() }}</h2>

    <div v-if="cargando" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-3">Cargando modelos...</p>
    </div>

    <div v-else class="row row-cols-1 row-cols-md-3 g-4">
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
