

//MODELO PARA LISTAR TODOS OS USUARIOS
    export interface User {
      id: number;
      nome: string;
      cpf: string;
      data_Nasc: any;
      endereco: string;
      telefone: string;
  }

//MODELO PARA LISTAR UM USUARIO
export interface ReponseUser {
  id: number;
  nome: string;
  cpf: string;
  data_Nasc: any;
  endereco: string;
  telefone: string;

}



  //MODELO PARA CRIAÇÃO
   export interface RequestCreate {
      id: number | any;
      nome: string;
      cpf: string;
      data_Nasc: any;
      endereco: string;
      telefone: string;
}


//MODELO PARA CRIAÇÃO
  export interface ResponseCreate {
    nome: string;
    cpf: string;
    data_Nasc:any ;
    endereco: string;
    telefone: string;
}


  //MODELO PARA UPDATE
  export interface RequestUpdate {
    id: number;
    nome: string;
    cpf: string;
    data_Nasc: any;
    endereco: string;
    telefone: string;
}


//MODELO PARA REPOSTA UPDATE
export interface ResponseUpdate{
  id: number;
  nome: string;
  cpf: string;
  data_Nasc:any ;
  endereco: string;
  telefone: string;
}
