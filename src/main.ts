import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import routes from './app.routes';
import { provideRouter } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

bootstrapApplication(MainLayoutComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

