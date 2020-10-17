import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { MenuComponent } from './menu/menu.component';
import { ItemsComponent } from './items/items.component';
import { StoreService } from './service/store.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    MenuComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
