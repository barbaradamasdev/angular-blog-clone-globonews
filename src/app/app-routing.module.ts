import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationEnd, Router } from '@angular/router';

import { ContentComponent } from './pages/content/content-main/content-main.component';
import { MainComponent } from './pages/home/main/main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
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
