<template>
  <div class="top__navbar__container">
    <div class="top__navbar__wrapper">
      <div class="top__navbar__title">
        Tomato
      </div>
      <div class="top__navbar__text">
        To-Do-List Alarm System
      </div>
      <div class="top__navbar__circle" />
    </div>
    <span class="top__navbar__hamburger" />
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.top__navbar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
}
.top__navbar__wrapper {
  display: flex;
  align-items: center;
  .top__navbar__title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-right: 10px;
    color: $gold;
  }
  .top__navbar__text {
    border-left: 1px solid $gold;
    padding-left: 5px;
    color:$gold;
  }
  .top__navbar__circle {
    mask-image: url('./../assets/image/topNavbar_component.svg');
    -webkit-mask-image: url('./../assets/image/topNavbar_component.svg');
    width: 304px;
    height: 130px;
    background: #C92F39;
  }
}
.top__navbar__hamburger {
  height: 2px;
  width: 40px;
  position: relative;
  background: $gold;
  display: flex;
  justify-content: flex-end;
  &::before, &::after {
    content: '';
    height: 2px;
    background: $gold;
    position: absolute;
  }
  &::before {
    top: -10px;
    width: 40px;
  }
  &::after {
    top: 10px;
    width: 30px;
  }
}
@media screen and (max-width: 700px) {
  .top__navbar__container {
    padding-top: 10px;
  }
  .top__navbar__wrapper {
    .top__navbar__circle {
      display: none;
    }
  }
}
</style>
