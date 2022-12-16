import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeatherComponent } from './heather/heather/heather.component';
import { ClienteService } from './clientes/cliente.service';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'clientes', component: ClientesComponent, pathMatch: 'full'},
    {path:'clientes/form', component: FormComponent, pathMatch: 'full'}
]

export const APP_ROUTING = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeatherComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
