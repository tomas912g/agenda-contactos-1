import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { ResgisterPage } from './pages/resgister-page/resgister-page';
import { Group } from './pages/group/group';   
import { Newcontact } from './pages/newcontact/newcontact';

export const routes: Routes = [
    {
    path: "login",
    component: LoginPage,
    canActivate: [onlyPublicUserGuard]
  },
    {
        path: "register",
        component: ResgisterPage,
        canActivate: [onlyPublicUserGuard]  
    },


    {
        path: "",
        component: LoggedLayout,
        canActivateChild: [onlyLoggedUserGuard],
        children:[
            {
                path: "",
                component: ContactsPage
            },
            {
                path:'contacts/:idContacto',
                component: ContactDetailsPage 
            },
            {
                path: "groups",
                component: Group
            },
            {
                path: "new",
                component: Newcontact,
            },
        ]
    }
    
];
