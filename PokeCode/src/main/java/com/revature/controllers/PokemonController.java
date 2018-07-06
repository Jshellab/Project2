package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.models.Pokemon;
import com.revature.services.PokemonService;

@Controller
@CrossOrigin
@RequestMapping("/pokemon")
public class PokemonController {

	@Autowired
	PokemonService pokemonService;
	
	//Added GET method to return all pokemon when called on /pokemon
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Pokemon> findAllPokemon(){
		return pokemonService.findAllPokemon();
	}
	
	//Returns a list of pokemon when GET method called to /pokemon/{username} 
	//This is a list of a user's pokemon, used for the boxes funtionality
	@GetMapping(value="/{username}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Pokemon> findByTrainerUsername(@PathVariable("username") String username) {
		return pokemonService.findByTrainerUsername(username);
	}
	
	//Returns single pokemon based on unique pokemon ID when called on /pokemon/id/{id}
	//Used for the trading functionality
	@GetMapping(value="/id/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Pokemon findPokemonById(@PathVariable("id") int pokemon_Id) {
		return pokemonService.findPokemonById(pokemon_Id);
	}
	
	//Added PATCH method to update pokemon information
	//Used for the trading functionality
	@PatchMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Pokemon updatePokemon(@RequestBody Pokemon t) {
		return pokemonService.updatePokemon(t);
	}
	
	//Added POST method to add pokemon
	//Used when catching a pokemon
	@PostMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Pokemon createPokemon(@RequestBody Pokemon p) {
		return pokemonService.addPokemon(p);
	}
	
	//Added DELETE method to pokemon
	//Used when releasing pokemon from inventory/box
	@DeleteMapping(value="/delete/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int deletePokemon(@PathVariable("id") int pokemon_Id) {
		return pokemonService.deletePokemon(pokemon_Id);
	}

}