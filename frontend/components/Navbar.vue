<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
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

      <cart></cart>

    </b-navbar-nav>

  </b-navbar>
</template>

<script>
  import Cart from '~/components/Cart.vue';

  export default {
    name: "navbar",
    components: {Cart}
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
  }
</style>
