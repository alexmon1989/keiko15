<template>
  <b-nav-item-dropdown class="pl-1 shopping-cart">
    <!-- Using button-content slot -->
    <template slot="button-content">
      <font-awesome-icon icon="shopping-cart" style="color: #cccc28"/>
      <span style="color: #cccc28">&nbsp;{{ countProducts }}</span>
    </template>

    <div class="cart-header">
      <h4>Корзина</h4>
    </div>

    <div v-if="products.length > 0">
      <div class="cart-body">
        <b-table dark :items="products">
          <template slot="id" slot-scope="row">
            <a href="#" @click.prevent='deleteFromCart(row.item)'>
              <font-awesome-icon icon="times" style="color: #cc3e44"/>
            </a>
          </template>
          <template slot="title" slot-scope="data">
            <a href="#">
              {{data.value}}
            </a>
          </template>
          <template slot="quantity" slot-scope="row">
            <div class="text-nowrap">
              <a href="#" @click.prevent='removeFromCart(row.item)'>
                <font-awesome-icon icon="minus" style="font-size: 10px; color: #cccc28"/>
              </a>&nbsp;
              {{row.item.quantity}}&nbsp;
              <a href="#" @click.prevent='addToCart(row.item)'>
                <font-awesome-icon icon="plus" style="font-size: 10px; color: #cccc28"/>
              </a>
            </div>
          </template>
          <template slot="price" slot-scope="data">
            <div class="text-nowrap">
              {{data.value}} <font-awesome-icon icon="ruble-sign" />
            </div>
          </template>
        </b-table>
      </div>

      <div class="cart-bottom">
        <div class="total-price">
          <div class="font-weight-bold">Общая сумма:</div>
          <div>{{ total }} <font-awesome-icon icon="ruble-sign" /></div>
        </div>
        <div class="text-center">
          <b-button class="order-btn">Оформить заказ</b-button>
        </div>
      </div>
    </div>
    <div class="cart-header" v-else>Корзина пока что пуста</div>
  </b-nav-item-dropdown>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "cart",
    computed: {
      ...mapGetters({
        products: 'cart/cartProducts'
      }),
      total() {
        return this.products.reduce((total, p) => {
          return total + p.price
        }, 0)
      },
      countProducts() {
        return this.products.reduce((total, p) => {
          return total + p.quantity
        }, 0)
      }
    },
    methods: {
      ...mapActions({
        addToCart: 'cart/add',
        removeFromCart: 'cart/remove',
        deleteFromCart: 'cart/delete',
      }),
    }
  }
</script>

<style lang="scss">
  .shopping-cart {

    .dropdown-toggle {
      &:after {
        color: #cccc28;
      }
    }

    .dropdown-menu {
      left: -250px;
      width: 300px;
    }

    .cart-header {
      padding: 10px 20px 10px 10px;
      display: flex;
      justify-content: center;
    }

    .cart-bottom {
      display: flex;
      flex-direction: column;
      padding-top: 15px;
      padding-bottom: 10px;

      .total-price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 20px 20px 20px;
      }

      .order-btn {
        background-color: #bdbd28;
        color: #000000;
      }
    }

    .cart-body {
      table > thead {
        display: none !important;
      }

      table {
        margin-bottom: 0;
        font-size: 0.8rem;

        a {
          color: #dadada;
        }
      }

      border-bottom: 1px solid #32383e;
    }
  }
</style>
