
//MODELO PARA LISTAR TODOS OS USUARIOS
    export interface Vacinacao {
      id: number;

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
   export interface RequestCreateVN {
      nome: string;
      cpf: string;
      data_Nasc: any;
      endereco: string;
      telefone: string;
}


//MODELO PARA CRIAÇÃO
  export interface ResponseCreateVN {
    nome: string;
    cpf: string;
    data_Nasc:any ;
    endereco: string;
    telefone: string;
}


  //MODELO PARA UPDATE
  export interface RequestUpdateVN {
    nome: string;
    cpf: string;
    data_Nasc: any;
    endereco: string;
    telefone: string;
}


//MODELO PARA REPOSTA UPDATE
export interface ResponseUpdateVN{
  nome: string;
  cpf: string;
  data_Nasc:any ;
  endereco: string;
  telefone: string;
}
