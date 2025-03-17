import { Routes } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ServicesComponent } from './services/services.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BroweStylistsComponent } from './browse-stylists/browse-stylists.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactInfoComponent },
  { path: 'products', component: BrowseComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'stylists/:service', component: BroweStylistsComponent },
  { path: '', redirectTo: '/services', pathMatch: 'full' }
];

export default routes;