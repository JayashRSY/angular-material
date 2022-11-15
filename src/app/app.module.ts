import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElevationComponent } from './pages/elevation/elevation.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './pages/dialog/dialog.component';
import { Dialog1Component } from './pages/dialog/dialog1/dialog1.component';
import { Dialog2Component } from './pages/dialog/dialog2/dialog2.component';
import { DesignUtilityModule } from './appModules/design-utility.module';
import { Dialog3Component } from './pages/dialog/dialog3/dialog3.component';
import { CardsComponent } from './pages/cards/cards.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    ElevationComponent,
    RippleComponent,
    MenuComponent,
    BadgeComponent,
    DialogComponent,
    Dialog1Component,
    Dialog2Component,
    Dialog3Component,
    CardsComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignUtilityModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
