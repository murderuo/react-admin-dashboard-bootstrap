import { useState } from 'react';
import Chart from 'react-apexcharts';

function ExampleCharts() {
  const [values, setValues] = useState({
  
    options: {
      
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
  });
  return (
    <>
      <Chart
        options={values.options}
        series={values.series}
        type="area"
        width="100%"
        height={235}
      />
    </>
  );
}

export default ExampleCharts;
