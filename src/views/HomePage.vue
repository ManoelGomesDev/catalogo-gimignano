<template>
  <div class="container">
    <div class="row">
      <Cards
        class="col-sm-12 col-md-6 col-lg-4 mb-3"
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  components: {
    Cards,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          item: 1,
          img: "image1.jpg",
          name: "sapato",
          description: "descricao do produto 01",
        },
        {
          id: 2,
          item: 2,
          img: "image1.jpg",
          name: "camisa 02",
          description: "descricao do produto 02",
        },
        {
          id: 3,
          item: 3,
          img: "image1.jpg",
          name: "camisa 03",
          description: "descricao do produto 03",
        },
        {
          id: 4,
          item: 4,
          img: "image1.jpg",
          name: "camisa 04",
          description: "descricao do produto 04",
        },
        {
          id: 5,
          item: 5,
          img: "image1.jpg",
          name: "camisa 05",
          description: "descricao do produto 05",
        },
      ],
    };
  },
};
</script>
