import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
export const routes: Routes = [


    {
        path: "",
        component: LoggedLayout,
        children:[
            {
                path: "",
                component: ContactsPage
            },
            {
                path:'contacts/id',
                component: ContactDetailsPage 
            }
        ]
    }
    
];
