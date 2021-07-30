<template>
  <div class="middle__wrapper">
    <div class="middle__wrapper__content">
      <div class="middle__wrapper__title">
        Clean up the desk
      </div>
      <div class="middle__wrapper__time">
        06 : 15
      </div>
      <div class="middle__wrapper__icons__wrapper">
        <div class="middle__wrapper__icon__container">
          <div class="middle__wrapper__icon icon__ring" />
        </div>
        <div class="middle__wrapper__icon__container">
          <div class="middle__wrapper__icon icon__play" />
        </div>
        <div class="middle__wrapper__icon__container">
          <div class="middle__wrapper__icon icon__next" />
        </div>
      </div>
    </div>
    <div class="middle__wrapper__footer__text">
      Next: Feed the cat
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
  .middle__wrapper {
    width: 100%;
    height: 100%;
    .middle__wrapper__content {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      border: 2px solid $gold;
      margin: 10px auto 0 auto;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      z-index: 10;
    }
    .middle__wrapper__title {
      color: #F2F0C9;
      font-size: 1.2rem;
    }
    .middle__wrapper__time {
      color: #F2F0C9;
      font-size: 3.5rem;
    }
    .middle__wrapper__icons__wrapper {
      width: 60%;
      display: flex;
      justify-content: space-between;
      .middle__wrapper__icon__container {
        border: 1px solid $gold;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon__ring {
        mask-image: url('./../assets/image/icon_ring.svg');
        -webkit-mask-image: url('./../assets/image/icon_ring.svg');
        @extend %icon-style;
      }
      .icon__play {
        mask-image: url('./../assets/image/icon_play.svg');
        -webkit-mask-image: url('./../assets/image/icon_play.svg');
        @extend %icon-style;
      }
      .icon__next {
        mask-image: url('./../assets/image/icon_next.svg');
        -webkit-mask-image: url('./../assets/image/icon_next.svg');
        @extend %icon-style;
      }
    }
    .middle__wrapper__footer__text {
      text-align: center;
      margin-top: 20px;
      color: $gold;
      opacity: 0.5;
    }
  }
.footer__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  .footer__wrapper__circle {
    mask-image: url('./../assets/image/home_footer_component.svg');
    -webkit-mask-image: url('./../assets/image/home_footer_component.svg');
    width: 465px;
    height: 200px;
    background: #D9343F;
    margin-right: 100px;
  }
}
@media screen and (max-width: 1015px) {
  .middle__wrapper {
    .middle__wrapper__content {
      width: 300px;
      height: 300px;
    }
  }
}

@media screen and (max-width: 770px) {
  .middle__wrapper {
    .middle__wrapper__footer__text {
      padding-bottom: 10px;
    }
  }
}

@media screen and (min-width: 1300px) {
  .middle__wrapper {
    .middle__wrapper__content {
      width: 500px;
      height: 500px;
    }
  }
}
</style>
