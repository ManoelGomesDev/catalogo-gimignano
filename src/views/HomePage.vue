<template>
  <div class="container">
    
    <div class="row justify-content-center">
        
      <Cards
        class="col-sm-12 col-md-6  col-lg-4 mb-3"
        style="width: 18rem;"
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
   
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cards from "@/components/Cards.vue";

export default {
  components: {
    Cards,
  },
  computed: mapState(['products'])

 
};
</script>

