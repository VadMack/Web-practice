import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from "@angular/router";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {FormsModule} from "@angular/forms";
import { RecipePageComponent } from './recipe-page/recipe-page.component';

const routes = [
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: '', component: HomePageComponent},
  {path: 'recipe/:id', component: RecipePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShoppingCartComponent,
    RecipePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
