import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { CartObserverComponent } from './cart-observer/cart-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ProductListComponent,
    CenterComponentComponent,
    ProductcardComponent,
    PagenotfoundComponent,
    CartObserverComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
