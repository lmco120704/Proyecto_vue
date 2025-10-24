<script setup>
// No script logic needed for the static prototype
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
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=100" alt="product" class="img-fluid rounded-3" style="width: 65px;">
                </div>
                <div class="ms-3">
                  <h5>Sedan Clásico</h5>
                  <p class="small mb-0">Color: Azul</p>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div style="width: 80px;">
                  <h5 class="mb-0">$32,000</h5>
                </div>
                <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=100" alt="product" class="img-fluid rounded-3" style="width: 65px;">
                </div>
                <div class="ms-3">
                  <h5>Eléctrico Volt</h5>
                  <p class="small mb-0">Color: Blanco</p>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center">
                <div style="width: 80px;">
                  <h5 class="mb-0">$62,000</h5>
                </div>
                <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <!-- Shipping Information -->
        <h4 class="mt-4">Información de Envío</h4>
        <form class="mt-3" @submit.prevent>
          <div class="row">
            <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Nombre"></div>
            <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Apellido"></div>
            <div class="col-12 mb-3"><input type="text" class="form-control" placeholder="Dirección"></div>
            <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Ciudad"></div>
            <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Código Postal"></div>
          </div>
        </form>

      </div>

      <!-- Summary and Payment -->
      <div class="col-lg-4">
        <div class="card bg-light">
          <div class="card-body">
            <h5 class="card-title">Resumen del Pedido</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between"><span>Subtotal</span><span>$94,000</span></li>
              <li class="list-group-item d-flex justify-content-between"><span>Envío</span><span>$500</span></li>
              <li class="list-group-item d-flex justify-content-between"><strong>Total</strong><strong>$94,500</strong></li>
            </ul>
            <hr>
            <h5 class="card-title mt-3">Información de Pago</h5>
            <p class="small text-muted">Esto es una demostración. No ingreses datos reales.</p>
            <form @submit.prevent>
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
              <button class="btn btn-primary w-100">Realizar Pago</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
