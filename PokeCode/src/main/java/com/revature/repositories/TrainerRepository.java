package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{
	
	public Trainer findTrainerByUsername(String username);
	public Trainer findUserByUsernameAndPassword(String username, String password);

}
