<template>
    <b-row>
      <b-col cols="12">
        <h1>{{ title }}</h1>
      </b-col>

      <b-col cols="12" class="my-4 py-4 filter">
        <p>Фильтр</p>
      </b-col>



    </b-row>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          { id: 1, image: '', title: '', description: '', price: '' },
        ]
      }
    },
    computed: {
      title () { return this.$store.state.categories.list.find(p => p.id === parseInt(this.id)).title },
    },
    asyncData ({ params }) {
      return { id: params.id }
    },
  }
</script>

<style scoped lang="scss">
  .filter {
    background-color: #1f1f1f;
  }
</style>
