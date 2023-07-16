import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { Router } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

  imports: [MatSidenavModule, MatToolbarModule,MatIconModule, NgIf, MatButtonModule],
  standalone: true,
})
export class SidebarComponent {
  showFiller = false;
  constructor(private router: Router) {
  }
  open_route(route: string){
    this.router.navigate(['/'+route]);
  }

  ngOnInit()
  {
    window.addEventListener('scroll', function() {
      navbarScroll();
     });
     function navbarScroll() {
       var y = window.scrollY;
       if (y > 10) {
         var header = document.getElementsByClassName('header')[0];
           header.classList.add("small");
     
       } else if (y < 10) {
           var header = document.getElementsByClassName('header')[0];
          header.classList.remove('small');
       }
     }
  }
}
