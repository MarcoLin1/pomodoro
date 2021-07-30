<script>
import { Line } from 'vue-chartjs'
import Chart from 'chart.js'
export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
    chartColors: {
      type: Object
    }
  },
  mounted () {
    const dates = this.chartData.map(d => d.date)
    const totals = this.chartData.map(data => data.total)
    const { borderColor, pointBorderColor, pointBackgroundColor, backgroundColor } = this.chartColors
    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: totals,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor,
            fontColor: 'white'
          }
        ]
      },
      this.options
    )
    Chart.defaults.global.defaultFontColor = '#F2F0C9'
    const lineChart = document.querySelector('#line-chart')
    lineChart.style.height = '370px'
    lineChart.style.width = '370px'
  }
}
</script>
