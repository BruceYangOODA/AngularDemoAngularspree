import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header-help-dropdown',
  templateUrl: './header-help-dropdown.component.html',
  styleUrls: ['./header-help-dropdown.component.scss']
})
export class HeaderHelpDropdownComponent implements OnInit {

  isOpen: boolean = false;
  contactno = environment.config.contact_info.contact_no;
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

  onOpenChange(data: boolean): void {
    this.isOpen = !this.isOpen;
  }

}
