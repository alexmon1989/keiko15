<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img src="/img/logo.jpg" class="d-inline-block align-top" alt="Keiko15 Logo">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="nav-menu">
        <b-nav-item href="tel: +7(8672)29-22-55">+7 (8672) 29-22-55</b-nav-item>
        <b-nav-item href="#" class="text-uppercase">Акции</b-nav-item>
        <b-nav-item href="#" class="text-uppercase">О доставке</b-nav-item>
      </b-navbar-nav>

    </b-collapse>

    <b-navbar-nav class="actions">
      <b-nav-item-dropdown class="user">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <font-awesome-icon icon="user"/>
        </template>
        <b-dropdown-item href="#">
          <font-awesome-icon icon="sign-in-alt"/>
          Вход
        </b-dropdown-item>
        <b-dropdown-item href="#">Регистрация</b-dropdown-item>
        <b-dropdown-item href="#">Забыли пароль?</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown class="pl-1 shopping-cart">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <font-awesome-icon icon="shopping-cart" style="color: #cccc28"/>
          <span style="color: #cccc28">&nbsp;3</span>
        </template>

        <div class="cart-header">
          <h4>Корзина</h4>
        </div>

        <div class="cart-body">
          <b-table dark :items="cartItems">
            <template slot="key" slot-scope="data">
              <a href="#">
                <font-awesome-icon icon="times" style="color: #cc3e44"/>
              </a>
            </template>
            <template slot="title" slot-scope="data">
              <a href="#">
                {{data.value}}
              </a>
            </template>
            <template slot="count" slot-scope="data">
              <a href="#">
                <font-awesome-icon icon="minus" style="font-size: 10px; color: #cccc28"/>
              </a>&nbsp;
              {{data.value}} шт.&nbsp;
              <a href="#">
                <font-awesome-icon icon="plus" style="font-size: 10px; color: #cccc28"/>
              </a>
            </template>
          </b-table>
        </div>

        <div class="cart-bottom">
          <div class="total-price">
            <div class="font-weight-bold">Общая сумма:</div>
            <div>400,00 руб.</div>
          </div>
          <div class="text-center">
            <b-button class="order-btn">Оформить заказ</b-button>
          </div>
        </div>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        cartItems: [
          {key: '1', title: 'Сяке', count: 1, price: '150,00 руб.'},
          {key: '2', title: 'Унаги', count: 2, price: '250,00 руб.'},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .nav-menu {
    a.nav-link {
      color: #fff !important;
    }
  }

  @media screen and (min-width: 768px) {
    .nav-menu {
      min-width: 75%;
      justify-content: space-around;
    }
  }

  @media screen and (min-width: 1200px) {
    .px-50--lg {
      padding-left: 50px !important;
      padding-right: 50px !important;
    }
    .nav-menu {
      min-width: 50%;
      justify-content: space-around;
    }
  }

  .actions {
    flex-direction: row;

    .dropdown-menu {
      background-color: #212529;
      color: #dadada;
      position: absolute !important;
      left: -120px;
    }

    .user {
      .dropdown-menu {
        a.dropdown-item {
          color: #dadada;
          background-color: #212529;
          &:hover {
            background-color: #47494e;
          }
          &:active {
            background-color: #47494e;
          }
        }
      }
    }

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
  }

</style>
