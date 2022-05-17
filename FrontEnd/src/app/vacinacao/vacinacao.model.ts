
//MODELO PARA LISTAR  VACINAÇAO
    export interface Vacinacao {
      id: number | any;
      id_usuario: number | any;
      id_vacina: number | any;
      data_aplicacao: string;
      numero_dose:string ;
      proxima_dose: number | any;



  }

//MODELO PARA LISTAR UM VACINAÇÃO
export interface ReponseVacinacao {
  id: number | any;
  id_usuario: number | any;
  id_vacina: number | any;
  data_aplicacao: string;
  numero_dose:string ;
  proxima_dose: number | any;



}



  //MODELO PARA CRIAÇÃO
   export interface RequestCreateVN {
    id: number | any;
    id_usuario: number | any;
    id_vacina: number | any;
    data_aplicacao: string;
    numero_dose:string ;
    proxima_dose: number | any;


}


//MODELO PARA CRIAÇÃO
  export interface ResponseCreateVN {
    id: number | any;
    id_usuario: number | any;
    id_vacina: number | any;
    data_aplicacao: string;
    numero_dose:string ;
    proxima_dose: number | any;

}


  //MODELO PARA UPDATE
  export interface RequestUpdateVN {
    id: number | any;
    id_usuario: number | any;
    id_vacina: number | any;
    data_aplicacao: string;
    numero_dose:string ;
    proxima_dose: number | any;

}



//MODELO PARA REPOSTA UPDATE
export interface ResponseUpdateVN{
  id: number | any;
  id_usuario: number | any;
  id_vacina: number | any;
  data_aplicacao: string;
  numero_dose:string ;
  proxima_dose: number | any;

}
