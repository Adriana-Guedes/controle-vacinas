package com.controle.vacinas.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.controle.vacinas.constantes.Messages;
import com.controle.vacinas.dto.VacinacaoDTO;
import com.controle.vacinas.service.VacinacaoService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;






@Tag(name= Messages.SWAGGER_TAG_VACINACAO_ENDPOINT)
@RestController
@RequestMapping(value = "vacinacao")
@CrossOrigin(origins = "http://localhost:4200")
public class VacinacaoController {


	
	@Autowired
	private VacinacaoService vacinacaoService;
	
	
	@Operation(description = Messages.SWAGGER_GET_ALL)
	@GetMapping("")
	public ResponseEntity<List<VacinacaoDTO>> getAll(){	
	return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.getAll());
		
	}

	@Operation(description = Messages.SWAGGER_GET_ID )
	@GetMapping("{id}")
	public ResponseEntity<VacinacaoDTO> getOne(@PathVariable Integer id) {
	return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.getOne(id));
	}
	
	@Operation(description = Messages.SWAGGER_INSERT)
	@PostMapping("")
	public ResponseEntity<VacinacaoDTO> save(@Valid @RequestBody  VacinacaoDTO vacinacao)	{
	return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.save(vacinacao.toEntity()));
		
	}

	@Operation(description = Messages.SWAGGER_UPDATE)
	@PatchMapping("{id}")
	public ResponseEntity<VacinacaoDTO> update(@PathVariable Integer id, @RequestBody VacinacaoDTO vacinacao){
    return ResponseEntity.status(HttpStatus.OK).body(vacinacaoService.update(id, vacinacao.toEntity()));	
		
	}
	
	
	@Operation(description = Messages.SWAGGER_DELETE)
	@DeleteMapping("{id}")
	public  void  delete(@PathVariable Integer id) {
	 vacinacaoService.delete(id);
		
		}
}