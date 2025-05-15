import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, HomeComponent, AdminComponent],
  templateUrl: './header.component.html',
  // providers: [SubscribeService]
})
export class HeaderComponent {
  constructor(
    private subService: SubscribeService
  ){}
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  onSubscribe() {
    this.subService.onSubscribe('thank you for subscribing. You can access the services now')
  }
}
