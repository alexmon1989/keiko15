<template>
  <div class="product-details">
    <b-row>
      <b-col cols="12" class="mt-3 mb-5 py-4 breadcrumbs d-flex justify-content-end">
        <div>
          <router-link :to="{path:'/'}">Главная</router-link>
          <i class="px-2">/</i>
        </div>
        <div>
          <router-link :to="{path:'/categories/' + product.categoryId}">{{ category.title }}</router-link>
          <i class="px-2">/</i>
        </div>
        <div>{{ product.title }}</div>
      </b-col>
    </b-row>


    <b-row class="py-3">
      <b-col cols="12" md="6" class="d-flex justify-content-center">
        <div>
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
          <img class="img-fluid" :src="product.img" alt="">
        </div>
      </b-col>

      <b-col cols="12" md="6">

        <h1 class="pt-2 pt-md-0">{{ product.title }}</h1>

        <div class="pt-4 price">
          {{ product.price }} <font-awesome-icon icon="ruble-sign" />
        </div>

        <div class="pt-1 pb-5 d-flex">
          <div class="pr-3">
            <a href="#" @click.prevent='removeFromCart(product)'>
              <font-awesome-icon icon="minus" style="font-size: 1rem; color: #cccc28"/>
            </a>
          </div>
          <div class="pr-3" v-if="$store.state.cart.list.find(p => p.id === parseInt(product.id))">
            {{$store.state.cart.list.find(p => p.id === parseInt(product.id)).quantity }}
          </div>
          <div class="pr-3" v-else>0</div>
          <div>
            <a href="#" @click.prevent='addToCart(product)'>
              <font-awesome-icon icon="plus" style="font-size: 1rem; color: #cccc28"/>
            </a>
          </div>
        </div>

        <hr>

        <b-tabs>
          <b-tab title="Описание" class="description" active>
            {{ product.description }}

            <div class="pt-3">
              <b-badge
                pill
                variant="dark"
                v-for="prop in product.props"
                :key="prop"
                class="mr-2 mt-2 p-2"
              >{{prop}}
              </b-badge>
            </div>
          </b-tab>
          <b-tab title="Поделиться">
            <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
            <script src="//yastatic.net/share2/share.js"></script>
            <div class="ya-share2 pt-1" data-services="vkontakte,facebook,odnoklassniki,gplus,twitter"></div>
          </b-tab>
        </b-tabs>

      </b-col>
    </b-row>

    <b-row class="mt-3 mt-lg-5" v-if="product.relatedProducts.length > 0">
      <b-col cols="12">
        <h3>С этим блюдом заказывают</h3>

        <no-ssr placeholder="Загрузка...">
          <carousel
            class="py-4"
            paginationActiveColor="#cccc28"
            :perPageCustom="[[480, 2], [650, 3], [1024, 4], [1280, 6]]"
          >
            <slide
              v-for="product in relatedProducts"
              :key="product.id"
              class="slide p-3"
              :class="{ 'max-width-300': relatedProducts.length < 6 }"
            >
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
              <router-link :to="{path:'/products/' + product.id}"><b-img :src="product.img" fluid alt="" /></router-link>

              <h5 class="pt-3"><router-link :to="{path:'/products/' + product.id}">{{ product.title }}</router-link></h5>

              <b-row class="pt-3">
                <b-col>
                  {{ product.price }} <font-awesome-icon icon="ruble-sign" />
                </b-col>

                <b-col class="d-flex justify-content-around">
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
            </slide>
          </carousel>
        </no-ssr>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    computed: {
      product() {
        return this.$store.state.products.list.find(p => p.id === parseInt(this.id));
      },
      category() {
        return this.$store.state.categories.list.find(c => c.id === parseInt(this.product.categoryId));
      },
      relatedProducts() {
        return this.$store.state.products.list.filter(p => this.product.relatedProducts.indexOf(p.id) !== -1);
      },
    },
    asyncData({params}) {
      return {id: params.id}
    },
    methods: {
      ...mapActions({
        addToCart: 'cart/add',
        removeFromCart: 'cart/remove',
      })
    },
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

  .product-details {
    .price {
      font-size: 1.5rem;
      font-weight: 300;
    }

    hr {
      border-bottom: 1px solid #44474a;
    }

    .nav-tabs {
      background-color: #000;
      padding-left: 0;
      padding-bottom: 1rem;
      border: 0;

      .nav-link {
        font-size: 1.2rem;
        padding: 3px 0;
        margin-right: 25px;
        color: #c0c0c0;
        background-color: inherit;

        &:hover {
          border: none;
        }

        &.active {
          color: $main_color;
          background-color: inherit;
          border: none;
          border-bottom: 2px solid $main_color;
        }
      }
    }

    .description {
      color: #dadada;
    }

    .badge {
      color: darken(#dadada, 10%);
    }

    .VueCarousel-dot-button {
      outline: none !important;
    }

    .max-width-300 {
      max-width: 300px;
    }

    .slide {
      border: 1px solid #44474a;

      &:hover {
        border: 1px solid $main_color;
      }

      h5 {
        a {
          color: #fff;
          font-size: 1.1rem;

          &:hover {
            color: $main_color;
          }
        }
      }
    }

    .markers {
      position: absolute;
    }
  }
</style>
