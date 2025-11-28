<script setup>
import { ref } from "vue";

const nombre = ref("");
const correo = ref("");
const modelo = ref("");
const fecha = ref("");
const mensaje = ref("");
const enviado = ref(false);
const cargando = ref(false);

const enviarSolicitud = async () => {
  // Validar campos
  if (!nombre.value || !correo.value || !modelo.value || !fecha.value) {
    mensaje.value = "Por favor completa todos los campos antes de enviar.";
    enviado.value = false;
    return;
  }

  cargando.value = true;

  // Simulación de consumo de un servicio web (espera de 1.5s)
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mostrar respuesta del “servicio”
  cargando.value = false;
  enviado.value = true;
  mensaje.value = `¡Gracias ${nombre.value}! Tu solicitud de prueba con el modelo ${modelo.value} ha sido agendada para el ${fecha.value}.`;

  // Limpiar formulario
  nombre.value = correo.value = modelo.value = fecha.value = "";
};
</script>

<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Agendar Prueba de Manejo</h2>

    <div class="card shadow-sm p-4 mx-auto" style="max-width: 600px;">
      <form @submit.prevent="enviarSolicitud">
        <div class="mb-3">
          <label class="form-label">Nombre completo</label>
          <input v-model="nombre" type="text" class="form-control" placeholder="Ej. Angel Fernanez" />
        </div>

        <div class="mb-3">
          <label class="form-label">Correo electrónico</label>
          <input v-model="correo" type="email" class="form-control" placeholder="Ej. example@mail.com" />
        </div>

        <div class="mb-3">
          <label class="form-label">Modelo de interés</label>
          <input v-model="modelo" type="text" class="form-control" placeholder="Ej. Toyota Corolla" />
        </div>

        <div class="mb-3">
          <label class="form-label">Fecha deseada</label>
          <input v-model="fecha" type="date" class="form-control" />
        </div>

        <div class="text-center">
          <button class="btn btn-primary px-4" :disabled="cargando">
            <span v-if="!cargando">Enviar solicitud</span>
            <span v-else class="spinner-border spinner-border-sm"></span>
          </button>
        </div>
      </form>

      <div v-if="mensaje" class="alert mt-4 text-center" :class="enviado ? 'alert-success' : 'alert-danger'">
        {{ mensaje }}
      </div>
    </div>
  </div>
</template>
