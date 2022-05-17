package com.controle.vacinas.dto;


import java.util.Date;


import javax.validation.constraints.NotNull;

import org.modelmapper.ModelMapper;
import com.controle.vacinas.entity.UsuarioEntity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {


	
	private int id;
	

	@NotNull (message ="É obrigatório o nome da vacina") //NÃO PODE ESTAR VAZIO, CASO ACONTEÇA, A MENSAGEM É EXIBIDA
	private String nome;
	
	

	@NotNull (message ="É obrigatóri número do cpf") 
	private String cpf;
	

	

	private String data_Nasc;
	
	@NotNull (message ="Campo endereço é Obrigatório")
	private String endereco;
	
	
	
	
	private String telefone;
	
	
	
	
	
public UsuarioEntity toEntity() {
		
		ModelMapper mapper = new ModelMapper();
		
		return mapper.map(this, UsuarioEntity.class);
	
	
	
	
	}

}