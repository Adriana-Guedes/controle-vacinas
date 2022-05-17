package com.controle.vacinas.dto;


import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;
import org.modelmapper.ModelMapper;
import com.controle.vacinas.entity.UsuarioEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {


	
	private int id;
	
	@NotEmpty(message ="É obrigatório o nome da vacina") //PERMITE CAMPO VAZIO, MAS NÃO PERMITE CAMPO NULO,  CASO ACONTEÇA A MENSAGEM É EXIBIDA
	@NotNull (message ="É obrigatório o nome da vacina") //NÃO PODE ESTAR VAZIO, CASO ACONTEÇA, A MENSAGEM É EXIBIDA
	@Length(min = 5 , max = 80, message = "O numero de caracteres deve ser entre 5 e 30") //TAMANHO DOS CARACTERIES
	@Pattern( regexp = "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$", message = "É valido apenas caracteres")
	private String nome;
	
	

	@NotNull (message ="É obrigatóri número do cpf") 
	private String cpf;
	
	
	@NotNull (message ="É obrigatóri número do cpf") 
	
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date data_Nasc;
	
	
	@NotEmpty(message ="Campo endereço é Obrigatório")
	@NotNull (message ="Campo endereço é Obrigatório")
	private String endereco;
	
	
	
	
	private String telefone;
	
	
	
	
	
public UsuarioEntity toEntity() {
		
		ModelMapper mapper = new ModelMapper();
		
		return mapper.map(this, UsuarioEntity.class);
	
	
	
	
	}

}