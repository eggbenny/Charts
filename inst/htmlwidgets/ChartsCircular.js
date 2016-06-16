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
            text: x.message.simp + "/ 100",
            subtext: '',
            sublink: '',
            x: 'center',
            y: 'center',
            itemGap: 20,
            textStyle: {
              color: 'rgba(0,0,0,0.8)',
              fontFamily: '"Helvetica Neue", Roboto, Arial, "Droid Sans", sans-serif',
              fontSize: 20,
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
            y: 10,
            itemGap: 12,
            data: ['This Story', 'vs. All Stories', 'vs. Category'], // Call legend with name
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
            name: 'This Story',
            type: 'pie',
            clockWise: false,
            radius: [90, 115],
            itemStyle: dataStyle,
            data: [{
              value: x.message.simp,
              name: 'This Story'
            }, {
              value: 100 - x.message.simp,
              name: '',
              itemStyle: placeHolderStyle
            }]
          }, {
            name: 'vs. All Stories',
            type: 'pie',
            clockWise: false,
            radius: [65, 90],
            itemStyle: dataStyle,
            data: [{
              value: x.message.asavg,
              name: 'vs. All Stories'
            }, {
              value: 100 - x.message.asavg,
              name: '',
              itemStyle: placeHolderStyle
            }]
          }, {
            name: 'vs. Category',
            type: 'pie',
            clockWise: false,
            radius: [40, 65],
            itemStyle: dataStyle,
            data: [{
              value: x.message.catavg,
              name: 'vs. Category'
            }, {
              value: 100 - x.message.catavg,
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
