import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer-quick-links',
  templateUrl: './footer-quick-links.component.html',
  styleUrls: ['./footer-quick-links.component.scss']
})
export class FooterQuickLinksComponent implements OnInit {

  footer_pages = environment.config.footer_page_links
  constructor() { }

  ngOnInit(): void {
  }

}
