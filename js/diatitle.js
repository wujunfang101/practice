axios.get('https://edu.telking.com/api/?type=month').then(res => {
    const { xAxis, series } = res.data.data
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('diagram'));

      // 指定图表的配置项和数据
      var option = {
          title: {
              type: 'category',
          },
          tooltip: {},
          legend: {
              data:[]
          },
          xAxis: {
              data: xAxis
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              name: '销售量',
              type: 'line',
              data: series,
              smooth: true
          }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
  })