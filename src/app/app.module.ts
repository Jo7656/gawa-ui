import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicesComponent } from './components/services/services.component';
import { RoutesComponent } from './components/routes/routes.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { RouteDetailsComponent } from './components/routes/route-details/route-details.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlertModule } from './_alert';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { PluginsListComponent } from './components/plugins/plugins-list/plugins-list.component';
import { PluginDetailsComponent } from './components/plugins/plugin-details/plugin-details.component';
import { MatSelectModule } from '@angular/material/select';
// import { HtpErrorInterceptor } from './shared/HttpErrorInterceptor';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    ServicesComponent,
    RoutesComponent,
    PluginsComponent,
    RouteDetailsComponent,
    PluginsListComponent,
    PluginDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    AlertModule,
    MatCardModule,
    MatSelectModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:"toast-bottom-left"
    })
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    ToastrModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HtpErrorInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
