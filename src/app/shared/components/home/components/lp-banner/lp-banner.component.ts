import { Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-lp-banner',
  templateUrl: './lp-banner.component.html',
  styleUrls: ['./lp-banner.component.scss']
})
export class LpBannerComponent implements OnInit {

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    velocity: 0,
    loop: true,
    interval: { timing: 5000 },
    animation: 'lazy',
    custom: 'banner'
  };
  bannerItems = environment.config.landing_page_banner;

  constructor() { }

  ngOnInit(): void {
    console.log('bannerItems',this.bannerItems)
  }
  

}
