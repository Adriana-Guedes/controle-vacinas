import { UpdateVacinasComponent } from './vacinas/update-Vacinas/update-vacinas.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VacinasComponent } from './vacinas/vacinas.component';
import { VacinacaoComponent } from './vacinacao/vacinacao.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component'
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './usuarios/update/update.component';
import { DeleteUserComponent } from './usuarios/delete-user/delete-user.component';
import { CreateVacinasComponent } from './vacinas/create-vacinas/create-vacinas.component';
import { DeleteVacinasComponent } from './vacinas/delete-vacinas/delete-vacinas.component';
import { CreateVacinacaoComponent } from './vacinacao/create-vacinacao/create-vacinacao.component';
import { UpdateVacinacaoComponent } from './vacinacao/update-vacinacao/update-vacinacao.component';
import { DeleteVacinacaoComponent } from './vacinacao/delete-vacinacao/delete-vacinacao.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    VacinasComponent,
    VacinacaoComponent,
    CreateUsuariosComponent,
    UpdateComponent,
    UpdateVacinasComponent,
    DeleteUserComponent,
    CreateVacinasComponent,
    DeleteVacinasComponent,
    CreateVacinacaoComponent,
    UpdateVacinacaoComponent,
    DeleteVacinacaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
