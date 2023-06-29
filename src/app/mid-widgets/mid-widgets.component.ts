import { Component } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-mid-widgets',
  templateUrl: './mid-widgets.component.html',
  styleUrls: ['./mid-widgets.component.css']
})
export class MidWidgetsComponent {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 325,
      plotShadow:true
    },
    title: {
      text: 'Staff Volume Per Month',
      style: {
      color: '#67748E',
      fontWeight:'500'
      }
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Number Of Employees'
      }
    },
    series: [
      {
        name: "Sales and Marketing",
        type: "spline",
        color: '#82D616',
        data: [70, 69, 95, 145, 182, 200, 222, 235, 233, 243, 239, 256],
      },
      {
        name: "interns",
        type: "spline",
        color: 'orange',
        data: [3, 6, 7, 11, 9, 13, 22, 26, 23, 24, 29, 40]
      },
      {
        name: 'Administrative Staff',
        type: 'spline',
        color: '#0965C2',
        data: [
          47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159
        ]
      },
      {
        name: 'Executives',
        type: 'spline',
        color: '#E10991',
        data: [
          17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })

}
