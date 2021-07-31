<template>
  <div class="chart__container">
    <div class="chart__wrapper">
      <div class="chart__wrapper__left">
        <Clock />
        <div class="chart__wrapper__left__circle" />
      </div>
      <div class="chart__wrapper__right">
        <div class="chart__wrapper__right__text__group">
          <div class="chart__wrapper__right__text__item">
            <div class="chart__wrapper__right__title">
              Today
            </div>
            <div class="chart__wrapper__right__number">
              7
            </div>
          </div>
          <div class="chart__wrapper__right__text__item">
            <div class="chart__wrapper__right__title">
              Weekly
            </div>
            <div class="chart__wrapper__right__number">
              60
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
        <Background />
        <div class="chart__wrapper__right__container">
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
  margin-top: 20px;
  display: flex;
  .chart__wrapper__left {
    width: 100%;
    padding-top: 50px;
  }
  .chart__wrapper__right {
    position: relative;
    &__container {
      position: relative;
      display: flex;
      justify-content: flex-end;
      top: -5%;
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
      &__container {
        top: -60%;
      }
    }
    .chart__wrapper__right__text__group {
      top: 3%;
      .chart__wrapper__right__text__item {
        font-size: 1.5rem;
      }
    }
  }
}

@media screen and (min-width: 1015px) {
  .chart__wrapper {
    .chart__wrapper__right {
      &__container {
        right: 5%;
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
export default {
  components: {
    Clock,
    Background,
    Chart
  },
  data () {
    return {
      arrPositive: [],
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
          // labels: {
          //   fontColor: '#F2F0C9'
          // }
        }
        // title: {
        //   display: true,
        //   fontSize: '14',
        //   text: 'Hello'
        // }
      },
      positiveChartColors: {
        borderColor: '#F2F0C9',
        pointBorderColor: '#FBFAEF',
        pointBackgroundColor: '#F2F0C9',
        backgroundColor: '#f2f0c940'
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      try {
        const { data } = await axios.get('https://api.covid19api.com/total/country/taiwan/status/confirmed?from=2021-07-20T00:00:00Z&to=2021-07-28T00:00:00Z')
        data.forEach(data => {
          const date = moment(data.Date, 'YYYYMMDD').format('MMDD')
          const total = data.Cases
          this.arrPositive.push({ date, total })
        })
        console.log(this.arrPositive)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
