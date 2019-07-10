import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselStore } from '@ngu/carousel';

@Component({
  selector: 'app-sale-design',
  templateUrl: './sale-design.component.html',
  styleUrls: ['./sale-design.component.scss']
})
export class SaleDesignComponent implements OnInit {
  carouselBanner;
  ngOnInit() {
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: {
        timing: 3000,
        initialDelay: 1000
      },
      point: {
        visible: true
      },
      load: 2,
      loop: true,
      touch: true
    };
  }
 
  /* It will be triggered on every slide*/
  onmoveFn(data: NguCarouselStore) {
    // console.log(data);
  }

}
