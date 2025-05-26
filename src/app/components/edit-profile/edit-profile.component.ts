import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslateModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  editProfileForm!: FormGroup;
  editProfileformErrors: any = {};
  name: string = '';
  
  isLoader: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.editProfileForm = this.formBuilder.group(
      {
        firstName: [''],
        lastName: [''],
        email: [''],
      }
    );

    this.setEditProfileFormValues()
  }
  
  setEditProfileFormValues() {
    this.editProfileForm.controls['firstName'].setValue('John');
    this.editProfileForm.controls['lastName'].setValue('Doe');
    this.editProfileForm.controls['email'].setValue('johndoe@test.com');
    this.name = `John Doe`;
  }

  updateProfile() {}

}
