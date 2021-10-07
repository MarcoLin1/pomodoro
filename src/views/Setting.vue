<template>
  <div class="setting__container">
    <div class="setting__wrapper">
      <div class="setting__wrapper__left">
        <Clock
          :initial-working-time="newWorkingTime"
          :initial-todo-list="todoList"
          :initial-resting-time="newRestingTime"
        />
        <div class="setting__wrapper__left__circle" />
      </div>
      <div class="setting__wrapper__right">
        <Background />
        <div class="setting__wrapper__right__container">
          <div class="setting__wrapper__right__group">
            <div class="setting__wrapper__right__title">
              Time Setting
            </div>
            <div class="setting__wrapper__right__item__wrapper">
              <div class="setting__wrapper__right__item__text">
                Working time
              </div>
              <select
                id="workingTime"
                name="workingTime"
                class="working__time"
                @change="workingTime"
              >
                <option value="15">
                  15 min
                </option>
                <option value="20">
                  20 min
                </option>
                <option value="25">
                  25 min
                </option>
                <option value="30">
                  30 min
                </option>
              </select>
            </div>
            <div class="setting__wrapper__right__item__wrapper">
              <div class="setting__wrapper__right__item__text">
                Resting time
              </div>
              <select
                id="restingTime"
                name="restingTime"
                class="resting__time"
                @change="restingTime"
              >
                <option value="5">
                  5 min
                </option>
                <option value="10">
                  10 min
                </option>
                <option value="15">
                  15 min
                </option>
                <option value="20">
                  20 min
                </option>
              </select>
            </div>
          </div>
          <div class="setting__wrapper__right__group">
            <div class="setting__wrapper__right__title">
              Alarm
            </div>
            <div class="setting__wrapper__right__item__wrapper">
              <div class="setting__wrapper__right__item__text">
                Volume
              </div>
              <div class="setting__wrapper__right__input__group">
                <input
                  id="switch"
                  type="checkbox"
                  class="setting__wrapper__right__item__switch"
                  @click="turnOnRing"
                >
                <label
                  for="switch"
                  class="switch__label"
                />
              </div>
            </div>
            <div class="setting__wrapper__right__item__wrapper">
              <div class="setting__wrapper__right__item__text">
                Audio
              </div>
              <select
                id="audio"
                name="audio"
                class="audio"
              >
                <option value="1">
                  Basic
                </option>
                <option
                  value="2"
                  disabled
                >
                  Jazz
                </option>
                <option
                  value="3"
                  disabled
                >
                  Hip Hop
                </option>
                <option
                  value="4"
                  disabled
                >
                  Romantic
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Background from './../components/Background.vue'
import Clock from './../components/Clock.vue'
import beep from './../assets/ring/beep.mp3'
import { mapState } from 'vuex'
export default {
  name: 'Setting',
  components: {
    Background,
    Clock
  },
  data () {
    return {
      beepAudio: new Audio(beep),
      newWorkingTime: 0,
      newRestingTime: 0
    }
  },
  computed: {
    ...mapState(['todoList'])
  },
  methods: {
    turnOnRing () {
      const checkbox = document.querySelector('#switch')
      if (!checkbox.checked) {
        this.beepAudio.pause()
      } else {
        this.beepAudio.play()
      }
    },
    workingTime () {
      const workingTime = document.querySelector('#workingTime')
      this.newWorkingTime = Number(workingTime.value)
    },
    restingTime () {
      const restingTime = document.querySelector('#restingTime')
      this.newRestingTime = Number(restingTime.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.setting__wrapper {
  position: relative;
  display: flex;
  .setting__wrapper__left {
    width: 100%;
  }
  .setting__wrapper__right {
    position: relative;
    margin-left: 10px;
    width: 100%;
    max-width: 800px;
    &__container {
      max-width: 330px;
      padding-right: 10px;
    }
    &__group {
      width: 100%;
      color: $gold;
    }
    &__title {
      margin-bottom: 20px;
      font-weight: 700;
    }
    &__item__wrapper {
      border-bottom: 1px dashed #f2f0c962;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      padding-bottom: 10px;
      padding-right: 5px;
    }
    &__item__text {
      font-size: 0.9rem;
    }
  }
  .working__time, .resting__time, .audio {
    border: none;
    background: #C12C36;
    color: $gold;
    width: 80px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .setting__wrapper__right__input__group {
    border: 2px solid;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 10px;
    width: 50px;
    height: 20px;
    background: $gold;
  }
  .setting__wrapper__right__item__switch {
    appearance: none;
    border-radius: 10px;
    width: 22px;
    height: 16px;
    background: #bc2b36;
    position: relative;
    right: -20px;
    transition: .4s ease-in-out;
    cursor: pointer;
    & ~ .switch__label::before {
      content: 'off';
      color: #bc2b36;
      font-size: 0.9rem;
      position: relative;
      right: 25px;
      bottom: 2px;
      transition: .4s ease-in-out;
      cursor: pointer;
    }
    &:checked {
      right: 0px;
      transition: .4s ease-in-out;
    }
    &:checked ~ .switch__label::before {
      content: 'on';
      color: #bc2b36;
      font-size: 0.9rem;
      position: relative;
      right: 0px;
      bottom: 2px;
      cursor: pointer;
    }
  }
}
@media screen and (min-width: 700px) {
  .setting__wrapper__left {
    .setting__wrapper__left__circle {
      display: block;
      width: 200px;
      height: 350px;
      background: #C12C37;
      border-radius: 0px 200px 200px 0px;
      position: absolute;
      top: 0;
    }
  }
}
@media screen and (min-width: 850px) {
  .setting__wrapper {
    .setting__wrapper__right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .setting__wrapper__right__container {
      position: absolute;
      top: 10%;
      width: 340px;
      margin-right: 10px;
    }
  }
}
@media screen and (min-width: 1016px) {
  .setting__wrapper {
    .setting__wrapper__right__container {
      width: 380px;
    }
  }
}
@media screen and (min-width: 1230px) {
  .setting__wrapper {
    .setting__wrapper__right  {
      width: auto;
    }
    .setting__wrapper__right__container {
      max-width: 420px;
      margin: 0 0 0 auto;
    }
  }
}
</style>
