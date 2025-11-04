<template>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">AutoModerno</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/ubicacion">Ubicación</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto">Contacto</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/carrito">Carrito</RouterLink>
          </li>
          <li class="nav-item">
            <router-link to="/compare" class="nav-link">Comparador</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/test-drive" class="nav-link">Prueba de Manejo</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.router-link-exact-active {
  color: #ffffff !important;
  font-weight: bold;
}
</style>
