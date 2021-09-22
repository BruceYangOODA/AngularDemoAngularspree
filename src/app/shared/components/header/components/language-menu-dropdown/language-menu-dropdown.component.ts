import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-language-menu-dropdown',
  templateUrl: './language-menu-dropdown.component.html',
  styleUrls: ['./language-menu-dropdown.component.scss']
})
export class LanguageMenuDropdownComponent implements OnInit {

  @Input() isMobile!: boolean
  isScrolled: boolean =  false
  isOpen: boolean =  false
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

  onOpenChange(event: any) {}
  EN() {
    this.translateService.use('en')
  }
  CN() {
    this.translateService.use('cn')
  }

}
