package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Pokemon;
import com.revature.repositories.PokemonRepository;

@Service
@Transactional
public class PokemonServiceImpl implements PokemonService{

	@Autowired
	PokemonRepository pokemonRepo;
	
	public List<Pokemon> findAllPokemon() {
		return pokemonRepo.findAll();
	}

	public Pokemon addPokemon(Pokemon newPokemon) {
		return pokemonRepo.save(newPokemon);
	}

	public Pokemon updatePokemon(Pokemon pokemon) {
		return pokemonRepo.save(pokemon);
	}

	@Override
	public List<Pokemon> findByTrainerUsername(String username) {
		return pokemonRepo.findByTrainerUsername(username);
	}

	@Override
	public int deletePokemon(int pokemon_Id) {
		pokemonRepo.deleteById(pokemon_Id);
		return pokemon_Id;
	}

	@Override
	public Pokemon findPokemonById(int pokemon_Id) {
		return pokemonRepo.getOne(pokemon_Id);
	}

}
