<template>
  <section class="container-fluid px-0">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
      >

        <!-- Text slides with image -->
        <b-carousel-slide img-src="https://picsum.photos/1920/1080/?image=52">
          <h3><a href="#" class="text-white">First slide</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est.
          </p>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1920/1080/?image=54">
          <h3><a href="#" class="text-white">Second slide</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est.
          </p>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1920/1080/?image=58">
          <h3><a href="#" class="text-white">Third slide</a></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est.
          </p>
        </b-carousel-slide>

      </b-carousel>

  </section>
</template>

<script>
  export default {
    layout: 'main_page',
    head () {
      return {
        title: 'Главная страница',
        meta: [
          { hid: 'description', name: 'description', content: '' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .container-fluid {

    .carousel-item:after {
      content:"";
      display:block;
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background:rgba(0, 0, 0, 0.6);
    }

  }
</style>
