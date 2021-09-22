import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isScrolled = false
  isMobile = false
  isModalShown =  true 
  isSearchopen = true
  headerConfig = environment.config.header
  currency = environment.config.currency_symbol
  freeShippingAmount = environment.config.freeShippingAmount
  taxonomies$!: Observable<any>
  screenwidth: number = 0
  totalCartItems:number = 0
  isAuthenticated$ = of(false)

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: any) { 
      this.translateService.use('cn')
    }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth
    }
  }

  showModal() {
    console.log('showModal click')
  }
  childCatLoaded(event: any) {}
  onHidden() {}

}
