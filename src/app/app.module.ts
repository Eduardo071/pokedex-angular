import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContainerMainComponent } from './components/container-main/container-main.component';
import { ButtonShowMoreComponent } from './components/button-show-more/button-show-more.component';
import { TitleHomeComponent } from './components/title-home/title-home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PokemonDescriptionComponent } from './components/pokemon-description/pokemon-description.component';
import { PokemonDetailImageComponent } from './components/pokemon-detail-image/pokemon-detail-image.component';
import { HeaderPokemonDetailComponent } from './components/header-pokemon-detail/header-pokemon-detail.component';
import { PokemonDetailsTextComponent } from './components/pokemon-details-text/pokemon-details-text.component';
import { PokemonDetailsMovesComponent } from './components/pokemon-details-moves/pokemon-details-moves.component';
import { PokemonDetailsAbilitiesComponent } from './components/pokemon-details-abilities/pokemon-details-abilities.component';
import { PokemonDetailsFooterComponent } from './components/pokemon-details-footer/pokemon-details-footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContainerMainComponent, ButtonShowMoreComponent, TitleHomeComponent, PokemonDescriptionComponent, PokemonDetailImageComponent, HeaderPokemonDetailComponent, PokemonDetailsTextComponent, PokemonDetailsMovesComponent, PokemonDetailsAbilitiesComponent, PokemonDetailsFooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
