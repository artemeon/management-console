import { Component, Vue, Prop } from 'vue-property-decorator'
import Chart from 'chart.js'

@Component
class ChartJs extends Vue {
  @Prop() chartData: any
  @Prop() id!: string
  @Prop() height!: number
  private chart: any
  mounted () {
    var ctx = document.getElementById(this.id)
    // ctx.height = this.height
    this.chart = this.chartData

    if (this.chart.data.datasets) {
      this.chart.data.datasets.forEach(element => {
        if (element.type === 'line') {
          element.fill = false
        }
      })
    }

    if (ctx) {
      var myChart = new Chart(ctx, this.chart)
    }
  }
}
export default ChartJs
