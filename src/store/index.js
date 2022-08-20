import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

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
          {
            id: 6,
            item: 6,
            img: "image1.jpg",
            name: "camisa 06",
            description: "descricao do produto 06",
          },
        ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
