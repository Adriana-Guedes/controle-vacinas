
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, RequestCreate, ResponseCreate, ReponseUser, RequestUpdate, ResponseUpdate } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 userUrl = 'http://localhost:8080/api-controle/usuarios';


  constructor(private httpClient: HttpClient) { }



  //LISTA VARIOS USUARIOS
  getUsuariosAll(): Observable<User>  {

    return this.httpClient.get<User>(this.userUrl);
  }



  // INSERE NOVO USUARIO
  createUser(request: RequestCreate): Observable<ResponseCreate>{
    return this.httpClient.post<RequestCreate>(this.userUrl, request);

  }

  //LISTA UM USUARIOS (INFORMAR ID)
  getUsuario(id: String): Observable<ReponseUser>  {
    const _url = `${this.userUrl}/${id}`;
    return this.httpClient.get<ReponseUser>( _url);
  }

  //ALTERAR USUARIO (INFORMAR ID)
  updateUsuario(id: String, request: RequestUpdate): Observable<ResponseUpdate>{
    const _url = `${this.userUrl}/${id}`;
    return this.httpClient.patch<RequestCreate>(_url, request);
  }

  //DELETE USUARIO
  deleteUsuario(id: String): Observable<any>{
    const _url = `${this.userUrl}/${id}`;
    return this.httpClient.delete<any>(_url);

  }

}
