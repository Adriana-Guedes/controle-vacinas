import { DeleteVacinacaoComponent } from './vacinacao/delete-vacinacao/delete-vacinacao.component';
import { UpdateVacinacaoComponent } from './vacinacao/update-vacinacao/update-vacinacao.component';
import { CreateVacinacaoComponent } from './vacinacao/create-vacinacao/create-vacinacao.component';
import { DeleteVacinasComponent } from './vacinas/delete-vacinas/delete-vacinas.component';
import { UpdateVacinasComponent } from './vacinas/update-Vacinas/update-vacinas.component';
import { CreateVacinasComponent } from './vacinas/create-vacinas/create-vacinas.component';
import { UpdateComponent } from './usuarios/update/update.component';
import { CreateUsuariosComponent } from './usuarios/create-usuarios/create-usuarios.component';
import { VacinacaoComponent } from './vacinacao/vacinacao.component';
import { VacinasComponent } from './vacinas/vacinas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './usuarios/delete-user/delete-user.component';

const routes: Routes = [

  //ROTAS DE USUARIOS
{path: 'usuarios', component: UsuariosComponent},
{path: 'usuarios/create', component: CreateUsuariosComponent},
{path: 'usuarios/update/:id', component: UpdateComponent},
{path: 'usuarios/delete/:id', component: DeleteUserComponent },

//ROTAS DE VACINA
{path: 'vacinas', component: VacinasComponent},
{path: 'vacinas/update/:id', component: UpdateVacinasComponent},
{path: 'vacinas/create', component: CreateVacinasComponent},
{path: 'vacinas/delete/:id', component: DeleteVacinasComponent},


//ROTAS DE VACINAÇÃO
{path: 'vacinacao', component: VacinacaoComponent},
{path: 'vacinacao/create/:id', component: CreateVacinacaoComponent},
{path: 'vacinacao/update/:id', component: UpdateVacinacaoComponent},
{path: 'vacinacao/delete/:id', component: DeleteVacinacaoComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
