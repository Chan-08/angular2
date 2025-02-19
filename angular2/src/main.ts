import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';
import { ParentComponent } from './app/parent/parent.component'; // Import ParentComponent

const routes: Route[] = [
  { path: '', component: ParentComponent }, // Default route set to ParentComponent
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
