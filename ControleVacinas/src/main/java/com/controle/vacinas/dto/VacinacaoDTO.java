package com.controle.vacinas.dto;





import java.util.Date;

import org.modelmapper.ModelMapper;
import com.controle.vacinas.entity.VacinacaoEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;





@Data
@AllArgsConstructor
@NoArgsConstructor
public class VacinacaoDTO {
	
	
	
	
	private int id;

	private int id_usuario;
	
	private int id_vacina;
	
	private String data_aplicacao;
	
	
	
	private String numero_dose;
	
	private String proxima_dose;
	

	
	
	
	
public VacinacaoEntity toEntity() {
		
		ModelMapper mapper = new ModelMapper();
		
		return mapper.map(this, VacinacaoEntity.class);
		
		
		
		
		
		
	
	}
}
