import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BandeauComponent } from './header/bandeau/bandeau.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitComponent } from './catalogue/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandeauComponent,
    FooterComponent,
    CatalogueComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
