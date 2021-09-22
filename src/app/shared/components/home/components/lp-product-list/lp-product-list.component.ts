import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lp-product-list',
  templateUrl: './lp-product-list.component.html',
  styleUrls: ['./lp-product-list.component.scss']
})
export class LpProductListComponent implements OnInit {

  @Input() products: any
  constructor() { }

  ngOnInit(): void {
  }

}
