import { VacinasService } from './vacinas.service';
import { Vacinas } from './vacinas.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacinas',
  templateUrl: './vacinas.component.html',
  styleUrls: ['./vacinas.component.scss']
})
export class VacinasComponent implements OnInit {

vacinas: Vacinas | any;

  constructor(private vacinasService: VacinasService) { }

  ngOnInit(): void {

  this.vacinasService.getVacinasAll()
          .subscribe(res => this.vacinas = res)

    }


  }
