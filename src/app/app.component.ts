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

  anotherTableCols = ['city', 'state', 'country', 'population'];
  anotherTableData = [
    {
      city: 'Hyderabad',
      state: 'Telangana',
      country: 'India',
      population: '10M'
    },
    {
      city: 'Salt Lake City',
      state: 'Utah',
      country: 'USA',
      population: '300k'
    },
    {
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      population: '10M'
    },
    {
      city: 'New York City',
      state: 'New York',
      country: 'USA',
      population: '5M'
    },
    {
      city: 'Nellore',
      state: 'Andhra Pradesh',
      country: 'India',
      population: '3M'
    },
    {
      city: 'San Fransico',
      state: 'California',
      country: 'USA',
      population: '1M'
    },
  ];
}
