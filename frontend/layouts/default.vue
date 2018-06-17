<template>
  <div>
    <b-container fluid >
      <b-row>
        <b-col cols="12" md="3" xl="2" class="bd-sidebar">
          <m-sidebar></m-sidebar>
        </b-col>

        <b-col cols="12" md="9" xl="8">
          <nuxt/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
  import mSidebar from '~/components/SideBar.vue';

  export default {
    components: {mSidebar}
  }
</script>
