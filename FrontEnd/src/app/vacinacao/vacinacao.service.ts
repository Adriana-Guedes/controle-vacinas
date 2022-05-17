import { Observable } from 'rxjs';
import { Vacinacao, RequestCreateVN, ResponseCreateVN, ReponseVacinacao, RequestUpdateVN } from './vacinacao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  userUrl = 'http://localhost:8080/api-controle/vacinacao';


  constructor(private httpClient: HttpClient) { }




  //LISTA VARIOS USUARIOS
  getVacinacaoAll(): Observable<Vacinacao>  {

    return this.httpClient.get<Vacinacao>(this.userUrl);
  }



  // INSERE NOVO USUARIO
  createVacinacao(request: RequestCreateVN): Observable<ResponseCreateVN>{
    return this.httpClient.post<ResponseCreateVN>(this.userUrl, request);

  }

  //LISTA UM USUARIOS (INFORMAR ID)
  getVacinacao(id: String): Observable<ReponseVacinacao>  {
    const _url = `${this.userUrl}/${id}`;
    return this.httpClient.get<ReponseVacinacao>( _url);
  }

  //ALTERAR USUARIO (INFORMAR ID)
  updateVacinacao(id: String, request: RequestUpdateVN): Observable<RequestUpdateVN>{
    const _url = `${this.userUrl}/${id}`;
    return this.httpClient.patch<RequestCreateVN>(_url, request);
  }

  //DELETE USUARIO
  deleteVacinacao(id: String): Observable<any>{
    const _url = `${this.userUrl}/${id}`;
    return this.httpClient.delete<any>(_url);

  }


}
