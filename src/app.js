import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';

import Chart from 'chart.js/auto';


GridStack.init({
  disableResize: true,
  float: false,
  cellHeight: '150px',
});

const ctx = document.getElementById('barChartTest');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Okanagan', 'Lower Mainland', 'Vancouver Is.', 'Fraser Valley', 'Squamish/Whistler'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['#7ACCF5', '#0E83BD', '#0B6998', '#0A5C85','#B3E2F9'],
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
          legend: {
            display: false
          }
        }
    }
});


const ctx2 = document.getElementById('doughnutChartTest');
const doughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Licensee', 'LRS', 'Grocery', 'Agency', 'Winery Store'],
        datasets: [{
            data: [20, 15, 40, 5, 10],
            backgroundColor: ['#7ACCF5', '#2EAFEF', '#0E83BD', '#0B6998', '#0A5C85','#B3E2F9'],
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      cutout: '50%',
      scales: {
        x: {
            beginAtZero: true,
            display: false
        },
        y: {
            beginAtZero: true,
            display: false
        }
      },
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
});

const ctx3 = document.getElementById('lineChartTest');
const lineChart = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: 'Supplier 1',
        data: [20, 28, 23, 32, 37, 25, 40],
        fill: false,
        backgroundColor: 'rgba(13, 132, 191, 0.5)',
        borderColor: 'rgba(13, 132, 191, 1)',
        tension: 0.1,
        cubicInterpolationMode: 'monotone',
        fill:true
      },
      {
        label: 'Supplier 2',
        data: [15, 18, 16, 22, 27, 35, 33],
        fill: false,
        backgroundColor: 'rgb(254, 166, 17, 0.5)',
        borderColor: 'rgba(254, 166, 17, 1)',
        tension: 0.1,
        cubicInterpolationMode: 'monotone',
        fill:true
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
            display: true,
          },
          y: {
            grid: {
              drawOnChartArea: false,
            },
            beginAtZero: true
          }
        }
    }
});

const ctx4 = document.getElementById('ringChartTest');
const ringChart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
      labels: ['Actual'],
        datasets: [{
            data: [80, 20],
            backgroundColor: ['#0B6998', '#eee'],
            borderColor: ['#0B6998', '#eee'],
            borderRadius: 50,
            borderWidth: 1,
            spacing: 5
        }]
    },
    options: {
      aspectRatio: 2,
      responsive: false,
      cutout: '90%',
      scales: {
        x: {
            beginAtZero: true,
            display: false
        },
        y: {
            beginAtZero: true,
            display: false
        }
      },
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
});




