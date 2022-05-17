import { Vacinacao } from './../vacinacao.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VacinacaoService } from './../vacinacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-vacinacao',
  templateUrl: './delete-vacinacao.component.html',
  styleUrls: ['./delete-vacinacao.component.scss']
})
export class DeleteVacinacaoComponent implements OnInit {
  id: string | any;
  van: Vacinacao | any;


  constructor(private vacinacaoService: VacinacaoService, private route: ActivatedRoute, private _route: Router ){}


    ngOnInit(): void {
      this.id= this.route.snapshot.paramMap.get('id');
        this.vacinacaoService.getVacinacao(this.id).subscribe(res => {
          this.van = {
            id: `${res.id} `,
            id_usuario:`${res. id_usuario}`,
            id_vacina:  `${res.id_vacina}`,
            data_aplicacao : `${res. data_aplicacao}`,
            numero_dose:`${res.numero_dose}`,
            proxima_dose:`${res.proxima_dose} `
    }});

  }

  delete(){
    this.vacinacaoService.deleteVacinacao(this.id).subscribe(res => {
      alert (`Dados removidos com sucesso!`);

     this.voltar();

    })
  }

  voltar(){
    this._route.navigate(['/vacinacao'])
  }

}


