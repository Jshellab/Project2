package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Post;
import com.revature.repositories.PostRepository;

@Service
@Transactional
public class PostServiceImpl implements PostService{

	@Autowired
	PostRepository postRepo;
	
	public List<Post> findAllPosts() {
		return postRepo.findAll();
	}

	public Post addPost(Post newPost) {
		return postRepo.save(newPost);
	}

	public Post updatePost(Post post) {
		return postRepo.save(post);
	}

	@Override
	public List<Post> findByTrainerUsername(String username) {
		return postRepo.findByTrainerUsername(username);
	}

	@Override
	public int deletePost(int post_Id) {
		postRepo.deleteById(post_Id);
		return post_Id;
	}

	@Override
	public List<Post> findByTradePokemon(int tradePokemon) {
		return postRepo.findByTradePokemon(tradePokemon);
	}

//	@Override
//	public List<Post> findByUsernameTradepokemon(String username, int tradePokemon) {
//		return postRepo.findByTrainerUsername(username);
//	}

}
