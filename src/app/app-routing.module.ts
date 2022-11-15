import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './pages/badge/badge.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { ElevationComponent } from './pages/elevation/elevation.component';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'elevation', component: ElevationComponent},
  { path: 'ripple', component: RippleComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'badge', component: BadgeComponent},
  { path: 'dialog', component: DialogComponent},
  { path: 'cards', component: CardsComponent },
  { path: 'tooltip', component: TooltipComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
