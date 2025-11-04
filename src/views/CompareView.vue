<script setup>
import { ref, onMounted } from "vue";

// Variables
const marcas = ref([]);
const modelos1 = ref([]);
const modelos2 = ref([]);
const marca1 = ref("");
const marca2 = ref("");
const modelo1 = ref("");
const modelo2 = ref("");
const resultado = ref("");
const cargando = ref(false);

// Cargar marcas al iniciar
onMounted(async () => {
  try {
    const res = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json");
    const data = await res.json();
    marcas.value = data.Results.slice(0, 50); // limitar a 50 marcas
  } catch (error) {
    console.error("Error al obtener marcas:", error);
  }
});

// Cargar modelos según la marca seleccionada
const cargarModelos = async (marca, tipo) => {
  try {
    const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${marca}?format=json`);
    const data = await res.json();
    if (tipo === 1) modelos1.value = data.Results;
    else modelos2.value = data.Results;
  } catch (error) {
    console.error("Error al obtener modelos:", error);
  }
};

// Simular comparación
const comparar = () => {
  if (!marca1.value || !marca2.value || !modelo1.value || !modelo2.value) {
    resultado.value = "Selecciona ambas marcas y modelos antes de comparar.";
    return;
  }

  cargando.value = true;
  setTimeout(() => {
    cargando.value = false;
    const aleatorio = Math.random();
    if (aleatorio > 0.5) {
      resultado.value = `${marca1.value} ${modelo1.Model_Name} tiene mejor rendimiento que ${marca2.value} ${modelo2.Model_Name}.`;
    } else {
      resultado.value = `${marca2.value} ${modelo2.Model_Name} supera a ${marca1.value} ${modelo1.Model_Name} en desempeño.`;
    }
  }, 1000);
};
</script>

<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Comparador de Autos</h2>

    <div class="row g-3">
      <!-- Auto 1 -->
      <div class="col-md-6">
        <div class="card shadow-sm p-3">
          <h5 class="text-primary">Auto 1</h5>

          <label class="form-label mt-2">Marca</label>
          <select v-model="marca1" @change="cargarModelos(marca1, 1)" class="form-select">
            <option disabled value="">Selecciona una marca</option>
            <option v-for="m in marcas" :key="m.Make_ID" :value="m.Make_Name">
              {{ m.Make_Name }}
            </option>
          </select>

          <label class="form-label mt-3">Modelo</label>
          <select v-model="modelo1" class="form-select">
            <option disabled value="">Selecciona un modelo</option>
            <option v-for="mod in modelos1" :key="mod.Model_ID" :value="mod">
              {{ mod.Model_Name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Auto 2 -->
      <div class="col-md-6">
        <div class="card shadow-sm p-3">
          <h5 class="text-success">Auto 2</h5>

          <label class="form-label mt-2">Marca</label>
          <select v-model="marca2" @change="cargarModelos(marca2, 2)" class="form-select">
            <option disabled value="">Selecciona una marca</option>
            <option v-for="m in marcas" :key="m.Make_ID" :value="m.Make_Name">
              {{ m.Make_Name }}
            </option>
          </select>

          <label class="form-label mt-3">Modelo</label>
          <select v-model="modelo2" class="form-select">
            <option disabled value="">Selecciona un modelo</option>
            <option v-for="mod in modelos2" :key="mod.Model_ID" :value="mod">
              {{ mod.Model_Name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="text-center mt-4">
      <button class="btn btn-primary px-4" @click="comparar" :disabled="cargando">
        <span v-if="!cargando">Comparar</span>
        <span v-else class="spinner-border spinner-border-sm"></span>
      </button>
    </div>

    <div v-if="resultado" class="alert alert-info text-center mt-4">
      {{ resultado }}
    </div>
  </div>
</template>
