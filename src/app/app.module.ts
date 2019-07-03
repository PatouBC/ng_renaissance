import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
         MatButtonModule, MatExpansionModule, MatListModule, MatMenuModule,
         MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule,
         MatProgressSpinnerModule, MatTableModule, MatSelectModule,
         MatAutocompleteModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImagepathPipe } from './pipe/imagepath.pipe';

import { AppComponent } from './app.component';
import { JwtInterceptor } from './class/jwt-interceptor';
import { ErrorInterceptor } from './class/error-interceptor';
import {IsSignedInGuard} from './guard/is-signed-in.guard';

import { HomeComponent } from './page/home/home.component';
import { SoinsComponent } from './page/soins/soins.component';
import { AteliersComponent } from './page/ateliers/ateliers.component';
import { ConsultationsComponent } from './page/consultations/consultations.component';
import { IndicationComponent } from './component/indication/indication.component';
import { CategoryComponent } from './component/category/category.component';
import { RegistrationComponent } from './page/registration/registration.component';
import { ProductComponent } from './page/product/product.component';


import { ActuComponent } from './component/actu/actu.component';
import { HtmlPipe } from './pipe/html.pipe';
import { ImageComponent } from './component/image/image.component';
import { ProductDetailComponent } from './page/product/product-detail/product-detail.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { ProfileComponent } from './component/profile/profile.component';

import { PersoComponent } from './page/perso/perso.component';
import { ProductIndicationComponent } from './page/product/product-indication/product-indication.component';
import { EmailComponent } from './component/email/email.component';
import { CookieComponent } from './component/cookie/cookie.component';
import { ConfidentialComponent } from './page/confidential/confidential.component';
import { LoginComponent} from './component/login/login.component';


const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    data : { title: 'Accueil' } },
  { path: 'ateliers',
    component: AteliersComponent,
    data : { title: 'Ateliers' } },
  { path: 'confidential',
    component: ConfidentialComponent,
    data : { title: 'Politique de confidentialité' } },
  { path: 'consultations',
    component: ConsultationsComponent,
    data : { title: 'Consultations' } },
  { path: 'perso',
    component: PersoComponent,
    data : { title: 'Fleurs et Elixirs' } },
  { path: 'product/:id',
    component: ProductComponent,
    data : { title: 'Fleurs et Elixirs' } },
  { path: 'product/detail/:id',
    component: ProductDetailComponent,
    data : { title: 'Fleurs et Elixirs' } },
  { path: 'product/indication/:id',
    component: ProductIndicationComponent,
    data : { title: 'Fleurs et Elixirs' } },
  { path: 'soins',
    component: SoinsComponent,
    data : { title: 'Soins énergétiques' } },
  { path: 'registration',
    component: RegistrationComponent,
    data : { title: 'Enregistrement' } },
  { path: 'perso',
    component: PersoComponent,
    canActivate : [IsSignedInGuard],
    data : { title: 'Personnel' } },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  { path: '**',
    component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent,
    SoinsComponent,
    AteliersComponent,
    ConsultationsComponent,
    CategoryComponent,
    IndicationComponent,
    ImagepathPipe,
    RegistrationComponent,
    ActuComponent,
    HtmlPipe,
    ImageComponent,
    ProductDetailComponent,
    CalendarComponent,
    ProfileComponent,
    PersoComponent,
    ProductIndicationComponent,
    EmailComponent,
    CookieComponent,
    ConfidentialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgbModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
      CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
