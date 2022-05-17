package com.controle.vacinas.entity;



import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import org.modelmapper.ModelMapper;
import com.controle.vacinas.dto.VacinacaoDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="vacinacao")
public class VacinacaoEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
		
	private int id_usuario;
	
	private int id_vacina;
	
	
	private String data_aplicacao;
	
	private String numero_dose;
	
	
	private String proxima_dose;
	
	
	


	
	

	 

	
	
	
	
	
	
	
	public VacinacaoDTO toDTO() {
		ModelMapper mapper = new ModelMapper();
		
		VacinacaoDTO dto = mapper.map(this, VacinacaoDTO.class);
		
		return dto;
	
	
		
		
		
  }
	
	
	
	
	
}