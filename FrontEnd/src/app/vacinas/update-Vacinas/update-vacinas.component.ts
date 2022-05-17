import { ActivatedRoute } from '@angular/router';
import { VacinasService } from '../vacinas.service';
import { RequestUpdateV } from '../vacinas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update-vacinas.component.html',
  styleUrls: ['./update-vacinas.component.scss']
})
export class UpdateVacinasComponent implements OnInit {

  id: string | any;
  requestt: RequestUpdateV |any;




  constructor(private vacinasService: VacinasService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
      this.vacinasService.getVacina(this.id).subscribe(res => {
        this.requestt = {
          nome:`${res.nome}`,
          fabricante:  `${res.fabricante}`,
          doses : `${res.doses}`,
          intervalo:`${res.intervalo}`

        }
      });

  }

  update(){
    this.vacinasService.updateVacinas(this.id, this.requestt).subscribe(res =>
      alert( `Atualizar:  nome: ${res.nome},  fabricante: ${res.fabricante},  doses :  ${res.doses},  intervalo: ${res.intervalo}`)

    )

  }}

