import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Routing/home-page/home-page.component';
import { PageNotFoundComponent } from './Routing/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Routing/product-details/product-details.component';
import { ProductListComponent } from './Routing/product-list/product-list.component';
import { ResolverService } from './resolver.service';

const routes: Routes = [
  {
    path: 'resolver/:name', component: HomePageComponent, resolve: { cres: ResolverService }
  },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'product-details/:pid', component: ProductDetailsComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolverService]
})
export class AppRoutingModule { }
