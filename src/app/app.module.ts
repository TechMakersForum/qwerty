import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CollapsibleModule } from 'angular2-collapsible';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { GalleryComponent } from './gallery/gallery.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AuthGuard } from 'src/admin/service/auth.guard';
import { ServiceService } from 'src/admin/service/service.service';
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
// import { defineLocale } from 'ngx-bootstrap/chronos';
// import { enGbLocale } from 'ngx-bootstrap/locale';

// defineLocale('engb', enGbLocale);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ErrorComponent,
    GalleryComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapsibleModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AuthGuard,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
