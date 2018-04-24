import { IceFireService } from './ice-fire.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HouseComponent } from './house/house.component';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { SortingPipe } from './sorting.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HouseComponent,
    BookComponent,
    CharacterComponent,
    SortingPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    // routerModule forRoot method to declare possible routes in application
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'house/:id', component: HouseComponent },
      { path: 'book/:id', component: BookComponent },
      { path: 'character/:id', component: CharacterComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [IceFireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
