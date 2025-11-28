<script setup>
import { cart } from '../store/cart.js'
import Swal from 'sweetalert2'
import { computed } from 'vue'

const total = computed(() => {
  return cart.items.reduce((acc, item) => {
    const price = Number(item.price.replace(/[^0-9.-]+/g,""));
    return acc + price;
  }, 0);
});

const simulatePayment = () => {
  if (cart.items.length === 0) {
    Swal.fire({
      title: 'Carrito Vacío',
      text: 'No hay artículos en tu carrito.',
      icon: 'warning',
      confirmButtonText: 'Ok'
    });
    return;
  }

  Swal.fire({
    title: '¡Pago Exitoso!',
    text: 'Tu compra ha sido realizada con éxito.',
    icon: 'success',
    confirmButtonText: 'Ok'
  }).then(() => {
    cart.clear()
  })
}
</script>

<template>
  <main class="container my-5">
    <div class="text-center mb-4">
      <h2>Mi Carrito de Compras</h2>
      <p>Revisa tus productos y completa la información para finalizar tu compra.</p>
    </div>

    <div class="row">
      <!-- Cart Items -->
      <div class="col-lg-8">
        <h4>Productos</h4>
        <div v-if="cart.items.length === 0" class="alert alert-info">
          No hay productos en tu carrito.
        </div>
        <div v-for="item in cart.items" :key="item.title" class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <img :src="item.imageUrl" :alt="item.title" class="img-fluid rounded-3" style="width: 65px;">
                </div>
                <div class="ms-3">
                  <h5>{{ item.title }}</h5>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div style="width: 80px;">
                  <h5 class="mb-0">{{ item.price }}</h5>
                </div>
                <a href="#!" @click.prevent="cart.remove(item)" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary and Payment -->
      <div class="col-lg-4">
        <div class="card bg-light">
          <div class="card-body">
            <h5 class="card-title">Resumen del Pedido</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between"><span>Subtotal</span><span>${{ total.toFixed(2) }}</span></li>
              <li class="list-group-item d-flex justify-content-between"><span>Envío</span><span>$0.00</span></li>
              <li class="list-group-item d-flex justify-content-between"><strong>Total</strong><strong>${{ total.toFixed(2) }}</strong></li>
            </ul>
            <hr>
            <h5 class="card-title mt-3">Información de Pago</h5>
            <p class="small text-muted">Esto es una demostración. No ingreses datos reales.</p>
            <form @submit.prevent="simulatePayment">
              <div class="mb-3">
                <label class="form-label">Número de Tarjeta</label>
                <input type="text" class="form-control" placeholder="1234 5678 9012 3457">
              </div>
              <div class="row">
                <div class="col-7 mb-3">
                  <label class="form-label">Expiración</label>
                  <input type="text" class="form-control" placeholder="MM/YY">
                </div>
                <div class="col-5 mb-3">
                  <label class="form-label">CVV</label>
                  <input type="text" class="form-control" placeholder="123">
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100">Realizar Pago</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
