package com.revature.services;

import java.util.List;

import com.revature.models.Trainer;

public interface TrainerService {
	
	public List<Trainer> findAllTrainers();
	public Trainer findTrainerByUsername(String username);
	public Trainer addTrainer(Trainer newTrainer);
	public Trainer updateTrainer(Trainer trainer);
	public Trainer loginTrainer(Trainer t);

}
