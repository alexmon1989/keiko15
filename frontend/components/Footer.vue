<template>
    <b-row class="footer mx-0">
      <b-col cols="12" md="4" class="px-5">
        <div class="d-block pb-3"><img src="/img/logo_footer.jpg" alt=""></div>
        <p>Прием заказов: c 10:00 до 4:45 <br>Телефон: +7 495 234-24-24</p>
      </b-col>

      <b-col cols="12" md="4" class="px-5">
        <h5>Keiko</h5>

        <ul class="list-unstyled">
          <li><a href="#">О нас</a></li>
          <li><a href="#">Новости и акции</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </b-col>

      <b-col cols="12" md="4" class="px-5">
        <h5>Доставка</h5>

        <ul class="list-unstyled">
          <li><a href="#">Условия доставки</a></li>
        </ul>

        <div class="d-flex social">
          <div class="pr-2">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'vk']"/>
            </a>
          </div>
          <div class="px-2">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'instagram']"/>
            </a>
          </div>
          <div class="px-2">
            <a href="#">
              <font-awesome-icon :icon="['fab', 'facebook']"/>
            </a>
          </div>
        </div>
      </b-col>

      <b-col cols="12" class="footer-bottom py-3 text-center">
            &copy; 2018 доставка суши Keiko
      </b-col>
    </b-row>
</template>

<script>
  export default {
    name: "m-footer"
  }
</script>

<style scoped lang="scss">
  .footer {
    flex-grow: 0;
    color: #888;
    background-color: #2b2d2f;
    padding: 32px 0 0 0;

    h5 {
      color: darken(#888, 10%);
    }


    a {
      color: #888;
    }

    .footer-bottom {
      border-top: 1px solid #44474a;
    }
  }
</style>
