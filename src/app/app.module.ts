import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { BannerComponent } from './components/banner/banner.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { CardEmphasisComponent } from './components/card-emphasis/card-emphasis.component';
import { CardJournalsComponent } from './components/card-journals/card-journals.component';
import { CardSocialMediaComponent } from './components/card-social-media/card-social-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { PubliComponent } from './components/publi/publi.component';
import { CardComponent } from './components/card-carousel/card/card.component';

import { ContentComponent } from './pages/content/content-main/content-main.component';
import { MainComponent } from './pages/home/main/main.component';

/* import { HomeModule } from './pages/home/home.module'; */

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    BannerComponent,
    BigCardComponent,
    CardCarouselComponent,
    CardEmphasisComponent,
    CardJournalsComponent,
    CardSocialMediaComponent,
    FooterComponent,
    PubliComponent,
    MainComponent,
    ContentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports:[
    MenuPrincipalComponent,
    BannerComponent,
    BigCardComponent,
    CardCarouselComponent,
    CardEmphasisComponent,
    CardJournalsComponent,
    CardSocialMediaComponent,
    FooterComponent,
    PubliComponent,
    MainComponent,
    ContentComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
