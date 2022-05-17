import { ResponseCreate } from './../user.model';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { RequestCreate } from '../user.model';

@Component({
  selector: 'app-create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.scss']
})
export class CreateUsuariosComponent implements OnInit {


  //PARA CRIAÇÃO NECESSÁRIO UM OBJETO VAZIO, PARA RECEBER OS DADOS INSERIDOS NA TELA(UTILIZAR NGMODEL PARA CAPTURA, IMPORTAR FormsModule)
  request: RequestCreate = {
  nome: '',
  cpf: '',
  data_Nasc:'',
  endereco: '',
  telefone: '',
}


//VARIAVEL DE RETORNO APÓS GRAVAÇÃO DOS DADOS
response: ResponseCreate| any;


  constructor(private usuariosService: UsuariosService )  { }

  ngOnInit(): void {
  }


  save(){
  this.usuariosService.createUser(this.request).subscribe (res => {
    this.response= res; //AQUI OS DADOS SERÃO JOGADOS PARA VISUALIZAÇÃO NO HTML


  });
  }
}
