package com.controle.vacinas.dto;



import java.util.Date;
import javax.validation.constraints.NotEmpty;
import org.modelmapper.ModelMapper;
import com.controle.vacinas.entity.VacinacaoEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;





@Data
@AllArgsConstructor
@NoArgsConstructor
public class VacinacaoDTO {
	
	
	
	
	private int id;

		
	@NotEmpty(message =" A data da proxima dose é obrigatório") 
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date data_aplicacao;
	
	
	@NotEmpty(message =" A data da proxima dose é obrigatório") 
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date numero_dose;
	
	
	@NotEmpty(message =" A data da proxima dose é obrigatório") 
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date proxima_dose;

	
	
public VacinacaoEntity toEntity() {
		
		ModelMapper mapper = new ModelMapper();
		
		return mapper.map(this, VacinacaoEntity.class);
		
		
		
		
		
		
	
	}
}