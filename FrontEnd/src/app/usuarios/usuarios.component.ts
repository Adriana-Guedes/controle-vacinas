
import { UsuariosService } from './usuarios.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {


  user: User | any;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {

  this.usuariosService.getUsuariosAll()
          .subscribe(res => this.user = res)

    }

  
  }




