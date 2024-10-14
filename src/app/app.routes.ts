import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Paginal Inicio',
  },
  {
    path: 'posts',
    component: PostsComponent,
    title: 'pagina post',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
