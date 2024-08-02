import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'api-data', component: ApiDataComponent },
    { path: 'form-page', component: FormPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
