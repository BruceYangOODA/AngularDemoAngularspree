import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contact_info = environment.config.contact_info;

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
