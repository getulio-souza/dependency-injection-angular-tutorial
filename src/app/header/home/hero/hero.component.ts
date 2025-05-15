import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  // providers: [SubscribeService]
})
export class HeroComponent {
  constructor(
    private subService: SubscribeService
  ){}
  onSubscribe() {
    this.subService.onSubscribe('monthly')
  }
}
