<template>
  <div>
    <div class="d-flex flex-row-reverse menu-toggle hidden-md-up">
      <b-btn v-b-toggle.myCollapse variant="danger" class="mx-2 btn-menu-toggle" style="display: none">
        <span class="when-opened">Закрыть меню</span>
        <span class="when-closed">Открыть меню</span>
      </b-btn>
    </div>

    <b-collapse id="myCollapse" class="bd-sidebar">
      <h3 class="h3-menu text-uppercase">Меню доставки</h3>
      <b-tabs>
        <b-tab title="Категории" active @click="refreshScrollbar('tab1')">
          <div class="menu" v-bar ref="tab1">
            <b-list-group>
              <b-list-group-item v-for="category in categories" :key="category.id" :to="{path:'/categories/' + category.id}" @click="hideMenuIfMobile()">
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
    </b-collapse>
  </div>
</template>

<script>
  export default {
    methods: {
      /**
       * Пересоздаёт скроллбар при переключении вкладок для корректного отображения.
       */
      refreshScrollbar: function(refName) {

        this.$vuebar.destroyScrollbar(this.$refs[refName]);
        this.$forceUpdate();

        this.$nextTick(function(){
          setTimeout(function(){
            this.$vuebar.initScrollbar(this.$refs[refName], {});
          }.bind(this), 200);
        });
      },

      /**
       * Отслеживает изменение ширины дисплея для скрытия/показа меню на моб. устройствах/десктопах.
       */
      handleResize: function() {
        const w = document.body.clientWidth;
        const btn = document.getElementsByClassName('btn-menu-toggle')[0];

        if (w > 768) {
          btn.style.display = "none";
          if (btn.classList.contains('collapsed')) {
            btn.click();
          }
        } else {
          btn.style.display = "inline";
          if (!btn.classList.contains('collapsed')) {
            btn.click();
          }
        }
      },

      /**
       * Прячет меню категорий на моб. устройствах.
       */
      hideMenuIfMobile: function() {
        const w = document.body.clientWidth;
        if (w <= 768) {
          const btn = document.getElementsByClassName('btn-menu-toggle')[0];
          if (!btn.classList.contains('collapsed')) {
            btn.click();
          }
        }
      }
    },

    computed: {
      categories () { return this.$store.state.categories.list },
      ingredients () { return this.$store.state.ingredients.list },
    },

    mounted() {
      // Скрыть/отобразить меню в зависимости от начальной ширины дисплей
      this.handleResize();


      // Обработчик изменения ширины дисплея
      window.addEventListener('resize', this.handleResize)
    },
  }
</script>

<style lang="scss">
  @import "~/assets/css/variables.scss";

  .bd-sidebar {
    height: calc(100vh - 4rem);

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
      height: calc(100vh - 11rem);
      background-color: #1e2021;

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
  }

  .menu-toggle {
    position: absolute;
    margin-top: 0.7rem;
    width: 100%;

    @media screen and (min-width: 768px) {
      display: none !important;
    }
  }
</style>
