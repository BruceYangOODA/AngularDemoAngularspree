import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment'; 
@Component({
  selector: 'app-footer-contact-info',
  templateUrl: './footer-contact-info.component.html',
  styleUrls: ['./footer-contact-info.component.scss']
})
export class FooterContactInfoComponent implements OnInit {

  contact_info = environment.config.contact_info
  constructor() { }

  ngOnInit(): void {
  }

  scollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}
