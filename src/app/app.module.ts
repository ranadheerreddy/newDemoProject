import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AccountPipe } from './Pipe/account.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MathService } from './Math.service';
import { NewComponent } from './New.component';
import { ObservableComponent } from './Observable.component';
import { HomePageComponent } from './Routing/home-page/home-page.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Routing/product-details/product-details.component';
import { ProductListComponent } from './Routing/product-list/product-list.component';
import { MyHttpInterceptor } from './http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AccountPipe,
    ChildComponent,
    NewComponent,
    ObservableComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MathService, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
