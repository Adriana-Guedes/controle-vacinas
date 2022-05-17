import { ActivatedRoute } from '@angular/router';
import { VacinacaoService } from './../vacinacao.service';
import { RequestUpdateVN } from './../vacinacao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-vacinacao',
  templateUrl: './update-vacinacao.component.html',
  styleUrls: ['./update-vacinacao.component.scss']
})



export class UpdateVacinacaoComponent implements OnInit {
  id: string | any;
  request: RequestUpdateVN |any;




  constructor(private vacinacaoService: VacinacaoService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
      this.vacinacaoService.getVacinacao(this.id).subscribe(res => {
        this.request = {
          id: `${res.id} `,
          id_usuario:`${res. id_usuario}`,
          id_vacina:  `${res.id_vacina}`,
          data_aplicacao : `${res. data_aplicacao}`,
          numero_dose:`${res.numero_dose}`,
          proxima_dose:`${res.proxima_dose} `

        }
      });

  }

  update(){
    this.vacinacaoService.updateVacinacao(this.id, this.request).subscribe(res =>
      alert( `Atualizar:  Cod: ${res.id}, Cod. Usuario: ${res.id_usuario}, Cod. Vacina: ${res.id_vacina}, Data da aplicação :  ${res.data_aplicacao},  Numero da dose: ${res.numero_dose},  Proxima Dose: ${res.proxima_dose}`)



    )


  }}

