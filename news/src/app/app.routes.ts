import { Routes } from '@angular/router';

export const routes: Routes = [
{path:'uzbekistan', loadComponent:()=>import("./feature/uzbekistan/uzbekistan.component")},
{path:'economy',loadComponent:()=>import('./feature/economy/economy.component')},
{path:'world',loadComponent:()=>import('./feature/world/world.component')},
{path:'policy',loadComponent:()=>import('./feature/policy/policy.component')},
{path:'society',loadComponent:()=>import('./feature/society/society.component')},
{path:'technologies',loadComponent:()=>import('./feature/technologies/technologies.component')},
{path:'sport',loadComponent:()=>import('./feature/sport/sport.component')},
];
