import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'acustico',
    loadComponent:() => import('./acustico/acustico.component'),
    children:[
      {
        path:'home',
        loadComponent:() => import('./acustico/pages/home/home.component')
      },
      {
        path:'podcast',
        loadComponent:() => import('./acustico/pages/podcast/podcast.component')
      },
      {
        path:'noticias',
        loadComponent:() => import('./acustico/pages/noticias/noticias.component')
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: 'acustico',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo: 'acustico',
    pathMatch:'full'
  }
];
