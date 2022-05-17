import { Vacinacao } from './vacinacao.model';
import { VacinacaoService } from './vacinacao.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-vacinacao',
  templateUrl: './vacinacao.component.html',
  styleUrls: ['./vacinacao.component.scss']
})
export class VacinacaoComponent implements OnInit  {


  van: Vacinacao | any;

  constructor(private vacinacaoService: VacinacaoService) { }



  ngOnInit(): void {

  this.vacinacaoService.getVacinacaoAll()
          .subscribe(res => this.van = res)

    }

  }




