<template>
  <div>
    <m-nav></m-nav>

    <b-container fluid >
      <b-row>
        <b-col cols="12" md="3" xl="2" class="bd-sidebar">
          <m-sidebar></m-sidebar>
        </b-col>

        <b-col cols="12" md="9" xl="10" class="px-0">

            <div class="px-3 py-3 page-content">
              <nuxt></nuxt>
            </div>

            <m-footer></m-footer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
  .page-content {
    color: #f7f8fb;
  }
</style>

<script>
  import mSidebar from '@/components/SideBar.vue';
  import mFooter from '@/components/Footer.vue';
  import mNav from '@/components/navbar.vue';

  export default {
    components: {mSidebar, mNav, mFooter}
  }
</script>
