<template>
  <div class="middle__wrapper">
    <div class="middle__wrapper__content">
      <svg
        id="first-segment"
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        preserveAspectRatio="xMinYMin meet"
        fill="none"
      >
        <path
          stroke="#D07069"
          stroke-width="15"
          stroke-linecap="round"
          d="M165.16,163.38A172,172,0,0,0,0,0"
        />
        <path
          id="top-right"
          stroke="#F2F0C9"
          stroke-width="15"
          stroke-linecap="round"
          d="M165.16,163.38A172,172,0,0,0,0,0"
        />
      </svg>
      <svg
        id="second-segment"
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        fill="none"
      >
        <path
          stroke="#D07069"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,163.34A172,172,0,0,0,164.44,0"
        />
        <path
          id="bottom-right"
          stroke="#F2F0C9"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,163.34A172,172,0,0,0,164.44,0"
        />
      </svg>
      <svg
        id="third-segment"
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        fill="none"
      >
        <path
          stroke="#D07069"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,0A172,172,0,0,0,165.16,162.61"
        />
        <path
          id="bottom-left"
          stroke="#F2F0C9"
          stroke-width="15"
          stroke-linecap="round"
          d="M0,0A172,172,0,0,0,165.16,162.61"
        />
      </svg>
      <svg
        id="fourth-segment"
        width="163"
        height="165"
        viewBox="-8 -8 184 188"
        fill="none"
      >
        <path
          stroke="#D07069"
          stroke-width="15"
          stroke-linecap="round"
          d="M160.17,0A172,172,0,0,0,0,161.51"
        />
        <path
          id="top-left"
          stroke="#F2F0C9"
          stroke-width="15"
          stroke-linecap="round"
          d="M160.17,0A172,172,0,0,0,0,161.51"
        />
      </svg>
      <!-- <div class="middle__wrapper__title">
        Clean up the desk
      </div>
      <div class="middle__wrapper__time">
        {{ timeDisplay }}
      </div>
      <div class="middle__wrapper__icons__wrapper">
        <div class="middle__wrapper__icon__container">
          <div class="middle__wrapper__icon icon__ring" />
        </div>
        <div class="middle__wrapper__icon__container">
          <div
            class="middle__wrapper__icon icon__play"
            @click="handleButtonClick"
          />
        </div>
        <div class="middle__wrapper__icon__container">
          <div class="middle__wrapper__icon icon__next" />
        </div>
      </div> -->
    </div>
    <div class="middle__wrapper__content middle__wrapper__inner">
      <div
        v-if="resting"
        class="middle__wrapper__title"
      >
        Resting
      </div>
      <div
        v-else
        class="middle__wrapper__title"
      >
        Clean up the desk
      </div>
      <div class="middle__wrapper__time">
        {{ timeDisplay }}
      </div>
      <div class="middle__wrapper__icons__wrapper">
        <div
          v-if="turnOn"
          class="middle__wrapper__icon__container"
        >
          <div
            class="middle__wrapper__icon icon__ring"
            @click="handleRingStop"
          />
        </div>
        <div
          v-else
          class="middle__wrapper__icon__container"
        >
          <div
            class="middle__wrapper__icon icon__ring__off"
            @click="handleRingStart"
          />
        </div>
        <div
          v-if="startTimer"
          class="middle__wrapper__icon__container"
        >
          <div
            class="middle__wrapper__icon icon__play"
            @click="handleButtonClick"
          />
        </div>
        <div
          v-else
          class="middle__wrapper__icon__container"
        >
          <div
            class="middle__wrapper__icon icon__pause"
            @click="handleTimerStop"
          />
        </div>
        <div class="middle__wrapper__icon__container">
          <div class="middle__wrapper__icon icon__next" />
        </div>
      </div>
      <div class="middle__wrapper__footer__text">
        Next: Feed the cat
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'progressbar.js'
import beep from './../assets/ring/beep.mp3'
export default {
  data () {
    // 25 mins to convert to seconds
    const pomodoroDuration = 25 * 60
    return {
      pomodoroDuration: pomodoroDuration,
      currentTimeInSeconds: pomodoroDuration,
      resetDuration: 5 * 60,
      topRight: null,
      bottomRight: null,
      topLeft: null,
      bottomLeft: null,
      startTimer: true,
      currentSegment: 1,
      turnOn: true,
      pathOptions: {
        easing: 'linear',
        duration: (pomodoroDuration + 1) * 1000 // add a second to convert to millis
      },
      interval: null,
      beepAudio: new Audio(beep),
      resting: false
    }
  },
  computed: {
    timeDisplay () {
      const minutes = parseInt(this.currentTimeInSeconds / 60)
      const seconds = this.currentTimeInSeconds % 60
      const paddedMinutes = ('0' + minutes).slice(-2)
      const paddedSeconds = ('0' + seconds).slice(-2)
      // console.log('minutes:', minutes)
      // console.log('seconds:', seconds)
      // console.log('paddedMinutes:', paddedMinutes)
      // console.log('paddedSeconds:', paddedSeconds)
      return `${paddedMinutes}:${paddedSeconds}`
    }
  },
  mounted () {
    this.topRight = new ProgressBar.Path('#top-right', this.pathOptions)
    this.topRight.set(1)

    this.bottomRight = new ProgressBar.Path('#bottom-right', this.pathOptions)
    this.bottomRight.set(1)

    this.topLeft = new ProgressBar.Path('#top-left', this.pathOptions)
    this.topLeft.set(1)

    this.bottomLeft = new ProgressBar.Path('#bottom-left', this.pathOptions)
    this.bottomLeft.set(1)
  },
  methods: {
    handleButtonClick () {
      // this.interval = setInterval(() => {
      //   this.currentTimeInSeconds -= 1
      // }, 1000)
      this.animateBar()
      this.startTimer = false
    },
    handleTimerStop () {
      this.startTimer = true
      clearInterval(this.interval)
      switch (this.currentSegment) {
        case 1:
          this.topRight.stop()
          break
        case 2:
          this.bottomRight.stop()
          break
        case 3:
          this.bottomLeft.stop()
          break
        case 4:
          this.topLeft.stop()
          break
      }
    },
    handleRingStart () {
      this.turnOn = true
      // this.beepAudio.play()
    },
    handleRingStop () {
      this.turnOn = false
      this.beepAudio.pause()
    },
    animateBar () {
      this.reduceTime()
      // const segment = null
      switch (this.currentSegment) {
        case 1:
          // segment = this.topRight
          this.topRight.animate(0, { duration: (this.currentTimeInSeconds + 0.5) * 1000 }, this.onFinish)
          break
        case 2:
          // segment = this.bottomRight
          this.bottomRight.animate(0, { duration: (this.currentTimeInSeconds + 0.5) * 1000 }, this.onFinish)
          break
        case 3:
          // segment = this.bottomLeft
          this.bottomLeft.animate(0, { duration: (this.currentTimeInSeconds + 0.5) * 1000 }, this.onFinish)
          break
        case 4:
          // segment = this.topLeft
          this.topLeft.animate(0, { duration: (this.currentTimeInSeconds + 0.5) * 1000 }, this.onFinish)
          break
      }
      // segment.animate(0,
      //   {
      //     duration: (this.currentTimeInSeconds + 1) * 1000
      //   },
      //   this.onFinish
      // )
    },
    onFinish () {
      if (this.currentTimeInSeconds <= 0) {
        // clearInterval(this.interval)

        if (this.currentSegment < 4) {
          this.currentSegment += 1
        } else {
          this.topRight.set(1)
          this.bottomRight.set(1)
          this.bottomLeft.set(1)
          this.topLeft.set(1)
          this.currentSegment = 1
        }
        // 清除interval
        clearInterval(this.interval)

        // play ring
        this.beepAudio.play()

        // resting狀態
        this.resting = true

        setTimeout(() => {
          // 改成顯示resting時間
          this.currentTimeInSeconds = this.resetDuration
          this.startTimer = true
          // start rest after ring end
          this.startRest()
        }, 4200)
      }
    },
    startRest () {
      // 設定新的interval
      this.reduceTime()
      setTimeout(() => {
        clearInterval(this.interval)
        this.beepAudio.play()
        this.currentTimeInSeconds = this.pomodoroDuration
        this.resting = false
      }, this.resetDuration * 1000)
    },
    reduceTime () {
      this.interval = setInterval(() => {
        if (this.currentTimeInSeconds > 0) {
          this.currentTimeInSeconds -= 1
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
  .middle__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .middle__wrapper__content {
      width: 330px;
      height: 330px;
      // border-radius: 50%;
      // border: 2px solid $gold;
      margin: 10px auto 0 auto;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
      #first-segment {
        position: absolute;
        right: 0;
        top: 0;
      }
      #second-segment {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      #third-segment {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      #fourth-segment {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .middle__wrapper__inner {
      position: relative;
      top: -47%;
    }
    .middle__wrapper__title {
      color: #F2F0C9;
      font-size: 1.2rem;
      padding-top: 15px;
    }
    .middle__wrapper__time {
      color: #F2F0C9;
      font-size: 3.5rem;
    }
    .middle__wrapper__icons__wrapper {
      width: 60%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
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
      .icon__ring__off {
        mask-image: url('./../assets/image/icon_ring_off.svg');
        -webkit-mask-image: url('./../assets/image/icon_ring_off.svg');
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
      .icon__pause {
        mask-image: url('./../assets/image/icon_pause.svg');
        -webkit-mask-image: url('./../assets/image/icon_pause.svg');
        @extend %icon-style;
      }
    }
    .middle__wrapper__footer__text {
      text-align: center;
      // margin-top: 20px;
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
@media screen and (min-width: 850px) {
  .middle__wrapper {
    .middle__wrapper__inner {
      top: -42%;
    }
  }
}

@media screen and (min-width: 1015px) {
  .middle__wrapper {
    .middle__wrapper__inner {
      top: -46%;
    }
    .middle__wrapper__content {
      width: 400px;
      height: 400px;
    }
  }
  #first-segment, #second-segment, #third-segment, #fourth-segment {
    width: 197px;
    height: 199px;
  }
}
@media screen and (min-width: 1300px) {
  .middle__wrapper {
    .middle__wrapper__content {
      width: 500px;
      height: 500px;
    }
  }
  #first-segment, #second-segment, #third-segment, #fourth-segment {
    width: 246px;
    height: 248px;
  }
}
</style>
