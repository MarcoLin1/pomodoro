<template>
  <div class="chart__container">
    <div class="chart__wrapper">
      <div class="chart__wrapper__left">
        <Clock :initial-todo-list="todoList" />
        <div class="chart__wrapper__left__circle" />
      </div>
      <div class="chart__wrapper__right">
        <Background />
        <div class="chart__wrapper__right__container">
          <div class="chart__wrapper__right__text__group">
            <div class="chart__wrapper__right__text__item">
              <div class="chart__wrapper__right__title">
                Today
              </div>
              <div class="chart__wrapper__right__number">
                {{ todayNum }}
              </div>
            </div>
            <div class="chart__wrapper__right__text__item">
              <div class="chart__wrapper__right__title">
                Weekly
              </div>
              <div class="chart__wrapper__right__number">
                {{ weeklyNum }}
              </div>
            </div>
            <div class="chart__wrapper__right__text__item">
              <div class="chart__wrapper__right__title">
                Totally
              </div>
              <div class="chart__wrapper__right__number">
                102
              </div>
            </div>
          </div>
          <div
            v-if="arrPositive.length > 0"
            class="chart__wrapper__right__table"
          >
            <Chart
              :chart-data="arrPositive"
              :options="chartOptions"
              :chart-colors="positiveChartColors"
              label="Positive"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.chart__wrapper {
  position: relative;
  display: flex;
  .chart__wrapper__left {
    width: 100%;
  }
  .chart__wrapper__right {
    position: relative;
    width: 100%;
    height: 100%;
    margin: -10px 0 0 0;
    max-width: 800px;
    &__container {
      position: absolute;
      top: 20px;
      width: 300px;
      right: 0;
    }
    .chart__wrapper__right__table {
      position: relative;
      right: 10px;
    }
  }
  .chart__wrapper__right__text__group {
    display: flex;
    width: 85%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 0%;
    z-index: 1;
    .chart__wrapper__right__text__item {
      color: $gold;
      font-size: 1.2rem;
      text-align: center;
    }
  }
}

@media screen and (min-width: 700px) {
  .chart__wrapper__left {
    .chart__wrapper__left__circle {
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
  .chart__wrapper {
    .chart__wrapper__right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      &__container {
        position: absolute;
        top: 5%;
        right: 0;
        width: 340px;
      }
    }
    .chart__wrapper__right__text__group {
      right: 15px;
      margin-bottom: 10px;
      .chart__wrapper__right__text__item {
        font-size: 1.5rem;
      }
    }
  }
}
@media screen and (min-width: 1016px) {
  .chart__wrapper {
    .chart__wrapper__right {
      &__container {
        width: 380px;
      }
    }
  }
}
@media screen and (min-width: 1230px) {
  .chart__wrapper {
    .chart__wrapper__right {
      &__container {
        width: 400px;
      }
    }
  }
}
</style>

<script>
import Clock from '../components/Clock.vue'
import Background from '../components/Background.vue'
import Chart from './../components/Chart.vue'
import axios from 'axios'
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  components: {
    Clock,
    Background,
    Chart
  },
  data () {
    return {
      arrPositive: [],
      todayNum: 0,
      weeklyNum: 0,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      },
      positiveChartColors: {
        borderColor: '#F2F0C9',
        pointBorderColor: '#FBFAEF',
        pointBackgroundColor: '#F2F0C9',
        backgroundColor: '#f2f0c940'
      }
    }
  },
  computed: {
    ...mapState(['todoList'])
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        let { data } = await axios.get('https://api.covid19api.com/dayone/country/taiwan/status/confirmed')
        data = data.slice(1, 8)
        data.forEach(data => {
          const date = moment(data.Date, 'YYYYMMDD').format('MMDD')
          const total = data.Cases
          this.weeklyNum += data.Cases
          this.arrPositive.push({ date, total })
        })
        this.todayNum = this.arrPositive[this.arrPositive.length - 1].total
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
