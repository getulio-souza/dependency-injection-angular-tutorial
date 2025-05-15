import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  // providers: [SubscribeService]
})
export class SidebarComponent {
  constructor(
    private subService: SubscribeService
  ){}
  onSubscribe() {
    this.subService.onSubscribe('quarterly');
  }
}
