import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

  @Input() isAuthenticated!: boolean | null
  @Input() isMobile!: boolean
  name: string='abc'
  currentUser!: User;
  subnav: boolean = true
  isOpen: boolean = false //dropdown menu open
  ssubList$: Array<any> = []
  isScrolled: boolean = false


  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {    

  }

  login() {}
  logout() {}

  onOpenChange(event: any) {}

}
