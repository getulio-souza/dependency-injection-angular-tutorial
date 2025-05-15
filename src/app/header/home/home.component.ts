import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SidebarComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
