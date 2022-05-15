import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReshopComponent } from './components/reshop/reshop.component';
import { GiftvoucherComponent } from './components/giftvoucher/giftvoucher.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { FoodvoucherComponent } from './components/foodvoucher/foodvoucher.component';
import { TravelvoucherComponent } from './components/travelvoucher/travelvoucher.component';
import { DrinkvoucherComponent } from './components/drinkvoucher/drinkvoucher.component';
import { DiamondvoucherComponent } from './components/diamondvoucher/diamondvoucher.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    ReshopComponent,
    GiftvoucherComponent,
    HotelComponent,
    FoodvoucherComponent,
    TravelvoucherComponent,
    DrinkvoucherComponent,
    DiamondvoucherComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
