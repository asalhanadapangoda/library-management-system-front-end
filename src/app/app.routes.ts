import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViweAllBooksComponent } from './page/viwe-all-books/viwe-all-books.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
       path:"view-all-book",
       component:ViweAllBooksComponent 
    },
    {
        path:"sign-up",
        component:RegisterComponent
    }
];
