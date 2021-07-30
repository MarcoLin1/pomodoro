<template>
  <div class="todo__container">
    <div class="todo__wrapper">
      <div class="todo__wrapper__right">
        <div class="todo__wrapper__right__circle" />
        <div class="todo__wrapper__right__icons__container">
          <div class="todo__wrapper__right__icon__wrapper">
            <div class="todo__wrapper__right__icon icon_item" />
          </div>
          <div class="todo__wrapper__right__icon__wrapper">
            <div class="todo__wrapper__right__icon icon_chart" />
          </div>
          <div class="todo__wrapper__right__icon__wrapper">
            <div class="todo__wrapper__right__icon icon_setting" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RightContent',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.todo__wrapper {
  position: relative;
  margin-top: 20px;
  display: flex;
  .todo__wrapper__left {
    width: 100%;
  }
  .todo__wrapper__right {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 10px;
    max-width: 800px;
    .todo__wrapper__right__icons__container {
      .todo__wrapper__right__icon__wrapper {
        .icon_item, .icon_chart, .icon_setting {
          @extend %icon-style;
          width: 50px;
          height: 50px;
          position: absolute;
          left: 10px;
          top: 10px;
          display: none;
        }
      }
    }
  }
}

@media screen and (min-width: 850px) {
  .todo__wrapper {
    .todo__wrapper__right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .todo__wrapper__right__circle {
        width: 500px;
        height: 500px;
        background: #C12C37;
        border-radius: 400px 0 0 400px;
        position: relative;
        top: -40px;
      }
      .todo__wrapper__right__icons__container {
        position: relative;
        right: 80%;
        top: -400px;
        .todo__wrapper__right__icon__wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1px solid $gold;
          position: relative;
          margin-bottom: 15px;
          .icon_item {
            mask-image: url('./../assets/image/icon_item.svg');
            -webkit-mask-image: url('./../assets/image/icon_item.svg');
            display: block;
          }
          .icon_chart {
            mask-image: url('./../assets/image/icon_chart.svg');
            -webkit-mask-image: url('./../assets/image/icon_chart.svg');
            display: block;
          }
          .icon_setting {
            mask-image: url('./../assets/image/icon_setting.svg');
            -webkit-mask-image: url('./../assets/image/icon_setting.svg');
            display: block;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1016px) {
  .todo__wrapper {
    .todo__wrapper__right {
      .todo__wrapper__right__container {
        padding-top: 30px;
        width: 400px;
      }
      .todo__wrapper__right__circle {
        width: 550px;
      }
    }
  }
}
@media screen and (min-width: 1230px) {
  .todo__wrapper {
    .todo__wrapper__right {
      .todo__wrapper__right__container {
        width: 400px;
      }
      .todo__wrapper__right__circle {
        width: 600px;
      }
    }
  }
}
</style>
