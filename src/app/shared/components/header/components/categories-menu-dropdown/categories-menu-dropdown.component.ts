import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-menu-dropdown',
  templateUrl: './categories-menu-dropdown.component.html',
  styleUrls: ['./categories-menu-dropdown.component.scss']
})
export class CategoriesMenuDropdownComponent implements OnInit {

  @Input() taxonomies!: Observable<any>
  @Input() isScrolled!: boolean
  @Input() screenwidth!: number
  isOpen: boolean = true
  selectedItem = 0

  constructor() { }

  ngOnInit(): void {
  }

  onOpenChange(event: any) {}
  showCategoryonclick(index: number) {}
  showCategory(index: number) {}
  getCategeory() {
    console.log('CLICK')
  }

}
