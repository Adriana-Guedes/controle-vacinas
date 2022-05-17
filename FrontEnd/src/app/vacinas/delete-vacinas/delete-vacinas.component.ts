import { ActivatedRoute, Router } from '@angular/router';
import { VacinasService } from './../vacinas.service';
import { Vacinas } from './../vacinas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-vacinas',
  templateUrl: './delete-vacinas.component.html',
  styleUrls: ['./delete-vacinas.component.scss']
})
export class DeleteVacinasComponent implements OnInit {

  id: string | any;
  vacinas: Vacinas | any;


  constructor(private vacinasService: VacinasService, private route: ActivatedRoute, private _route: Router ){}

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id');
    this.vacinasService.getVacina(this.id).subscribe(res => {
      this.vacinas =  {
        id:`${res.id}`,
        nome:`${res.nome}`,
        fabricante:  `${res.fabricante}`,
        doses : `${res.doses}`,
        intervalo:`${res.intervalo}`}
    });

  }

  delete(){
    this.vacinasService.deleteVacinas(this.id).subscribe(res => {
      alert (`Vacina removida com sucesso!`);

     this.voltar();

    })
  }

  voltar(){
    this._route.navigate(['/vacinas'])
  }

}



