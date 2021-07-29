<template>
  <div class="main__container">
    <div class="main__wrapper">
      <form action="">
        <div class="left__wrapper">
          <div class="left__wrapper__circle" />
          <div class="left__wrapper__input__group">
            <input
              id="text"
              type="text"
              name="text"
              class="left__wrapper__input"
              placeholder="Add a new mission..."
            >
            <button
              type="submit"
              class="left__wrapper__submit"
            >
              +
            </button>
          </div>
        </div>
      </form>
      <Clock />
      <div class="right__wrapper">
        <div class="right__wrapper__circle" />
        <div class="right__wrapper__icons__wrapper">
          <div class="right__wrapper__icon__container">
            <div class="right__wrapper__icon icon__item" />
          </div>
          <div class="right__wrapper__icon__container">
            <div class="right__wrapper__icon icon__chart" />
          </div>
          <div class="right__wrapper__icon__container">
            <div class="right__wrapper__icon icon__setting" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer__wrapper">
      <div class="footer__wrapper__circle" />
    </div>
  </div>
</template>

<script>
import Clock from './../components/Clock.vue'
export default {
  name: 'Home',
  components: {
    Clock
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.main__wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  .left__wrapper {
    width: 100%;
    position: relative;
    .left__wrapper__circle {
      width: 200px;
      height: 400px;
      background: #C12C37;
      border-radius: 0 200px 200px 0;
    }
    .left__wrapper__input__group {
      position: absolute;
      top: 50%;
      left: 25%;
      display: flex;
      opacity: 0.8;
      .left__wrapper__input {
        width: 200px;
        border: none;
        border-bottom: 1px solid #F2F0C9;
        background: none;
        color: #F2F0C9;
        font-size: 0.9rem;
        padding: 5px;
        &:focus {
          outline: none;
        }
        &::-webkit-input-placeholder {
          color: #F2F0C9;
          letter-spacing: 1px;
        }
      }
      .left__wrapper__submit {
        border: none;
        background: none;
        color: #F2F0C9;
        cursor: pointer;
      }
    }
  }
  .right__wrapper {
    width: 100%;
    position: relative;
    .right__wrapper__circle {
      width: 200px;
      height: 400px;
      background: #C12C37;
      border-radius: 200px 0px 0px 200px;
      position: absolute;
      right: 10px;
    }
    .right__wrapper__icons__wrapper {
      position: absolute;
      right: 7%;
      top: 16%;
      .right__wrapper__icon__container {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid $gold;
        margin-bottom: 10px;
      }
      .icon__item {
        mask-image: url('./../assets/image/icon_item.svg');
        -webkit-mask-image: url('./../assets/image/icon_item.svg');
        @extend %icon-style;
      }
      .icon__chart {
        mask-image: url('./../assets/image/icon_chart.svg');
        -webkit-mask-image: url('./../assets/image/icon_chart.svg');
        @extend %icon-style;
      }
      .icon__setting {
        mask-image: url('./../assets/image/icon_setting.svg');
        -webkit-mask-image: url('./../assets/image/icon_setting.svg');
        @extend %icon-style;
      }
    }
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
@media screen and (max-width: 875px) {
  .main__wrapper {
    .left__wrapper {
      .left__wrapper__input__group {
        .left__wrapper__input {
          width: 120px;
        }
      }
    }
  }
}

@media screen and (max-width: 770px) {
  .main__wrapper {
    .left__wrapper {
      .left__wrapper__input__group {
        left: 10px;
      }
      .left__wrapper__circle {
        width: 170px;
        height: 340px;
        border: 0 170px 170px 0;
      }
    }
    .right__wrapper {
      width: 180px;
      margin-left: 10px;
      .right__wrapper__circle {
        width: 170px;
        height: 340px;
        border: 0 170px 170px 0;
      }
    }
  }
}
@media screen and (max-width: 770px) {
  .main__wrapper {
    .right__wrapper {
      display: none;
    }
  }
  .footer__wrapper {
    .footer__wrapper__circle {
      display: none;
    }
  }
}
</style>
