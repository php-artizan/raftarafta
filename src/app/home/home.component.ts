import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})

export class HomeComponent {
  constructor(private router: Router) {
  }
  open_route(route: string){
    this.router.navigate(['/'+route]);
  }
}
