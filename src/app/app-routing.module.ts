import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationEnd, Router } from '@angular/router';

import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'content/:id',
    component: ContentComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

  export class AppRoutingModule {
    constructor(private router: Router) { }

      ngOnInit() {
          this.router.events.subscribe((evt:any) => {
              if (!(evt instanceof NavigationEnd)) {
                  return;
              }
              window.scrollTo(0, 0)
          });
      }
  }
