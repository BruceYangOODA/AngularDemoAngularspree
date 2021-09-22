import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<any> = of(['1','2','3','1','2','3','1','2','3','1','2','3']);
  freeShippingAmount = environment.config.freeShippingAmount;
  currency = environment.config.currency_symbol;  
  constructor() { }
  
  ngOnInit(): void {
  }

}
