import { Routes } from '@angular/router';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

export const profileRoutes: Routes = [
    { 
        path: '', 
        component: ProfileDetailsComponent, 
        pathMatch: 'full',
    },
    { 
        path: 'edit-profile',
        component: EditProfileComponent,
        pathMatch: 'full',
    },
    { 
        path: 'change-password',
        component: ChangePasswordComponent,
        pathMatch: 'full',
    },
];
