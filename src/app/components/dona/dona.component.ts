import { Component, Input} from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { baseColors } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title = 'Sin titulo'
 

  @Input('dataGraf') doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'Label-1', 'Label-2', 'Label-3' ],
    datasets: [{
        data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
      },
    ],

  };

}
