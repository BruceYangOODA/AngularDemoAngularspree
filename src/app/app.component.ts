import { Component , Inject, PLATFORM_ID} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter  } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-spree';
  currentUrl!: string;
  schema = {};
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.currentUrl = e.url
      console.log('this.currentUrl',this.currentUrl)
    })
    console.log('platformId',platformId)
/*
    this.schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: environment.appName,
      url: isPlatformBrowser(this.platformId) ? location.origin : ''
    };*/
  }


}
