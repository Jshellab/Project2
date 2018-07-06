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
		return trainerRepo.findAll();
	}

	public Trainer addTrainer(Trainer newTrainer) {
		for(Trainer trainer : findAllTrainers()) {
			if(trainer.getUsername().equals(newTrainer.getUsername())) {
				return null;
			}
		}
		return trainerRepo.save(newTrainer);
	}

	public Trainer updateTrainer(Trainer trainer) {
		return trainerRepo.save(trainer);
	}

//	public Trainer loginTrainer(Trainer t) {
//		return trainerRepo.findTrainerByUsernameAndPassword(t.getUsername(), t.getPassword());
//	}

	public Trainer findTrainerByUsername(String username) {
		return trainerRepo.findTrainerByUsername(username);
	}

	@Override
	public int deleteTrainer(int trainer_Id) {
		trainerRepo.deleteById(trainer_Id);
		return trainer_Id;
	}


}
