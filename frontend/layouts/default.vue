<template>
  <div class="h-100">
    <m-nav></m-nav>

    <b-container class="h-100" fluid>
      <b-row class="h-100">
        <b-col cols="12" md="3" xl="2" class="bd-sidebar-wrapper">
          <m-sidebar></m-sidebar>
        </b-col>

        <b-col cols="12" md="9" xl="10" class="px-0 d-flex flex-column offset-md-3 offset-xl-2">

          <div class="px-3 py-3 page-content">
            <nuxt></nuxt>
          </div>

          <m-footer></m-footer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">

</style>

<script>
  import mSidebar from '~/components/SideBar.vue';
  import mFooter from '~/components/Footer.vue';
  import mNav from '~/components/Navbar.vue';

  export default {
    components: {mSidebar, mNav, mFooter}
  }
</script>
