<template>
    <div>
      <b-row>
        <b-col cols="12">
          <h1>{{ title }}</h1>
        </b-col>

        <b-col cols="12" class="my-4 py-4 filter d-flex">
          <div class="pr-3">Сортировать по:</div>
          <div class="pr-3"><a href="#" @click.prevent="sort('title')" :class="{ active: sortBy === 'title' }">Название</a></div>
          <div><a href="#" @click.prevent="sort('price')" :class="{ active: sortBy === 'price' }">Цена</a></div>
        </b-col>
      </b-row>

      <b-row class="mx-1 pb-5">
        <b-col class="px-3 py-3 product" cols="12" sm="6" md="3" xl="2" :key="product.id" v-for="product in products">

          <div class="content">
            <div class="markers">
              <router-link :to="{path:'/products/' + product.id}">
                <a href="#">
                  <img v-b-tooltip.html.bottom
                       title="Новинка!"
                       variant="outline-success"
                       src="/img/markers/new.png"
                       class="pr-1"
                       alt="" v-if="product.isNew">
                  <img v-b-tooltip.html.bottom
                       title="Хит!"
                       variant="outline-success"
                       src="/img/markers/hit.png"
                       class="pr-1"
                       alt=""
                       v-if="product.isHit">
                  <img v-b-tooltip.html.bottom
                       title="Осторожно, острое!"
                       variant="outline-success"
                       src="/img/markers/spicy.png"
                       class="pr-1"
                       alt=""
                       v-if="product.isSpicy">
                </a>
              </router-link>
            </div>

            <router-link :to="{path:'/products/' + product.id}"><img :src="product.img" class="img-fluid pb-3" alt=""></router-link>

            <router-link :to="{path:'/products/' + product.id}">{{ product.title }}</router-link>

            <div class="py-3 description">{{ product.description }}</div>
          </div>

          <b-row class="footer">
            <b-col class="price">
              {{ product.price }} <font-awesome-icon icon="ruble-sign" />
            </b-col>

            <b-col class="to-cart">
              <div>
                <a href="#" @click.prevent='removeFromCart(product)'>
                  <font-awesome-icon icon="minus" style="font-size: 1rem; color: #cccc28"/>
                </a>
              </div>
              <div v-if="$store.state.cart.list.find(p => p.id === parseInt(product.id))">{{$store.state.cart.list.find(p => p.id === parseInt(product.id)).quantity }}</div>
              <div v-else>0</div>
              <div>
                <a href="#" @click.prevent='addToCart(product)'>
                  <font-awesome-icon icon="plus" style="font-size: 1rem; color: #cccc28"/>
                </a>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        'sortBy': 'title'
      }
    },
    computed: {
      title () { return this.$store.state.categories.list.find(c => c.id === parseInt(this.id)).title },
      products() {
        let products = this.$store.state.products.list.filter(p => p.categoryId === parseInt(this.id));
        switch (this.sortBy) {
          case 'price':
            products = products.sort((a, b) => a.price - b.price);
            break;
          case 'title':
            products = products.sort((a, b) => a.title.localeCompare(b.title));
            break;
        }
        return products
      }
    },
    asyncData ({ params }) {
      return { id: params.id }
    },
    methods: {
      sort(key) {
        this.sortBy = key;
      },
      ...mapActions({
        addToCart: 'cart/add',
        removeFromCart: 'cart/remove',
      })
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: '' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";

  .filter {
    background-color: #1f1f1f;
    a {
      color: $main_color;
    }

    .active {
      text-decoration: underline !important;
      font-weight: 600;
    }
  }

  .product {
    border: 1px solid #44474a;
    margin: 0 -1px -1px 0;
    display: flex;
    flex-direction: column;

    &:hover {
      border: 1px solid $main_color;
      margin: -1px 0 0 -1px;
    }

    a {
      color: #f7f8fb;
      text-decoration: none;

      &:hover {
        color: $main_color;
      }
    }

    .content {
      flex-grow: 1;
      overflow: hidden;

      .markers {
        position: absolute;
      }

      .title {
        font-size: 1.1rem;
      }

      .description {
        font-size: 0.75rem;
        color: #7f828b;
      }
    }

    .footer {
      flex-grow: 0;
      font-size: 1.2rem;

      .price {
        white-space: nowrap;
      }

      .to-cart {
        display: flex;
        justify-content: space-around;
        div {
          text-align: center;
        }
      }
    }
  }
</style>
