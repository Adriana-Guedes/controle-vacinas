package com.controle.vacinas.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.controle.vacinas.dto.VacinaDTO;
import com.controle.vacinas.entity.VacinaEntity;
import com.controle.vacinas.repository.VacinaRepository;

@Service
public class VacinaService {
	
	
	//INJEÇÃO DE DEPENDENCIA 
	@Autowired  
	private VacinaRepository vacinaRepository;
	
	
	
	
	//METODO LISTAR TUDO
	public List<VacinaDTO> getAll(){
		
	List<VacinaEntity> lista = vacinaRepository.findAll();		
		List<VacinaDTO> listaDTO = new ArrayList<>();	
		for (VacinaEntity vacinaEntity : lista) {			
			listaDTO.add(vacinaEntity.toDTO());
		}
		
		return listaDTO;
	
	

 }
	
	//METODO LISTAR POR ID
	public VacinaDTO getOne(int id) {
		Optional<VacinaEntity> optional = vacinaRepository.findById(id);
		VacinaEntity vacina = optional.orElse( new VacinaEntity());
		return vacina.toDTO();
	
	
	}
	
	//METODO SALVAR
	public VacinaDTO save(VacinaEntity vacina) {
		return vacinaRepository.save(vacina).toDTO();	
	
}
	
	public VacinaDTO update(Integer id, VacinaEntity novaVacina) {
		
		 //VERIFICAR SE O REGISTRO EXISTE
		Optional<VacinaEntity> optional = vacinaRepository.findById(id);
	
		 //SE EXISTIR
		if(optional.isPresent() == true) {
			//PEGAR O OBJETO DENTRO O OPTIONAL VINDO DO BANCO E SETAR COM O VALOR DE ENTRADA DO PARAMETRO DA METODO
			VacinaEntity vacinaBD = optional.get();
			vacinaBD.setNome(novaVacina.getNome());
			vacinaBD.setFabricante(novaVacina.getFabricante());
			vacinaBD.setDoses(novaVacina.getDoses());
			vacinaBD.setIntervalo(novaVacina.getIntervalo());
			
			return vacinaRepository.save(vacinaBD).toDTO();
		}
	
		else {
			return new VacinaEntity().toDTO();
		}
	}
	
	
	
	public void delete(int id) {
		vacinaRepository.deleteById(id);
	}


}