import { Component} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomePageComponent {
  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
 
}
