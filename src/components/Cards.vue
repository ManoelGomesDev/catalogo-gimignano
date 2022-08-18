<template>
  <div class="card-deck">
    <div class="card">
      <img class="card-img-top " :src="require(`@/assets/${product.img}`)" />
      <div class="card-body">
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-text">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
};
</script>
