
//MODELO PARA LISTAR TODAS AS VACINAS
export interface Vacinas {
  id: number;
  nome: string;
  fabricante: string;
  doses: number;
  intervalo: number;
}

//MODELO PARA LISTAR UMA  VACINA
export interface ReponseVacinas {
  id: number;
  nome: string;
  fabricante: string;
  doses: number;
  intervalo: number;
}



//MODELO PARA CRIAÇÃO
export interface RequestCreateV {
   nome: string;
  fabricante: string;
  doses: any;
  intervalo: any;
}


//MODELO PARA CRIAÇÃO
export interface ResponseCreateV {
   nome: string;
  fabricante: string;
  doses: any;
  intervalo: any;
}


//MODELO PARA UPDATE
export interface RequestUpdateV {
  nome: string;
  fabricante: string;
  doses: any;
  intervalo: any;
}


//MODELO PARA REPOSTA UPDATE
export interface ResponseUpdateV{
  nome: string;
  fabricante: string;
  doses: any;
  intervalo: any;
}
