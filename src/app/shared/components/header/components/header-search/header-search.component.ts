import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  @Input() isSearchopen!: boolean
  @Input() isMobile!: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
