import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  asyncSelected!: string;
  typeaheadLoading!: boolean;
  typeaheadNoResults!: boolean;
  dataSource!: Observable<any>;
  statesComplex: any[] = [];
  searchPlaceholder = environment.config.header.searchPlaceholder;

  constructor(private translateService: TranslateService) { 
    
  }

  ngOnInit(): void {
  }

  changeTypeaheadLoading(event: any) {}

  typeaheadOnSelect(event: any) {}

  doSearch(box: string) {
    console.log('click',box)
  }

}
