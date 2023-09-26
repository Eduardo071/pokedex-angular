import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonDescriptionComponent } from './components/pokemon-description/pokemon-description.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon/:name', component: PokemonDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
