import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [{
    
path: 'home',
title: 'Home',
component: HomeComponent
},

{
    path: 'about',
    title: 'About',
    component: AboutComponent
},

{
    path: 'contact',
    title: 'Contact',
    component: ContactComponent
},

{
    path: 'gallery',
    title: 'Gallery',
    component: GalleryComponent
},

{
    path: '**',
    title: 'error 404',
    component: ErrorComponent
}];
