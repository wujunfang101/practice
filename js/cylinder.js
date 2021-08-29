axios.get('https://edu.telking.com/api/?type=week').then(res => {
      const { xAxis, series } = res.data.data
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('cylinder'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:[]
            },
            xAxis: {
                data: xAxis
            },
            yAxis: {},
            series: [{
                name: '',
                type: 'bar',
                data: series
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    })