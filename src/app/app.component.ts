import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstPage';
/*-----------------Dough Nut--------------------------------*/
  public chartType: string = 'doughnut';


  public chartDatasets: Array<any> = [
    { data: [0,0], label: '' }
  ];
  public chartDatasets1: Array<any> = [
    { data: [19,81], label: 'My First dataset' }
  ];
  public chartDatasets2: Array<any> = [
    { data: [25,75], label: 'My Second dataset' }
  ];
  public chartDatasets3: Array<any> = [
    { data: [50,50], label: 'My Third dataset' }
  ];

  public chartLabels: Array<any> = ['(+ve) Sentiments', '(-ve) Sentiments'];
  public chartLabels1: Array<any> = [];


  public chartColors: Array<any> = [
    {
      backgroundColor: ['#f3c7e5','#798d91'],
      hoverBackgroundColor: ['#f3c7e5','#798d91'],
      borderWidth: 1,
      
    }
  ];
/*-----------------Dough Nut Ends--------------------------------*/

/*-----------------Horizontal chart--------------------------------*/
public chartType5: string = 'horizontalBar';

  public chartDatasets5: Array<any> = [
    { data: [5739, 4498, 6356, 2835, 4830, 5143, 4033,4534,5264,2749], label: 'No of mentions as per Print media/Blogs/Articles' }
  ];

  public chartLabels5: Array<any> = ['#IT', '#MYGOV', '#DigitalIndia', '#MEITY', '#MYGOV', '#RSP','#Adhaar','#ITMinistry','#ITGrowth','#ITInIndia'];

  public chartColors5: Array<any> = [
    {
      backgroundColor: [
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91'
      ],
      borderColor: [
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91',
        '#798d91'
      ],
      borderWidth: 2,
    }
  ];
/*-----------------Horizontal chart Ends--------------------------------*/


  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
