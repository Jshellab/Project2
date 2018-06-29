package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Trainer;
import com.revature.repositories.TrainerRepository;

@Service
@Transactional
public class TrainerServiceImpl implements TrainerService{

	@Autowired
	TrainerRepository trainerRepo;
	
	public List<Trainer> findAllTrainers() {
		return null;
	}

	public Trainer findTrainerByUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	public Trainer addTrainer(Trainer newTrainer) {
		// TODO Auto-generated method stub
		return null;
	}

	public Trainer updateTrainer(Trainer trainer) {
		// TODO Auto-generated method stub
		return null;
	}

	public Trainer loginTrainer(Trainer t) {
		// TODO Auto-generated method stub
		return null;
	}

	public Trainer findTrainerByUsername(String username) {
		// TODO Auto-generated method stub
		return null;
	}

}
