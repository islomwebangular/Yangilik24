import { Routes } from '@angular/router';

export const routes: Routes = [
{   
  path:"",
  pathMatch:"full",
  redirectTo:"home"
},  
{path:'home',loadComponent:()=>import('./feature/home/home.component')},
{path:'business',loadComponent:()=>import("./feature/business/business.component")},
{path:'entertainment',loadComponent:()=>import('./feature/entertainment/entertainment.component')},
{path:'general',loadComponent:()=>import('./feature/general/general.component')},
{path:'health',loadComponent:()=>import('./feature/health/health.component')},
{path:'science',loadComponent:()=>import('./feature/science/science.component')},
{path:'technology',loadComponent:()=>import('./feature/technology/technology.component')},
{path:'sport',loadComponent:()=>import('./feature/sport/sport.component')},
{path:'not-found',loadComponent:()=>import('./shared/components/not-found/not-found.component')},
{path:'**', redirectTo:'not-found'} 
];
