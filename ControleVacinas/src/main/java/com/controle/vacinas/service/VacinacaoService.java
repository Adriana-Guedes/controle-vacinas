package com.controle.vacinas.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.controle.vacinas.dto.VacinacaoDTO;
import com.controle.vacinas.entity.VacinacaoEntity;
import com.controle.vacinas.repository.VacinacaoRepository;




@Service
public class VacinacaoService {
	
	
	
	
	//INJEÇÃO DE DEPENDENCIA 
		@Autowired  
		private VacinacaoRepository vacinacaoRepository;
		
				
		
		//METODO LISTAR TUDO
		public List<VacinacaoDTO> getAll(){
			
		List<VacinacaoEntity> lista = vacinacaoRepository.findAll();		
			List<VacinacaoDTO> listaDTO = new ArrayList<>();	
			for (VacinacaoEntity vacinacaoEntity : lista) {			
				listaDTO.add(vacinacaoEntity.toDTO());
			}
			
			return listaDTO;
		
		

	 }
		
		//METODO LISTAR POR ID
		public VacinacaoDTO getOne(int id) {
			
		Optional<VacinacaoEntity> optional = vacinacaoRepository.findById(id);	
		VacinacaoEntity vacinacao = optional.orElse( new VacinacaoEntity() );
			return vacinacao.toDTO();
		}
		
		
		
		//METODO SALVAR
		public VacinacaoDTO save(VacinacaoEntity vacinacao) {
			return vacinacaoRepository.save(vacinacao).toDTO();	
		
	}
		
		public VacinacaoDTO update(int id, VacinacaoEntity novaVacinacao) {
			
			 //VERIFICAR SE O REGISTRO EXISTE
			Optional<VacinacaoEntity> optional = vacinacaoRepository.findById(id);
		
			 //SE EXISTIR
			if(optional.isPresent() == true) {
				//PEGAR O OBJETO DENTRO O OPTIONAL VINDO DO BANCO E SETAR COM O VALOR DE ENTRADA DO PARAMETRO DA METODO
				VacinacaoEntity vacinacaoBD = optional.get();
				vacinacaoBD.setNumero_dose(novaVacinacao.getNumero_dose());
				vacinacaoBD.setData_aplicacao(novaVacinacao.getData_aplicacao());
				vacinacaoBD.setProxima_dose(novaVacinacao.getProxima_dose());
				vacinacaoBD.setId_usuario(novaVacinacao.getId_usuario());
				vacinacaoBD.setId_vacina(novaVacinacao.getId_vacina());
							
				return vacinacaoRepository.save(vacinacaoBD).toDTO();
			}
		
			else {
				return new VacinacaoEntity().toDTO();
			}
		}
		
		
		
		public void delete(int id) {
			vacinacaoRepository.deleteById(id);
		}


	}


