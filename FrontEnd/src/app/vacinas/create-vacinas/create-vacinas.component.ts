import { VacinasService } from './../vacinas.service';
import { RequestCreateV, ResponseCreateV } from './../vacinas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-vacinas',
  templateUrl: './create-vacinas.component.html',
  styleUrls: ['./create-vacinas.component.scss']
})
export class CreateVacinasComponent implements OnInit {


  //PARA CRIAÇÃO NECESSÁRIO UM OBJETO VAZIO, PARA RECEBER OS DADOS INSERIDOS NA TELA(UTILIZAR NGMODEL PARA CAPTURA, IMPORTAR FormsModule)
  request: RequestCreateV = {
    nome: '',
    fabricante: '',
    doses:'' ,
    intervalo:'' ,
  }


  //VARIAVEL DE RETORNO APÓS GRAVAÇÃO DOS DADOS
  response: ResponseCreateV| any;


    constructor(private vacinasService: VacinasService )  { }

    ngOnInit(): void {
    }


    save(){
    this.vacinasService.createVacinas(this.request).subscribe (res => {
      this.response= res; //AQUI OS DADOS SERÃO JOGADOS PARA VISUALIZAÇÃO NO HTML


    });
    }
  }
