import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplatesListComponent } from './templates-list/templates-list.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'templates', component: TemplatesListComponent },
    { path: 'templates/create', component: CreateTemplateComponent },
    { path: 'templates/edit/:id', component: EditTemplateComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
