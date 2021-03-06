package com.controle.vacinas.entity;



import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.modelmapper.ModelMapper;
import org.springframework.format.annotation.DateTimeFormat;

import com.controle.vacinas.dto.UsuarioDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="usuarios")
public class UsuarioEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String nome;
	private String cpf;
	
	@JsonFormat(pattern = "dd-MM-yyyy")
	private String  data_Nasc;
	private String endereco;
	private String telefone;
	
	
	
	 

	public UsuarioDTO toDTO() {
		ModelMapper mapper = new ModelMapper();
		
		UsuarioDTO dto = mapper.map(this, UsuarioDTO.class);
		
		return dto;
	
	
	
		
		
		

	}
}

