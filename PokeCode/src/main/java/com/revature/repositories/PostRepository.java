package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{

	List<Post> findByTrainerUsername(String username);

	List<Post> findByTradePokemon(int trade_pokemon);

}
