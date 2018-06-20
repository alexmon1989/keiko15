<template>
  <div>
    <h3 class="h3-menu text-uppercase">Меню доставки</h3>
    <b-tabs>
      <b-tab title="Категории" active @click="refreshScrollbar('tab1')">
        <div class="menu" v-bar ref="tab1">
          <b-list-group>
            <b-list-group-item v-for="category in categories" :key="category.id" href="#">
              <img :src="category.img" alt=""> {{ category.title }}
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-tab>
      <b-tab title="Ингредиенты" @click="refreshScrollbar('tab2')">
        <div class="menu" v-bar ref="tab2">
          <b-list-group>
            <b-list-group-item v-for="ingredient in ingredients" :key="ingredient.id" href="#">
              <img :src="ingredient.img" alt=""> {{ ingredient.title }}
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-tab>
    </b-tabs>
  </div>

</template>

<script>
  export default {
    methods: {
      refreshScrollbar: function(refName) {

        this.$vuebar.destroyScrollbar(this.$refs[refName]);
        this.$forceUpdate();

        this.$nextTick(function(){
          setTimeout(function(){
            this.$vuebar.initScrollbar(this.$refs[refName], {});
          }.bind(this), 200);
        });
      },
    },

    data() {
      return {
        categories: [
          {id: 1, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 2, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 3, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 4, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 5, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 6, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 7, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 8, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 9, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 10, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 11, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 12, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 13, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 14, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 15, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 16, img: '/img/categories/lapsha.png', title: 'Лапша'},
        ],
        ingredients: [
          {id: 1, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 2, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 3, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 4, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 5, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 6, img: '/img/categories/lapsha.png', title: 'Лапша'},
          {id: 7, img: '/img/categories/lapsha.png', title: 'Лапша'},
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/variables.scss";

  .h3-menu {
    height: 4rem;
    font-size: 1.1rem;
    color: #fff;
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 20px;
    background-color: #343a40;
    margin-bottom: 0;
  }

  .menu {
    height: calc(75vh - 11rem);
    background-color: #1e2021;

    @media screen and (min-width: 768px) {
      height: calc(100vh - 11rem);
    }

    .list-group-item {
      background-color: inherit;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: #2f3132 1px solid;
      margin-bottom: 0;
      color: #fff;
      font-size: 1rem;
      padding: 0;

      &:hover {
        color: $main_color;
      }

      &.active {
        color: $main_color;
      }
    }
  }

  .nav-tabs {
    background-color: #343a40;
    padding-left: 30px;
    padding-bottom: 10px;
    min-height: 3rem;
    border: 0;

    .nav-link {
      padding: 3px 0;
      margin-right: 25px;
      font-size: 0.8rem;
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



</style>
