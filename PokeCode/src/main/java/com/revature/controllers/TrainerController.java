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

import com.revature.models.Trainer;
import com.revature.services.TrainerService;

@Controller
@CrossOrigin
@RequestMapping("/trainers")
public class TrainerController {

	@Autowired
	TrainerService trainerService;
	
	//Added GET method to the /trainers page, gets a completel list of all users
	//Used to check login credentials
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Trainer> findAllTrainers(){
		return trainerService.findAllTrainers();
	}
	
	//Added GET method to /trainer/{username}, gets a specific trainer by username
	//Used frequently throughout the application
	@GetMapping(value="/{username}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Trainer findTrainerByUsername(@PathVariable("username") String username) {
		return trainerService.findTrainerByUsername(username);
	}
	
	//Added PATCH to /trainers, updates trainer information
	//Not currently in use
	@PatchMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Trainer updateTrainer(@RequestBody Trainer t) {
		return trainerService.updateTrainer(t);
	}
	
	//Added POST to /trainers, creates new user
	//Used in register page
	@PostMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Trainer createTrainer(@RequestBody Trainer t) {
		return trainerService.addTrainer(t);
	}
	
//	@PostMapping(value="/login", produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
//	public Trainer loginTrainer(@RequestBody Trainer t) {
//		return trainerService.loginTrainer(t);
//	}
	
	//Added DELETE method on /trainer/delete/{id}
	//Used when user decides to delete their account. Cascades.
	@DeleteMapping(value="/delete/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int deleteTrainer(@PathVariable("id") int trainer_Id) {
		return trainerService.deleteTrainer(trainer_Id);
	}
}
