package com.controle.vacinas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.modelmapper.ModelMapper;

import com.controle.vacinas.dto.VacinaDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="vacinas")
public class VacinaEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String nome;
	private String fabricante;
	private int doses; 
	private int intervalo; 
	
		
	
	public VacinaDTO toDTO() {
		ModelMapper mapper = new ModelMapper();
		
		VacinaDTO dto = mapper.map(this, VacinaDTO.class);
		
		return dto;
	
	
	}
}