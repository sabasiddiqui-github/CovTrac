import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesPageComponent} from "./components/countries-page/countries-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'countries-page', component: CountriesPageComponent},
  {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
