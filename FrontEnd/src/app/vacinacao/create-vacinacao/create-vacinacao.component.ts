import { VacinacaoService } from './../vacinacao.service';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../../usuarios/usuarios.service';
import { RequestCreateVN, ResponseCreateVN } from './../vacinacao.model';
import { RequestUpdate } from './../../usuarios/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-vacinacao',
  templateUrl: './create-vacinacao.component.html',
  styleUrls: ['./create-vacinacao.component.scss']
})
export class CreateVacinacaoComponent implements OnInit {

  id: string | any;
  request: RequestUpdate |any;


  requestC: RequestCreateVN = {
    id: '',
    id_usuario: '',
    id_vacina: ' ',
    data_aplicacao: '',
    numero_dose:'' ,
    proxima_dose: ''

  }

  //VARIAVEL DE RETORNO APÓS GRAVAÇÃO DOS DADOS
response: ResponseCreateVN| any;



  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute , private vacinacaoService: VacinacaoService) {}


  //TRAZENDO OS DADOS DO USUARIO PARA A TELA

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
      this.usuariosService.getUsuario(this.id).subscribe(res => {
        this.request = {
          id: `${res.id} `,
          nome:`${res.nome}`,
          cpf:  `${res.cpf}`,
          data_Nasc : `${res.data_Nasc}`,
          endereco:`${res.endereco}`,
          telefone:`${res.telefone} `,



        }
      });

  }



  //SALVANDO OS DADOS DE VACINAÇÃO
     save(){
      this.vacinacaoService.createVacinacao(this.requestC).subscribe (res => {

        this.response= res; //AQUI OS DADOS SERÃO JOGADOS PARA VISUALIZAÇÃO NO HTML


      });
      }


  }
