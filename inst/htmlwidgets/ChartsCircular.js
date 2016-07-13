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
              fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif',
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
            data: [x.message.simp_title, x.message.asavg_title, x.message.catavg_title], // Call legend with name
            textStyle: {
              fontFamily: 'Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif'
            }
          },
          toolbox: {

    			  show: true,
    			  feature: {
    				saveAsImage: {
    				  show: false,
    				  title: "Save Image"
    				}
    			  }
    			},
          series: [{
            name: x.message.simp_title,
            type: 'pie',
            clockWise: false,
            radius: [90, 115],
            itemStyle: dataStyle,
            data: [{
              value: x.message.simp,
              name: x.message.simp_title
            }, {
              value: 100 - x.message.simp,
              name: '',
              itemStyle: placeHolderStyle
            }]
          }, {
            name: x.message.asavg_title,
            type: 'pie',
            clockWise: false,
            radius: [65, 90],
            itemStyle: dataStyle,
            data: [{
              value: x.message.asavg,
              name: x.message.asavg_title
            }, {
              value: 100 - x.message.asavg,
              name: '',
              itemStyle: placeHolderStyle
            }]
          }, {
            name: x.message.catavg_title,
            type: 'pie',
            clockWise: false,
            radius: [40, 65],
            itemStyle: dataStyle,
            data: [{
              value: x.message.catavg,
              name: x.message.catavg_title
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
