HTMLWidgets.widget({

  name: 'ChartsCircular',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;
        
        
        var mini_pie_chart = echarts.init(el, theme);
        
        mini_pie_chart.setOption({
          title: {
            text: x.message.simp,
            subtext: '',
            sublink: '',
            x: 'center',
            y: 'center',
            itemGap: 20,
            textStyle: {
              color: 'rgba(0,0,0,0.8)',
              fontFamily: '"Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif',
              fontSize: 35,
              fontWeight: 'bolder'
            }
          },
          tooltip: {
            show: true,
            formatter: "{b} {c}" //format tooltips
          },
          legend: {
            orient: 'vertical',
            x: document.getElementById('graph_mini_pie').offsetWidth / 2, // Dynamically set x
            y: 45,
            itemGap: 12,
            data: ['Story Impact', 'All Story', 'Category'], // Call legend with name
          },
          toolbox: {
            show: true,
            feature: {
              mark: {
                show: true
              }
            }
          },
          series: [{
            name: 'Story Impact',
            type: 'pie',
            clockWise: false,
            radius: [125, 150],
            itemStyle: dataStyle,
            data: [{
              value: x.message.simp,
              name: 'Story Impact'
            }, {
              value: 200 - x.message.simp,
              name: '',
              itemStyle: placeHolderStyle
            }]
          }, {
            name: 'All Story',
            type: 'pie',
            clockWise: false,
            radius: [100, 125],
            itemStyle: dataStyle,
            data: [{
              value: x.message.asavg,
              name: 'All Story'
            }, {
              value: 200 - x.message.asavg,
              name: '',
              itemStyle: placeHolderStyle
            }]
          }, {
            name: 'Category',
            type: 'pie',
            clockWise: false,
            radius: [75, 100],
            itemStyle: dataStyle,
            data: [{
              value: x.message.catavg,
              name: 'Category'
            }, {
              value: 200 - x.message.catavg,
              name: '',
              itemStyle: placeHolderStyle
            }]
          }]
        });// end chart options
        

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});