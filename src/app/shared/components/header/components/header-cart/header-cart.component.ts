import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {

  @Input() totalCartItems!: number
  @Input() isMobile!: boolean
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

  getCurrentOrder() {}

}
