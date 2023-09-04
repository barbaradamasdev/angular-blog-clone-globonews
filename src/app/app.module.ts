import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { PubliComponent } from './components/publi/publi.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { CardComponent } from './components/card-carousel/card/card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { AsideCardComponent } from './components/aside-card/aside-card.component';
import { CardEmphasisComponent } from './components/aside-card/card-emphasis/card-emphasis.component';
import { CardJournalsComponent } from './components/aside-card/card-journals/card-journals.component';
import { CardSocialMediaComponent } from './components/aside-card/card-social-media/card-social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    MenuPrincipalComponent,
    PubliComponent,
    CardCarouselComponent,
    CardComponent,
    BigCardComponent,
    AsideCardComponent,
    CardEmphasisComponent,
    CardJournalsComponent,
    CardSocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
