import { User, ReponseUser } from './../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})


export class DeleteUserComponent implements OnInit {
  id: string | any;
  user: User | any;


  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private _route: Router ){}

  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id');
    this.usuariosService.getUsuario(this.id).subscribe(res => {
      this.user =  {
        id:`${res.id}`,
        nome:`${res.nome}`,
        cpf:  `${res.cpf}`,
        data_Nasc : `${res.data_Nasc}`,
        endereco:`${res.endereco}`,
        telefone:`${res.telefone} `}
    });

  }

  delete(){
    this.usuariosService.deleteUsuario(this.id).subscribe(res => {
      alert (`Usuario removido com sucesso!`);

     this.voltar();

    })
  }

  voltar(){
    this._route.navigate(['/usuarios'])
  }

}

