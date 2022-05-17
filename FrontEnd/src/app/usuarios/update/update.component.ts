import { RequestUpdate} from './../user.model';
import { ActivatedRoute} from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: string | any;
  request: RequestUpdate |any;




  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
      this.usuariosService.getUsuario(this.id).subscribe(res => {
        this.request = {
          id: `${res.id} `,
          nome:`${res.nome}`,
          cpf:  `${res.cpf}`,
          data_Nasc : `${res.data_Nasc}`,
          endereco:`${res.endereco}`,
          telefone:`${res.telefone} `

        }
      });

  }

  update(){
    this.usuariosService.updateUsuario(this.id, this.request).subscribe(res =>
      alert( `Atualizar:  nome: ${res.nome},  cpf: ${res.cpf},  data_Nasc :  ${res.data_Nasc},  endereco: ${res.endereco},  telefone: ${res.telefone}`)



    )

    
  }}

