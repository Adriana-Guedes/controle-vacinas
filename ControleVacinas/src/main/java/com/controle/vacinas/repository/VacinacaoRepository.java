package com.controle.vacinas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.controle.vacinas.entity.VacinacaoEntity;




@Repository
public interface VacinacaoRepository extends JpaRepository<VacinacaoEntity, Integer> {
	
	

}
