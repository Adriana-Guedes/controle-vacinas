
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacinas, ResponseCreateV, RequestCreateV, ReponseVacinas, RequestUpdateV } from './vacinas.model';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {


  vacinaUrl = 'http://localhost:8080/api-controle/vacinas';


  constructor(private HttpClient: HttpClient) { }



  //LISTA VARIOS USUARIOS
  getVacinasAll(): Observable<Vacinas>  {

    return this.HttpClient.get<Vacinas>(this.vacinaUrl);
  }



  // INSERE NOVO USUARIO
  createVacinas(request: RequestCreateV): Observable<ResponseCreateV>{
    return this.HttpClient.post<RequestCreateV>(this.vacinaUrl, request);

  }

  //LISTA UM USUARIOS (INFORMAR ID)
  getVacina(id: String): Observable<ReponseVacinas>  {
    const _url = `${this.vacinaUrl}/${id}`;
    return this.HttpClient.get<ReponseVacinas>( _url);
  }

  //ALTERAR USUARIO (INFORMAR ID)
  updateVacinas(id: String, request: RequestUpdateV): Observable<RequestUpdateV>{
    const _url = `${this.vacinaUrl}/${id}`;
    return this.HttpClient.patch<RequestCreateV>(_url, request);
  }

  //DELETE USUARIO
  deleteVacinas(id: String): Observable<any>{
    const _url = `${this.vacinaUrl}/${id}`;
    return this.HttpClient.delete<any>(_url);

  }

}

