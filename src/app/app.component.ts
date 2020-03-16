import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-mat-table';
  tableCols = ['name', 'role', 'skillset'];
  tableData = [
    {
      name: 'Harsha Chinni',
      role: 'Fullstack Developer',
      skillset: 'Angular 9, Python 3, Flask, DSA'
    },
    {
      name: 'Bob',
      role: 'HR',
      skillset: 'Finding awesome candidates like Harsha :p'
    },
    {
      name: 'COVID-19',
      role: 'Making people panick',
      skillset: 'Infect people'
    },
  ];
}
