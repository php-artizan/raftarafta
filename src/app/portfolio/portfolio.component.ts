import {Component} from '@angular/core';


import {  MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],

  imports: [MatChipsModule], 
  standalone: true
  
})
export class PortfolioComponent {

}
