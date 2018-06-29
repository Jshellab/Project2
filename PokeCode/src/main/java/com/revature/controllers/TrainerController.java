package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.models.Trainer;
import com.revature.services.TrainerService;

@Controller
@RequestMapping("/trainers")
public class TrainerController {

	@Autowired
	TrainerService trainerService;
	
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Trainer> findAllUsers(){
		return trainerService.findAllTrainers();
	}
	
	@GetMapping(value="/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Trainer findTrainerByUsername(@PathVariable("username") String username) {
		return trainerService.findTrainerByUsername(username);
	}
	
	@PatchMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Trainer updateTrainer(@RequestBody Trainer t) {
		return trainerService.updateTrainer(t);
	}
	
	@PostMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Trainer createTrainer(@RequestBody Trainer t) {
		return trainerService.addTrainer(t);
	}
	
	@PostMapping(value="/login", produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	public Trainer loginTrainer(@RequestBody Trainer t) {
		return trainerService.loginTrainer(t);
	}
	
}
