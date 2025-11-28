<script setup>
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const telefono = ref('')
const mensaje = ref('')
const submitted = ref(false)

const submitForm = () => {
  if (nombre.value && email.value && telefono.value) {
    submitted.value = true
  } else {
    alert('Por favor, completa todos los campos obligatorios.');
  }
}
</script>

<template>
  <main class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div v-if="!submitted">
          <div class="text-center mb-4">
            <h2>Contáctanos</h2>
            <p>¿Tienes preguntas? Llena el formulario y te responderemos a la brevedad.</p>
          </div>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre Completo</label>
              <input type="text" class="form-control" id="nombre" v-model="nombre" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
              <label for="telefono" class="form-label">Número de Teléfono</label>
              <input type="tel" class="form-control" id="telefono" v-model="telefono" required>
            </div>
            <div class="mb-3">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea class="form-control" id="mensaje" rows="4" v-model="mensaje"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
            </div>
          </form>
        </div>
        <div v-else class="text-center">
          <h2>¡Gracias por contactarnos!</h2>
          <p>Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo a la brevedad.</p>
        </div>
      </div>
    </div>
  </main>
</template>
