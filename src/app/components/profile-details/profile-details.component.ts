import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-details',
  imports: [RouterLink, CommonModule, TranslateModule],
  providers: [TranslateService],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss',
})
export class ProfileDetailsComponent {
  isLoader = false;
  loggedInUserData: any = {};
  profileData: any = {};
  loginData: any = {};
  isEmulatedUser: any;
  userDetailsData: any = {};

  // name!: string;
  // toastData: any;

  constructor(
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    
    this.getUserDetails();
  }

  getUserDetails() {
    this.profileData = {
      'userName':  'johndoe',
      'userEmail': 'johndoe@test.com',
      'isActive': true,
      'name': 'John Doe',
      'modifiedOn': '2023-10-01',
    }
  }

}
