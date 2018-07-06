package com.revature.services;

import java.util.List;

import com.revature.models.Pokemon;

public interface PokemonService {

	public List<Pokemon> findAllPokemon();
	public Pokemon addPokemon(Pokemon newPokemon);
	public Pokemon updatePokemon(Pokemon pokemon);
	public List<Pokemon> findByTrainerUsername(String username);
	public int deletePokemon(int pokemon_Id);
	public Pokemon findPokemonById(int pokemon_Id);
	
}
