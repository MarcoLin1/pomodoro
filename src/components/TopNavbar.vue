<template>
  <div class="top__navbar__container">
    <div class="top__navbar__wrapper">
      <div class="top__navbar__title">
        Tomato
        <span class="top__navbar__text">To-Do-List Alarm System</span>
      </div>
      <div class="top__navbar__circle" />
      <label
        for="top__navbar__checkbox"
        class="top__navbar__label"
      >
        <span class="top__navbar__hamburger" />
      </label>
    </div>
    <input
      id="top__navbar__checkbox"
      type="checkbox"
      class="top__navbar__checkbox"
    >
    <div class="top__navbar__list__wrapper">
      <ul class="top__navbar__list">
        <li
          v-for="item in items"
          :key="item.id"
          class="top__navbar__item"
        >
          <div
            class="top__navbar__link"
            @click.stop.prevent="focusItem(item.id)"
          >
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'Task'
        },
        {
          id: 2,
          title: 'Chart'
        },
        {
          id: 3,
          title: 'Setting'
        }
      ]
    }
  },
  methods: {
    focusItem (id) {
      if (id === 1) {
        this.$router.push({ name: 'todo-list' })
      } else if (id === 2) {
        this.$router.push({ name: 'trend-table' })
      } else {
        this.$router.push({ name: 'setting' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.top__navbar__container {
  align-items: center;
  margin: 0 auto;
}
.top__navbar__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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
    font-size: 1rem;
  }
  .top__navbar__circle {
    mask-image: url('./../assets/image/topNavbar_component.svg');
    -webkit-mask-image: url('./../assets/image/topNavbar_component.svg');
    width: 304px;
    height: 130px;
    background: #C92F39;
  }
}
.top__navbar__list__wrapper {
  text-align: center;
  width: 125px;
  border-radius: 50%;
  background: #C92F39;
  margin: 0 10px 0 auto;
  padding: 5px 0;
  color: #f2f0c9;
  transform: scale(1, 0);
  transform-origin: top;
  transition: all 0.4s ease-in;
}
.top__navbar__item {
  margin: 1rem 0;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in;
}
.top__navbar__checkbox {
  display: none;
}
.top__navbar__checkbox:checked ~ .top__navbar__list__wrapper {
  transform: scale(1, 1);
}
.top__navbar__checkbox:checked ~ .top__navbar__list__wrapper .top__navbar__item {
  opacity: 1;
}
.top__navbar__hamburger {
  height: 4px;
  width: 40px;
  position: relative;
  background: $gold;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  &::before, &::after {
    content: '';
    height: 4px;
    background: $gold;
    position: absolute;
    cursor: pointer;
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
}
@media screen and (min-width: 850px) {
  .top__navbar__hamburger {
    display: none;
  }
  .top__navbar__list__wrapper {
    visibility: hidden;
  }
}
</style>
