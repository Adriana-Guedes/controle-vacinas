package com.controle.vacinas.dto;




import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;
import org.modelmapper.ModelMapper;
import com.controle.vacinas.entity.VacinaEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class VacinaDTO {
	

	
	
	private int id;
	
	
	@NotEmpty(message ="É obrigatório o nome da vacina") //PERMITE CAMPO VAZIO, MAS NÃO PERMITE CAMPO NULO,  CASO ACONTEÇA A MENSAGEM É EXIBIDA
	@NotNull (message ="É obrigatório o nome da vacina") //NÃO PODE ESTAR VAZIO, CASO ACONTEÇA, A MENSAGEM É EXIBIDA
	@Length(min = 5 , max = 80, message = "O numero de caracteres deve ser entre 5 e 30") //TAMANHO DOS CARACTERIES
	@Pattern( regexp = "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$", message = "É valido apenas caracteres")
	private String nome;
	
	
	@NotEmpty(message ="Nome do fabricante é Obrigatório")
	@NotNull (message ="Preenchimento Obrigatório") 
	@Length(min = 4 , max = 80, message = "O numero de caracteres deve ser entre 4 e 30")
	@Pattern( regexp = "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$", message = "É valido apenas caracteres")
	private String fabricante;
	

	

	private int doses; 
	
	private int intervalo; 

	
	
	
	
public VacinaEntity toEntity() {
		
		ModelMapper mapper = new ModelMapper();
		
		return mapper.map(this, VacinaEntity.class);
	

	}
}
