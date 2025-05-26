import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslateModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  changePasswordForm!: FormGroup;
  changePasswordformErrors: any = {};

  name!: string;

  // Other
  currPassFieldType: string = 'password';
  newPassFieldType: string = 'password';
  confirmPassFieldType: string = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.name = `John Doe`;

    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: [''],
        newPassword: [''],
        confirmPassword: [''],
      }      
    );
  }

  changePassword() {}

  //make password visible
  onTogglePassword(fieldType: string) {
    if (fieldType === 'currentPass') {
      this.currPassFieldType = this.currPassFieldType === 'password' ? 'text' : 'password';
    } else if (fieldType === 'newPass') {
      this.newPassFieldType = this.newPassFieldType === 'password' ? 'text' : 'password';
    } else {
      this.confirmPassFieldType = this.confirmPassFieldType === 'password' ? 'text' : 'password';
    }
  }

  backToProfile() {
    this.router.navigate(['/profile']);
  }

}
