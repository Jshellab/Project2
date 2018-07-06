package com.revature.services;

import java.util.List;

import com.revature.models.Post;

public interface PostService {

	public List<Post> findAllPosts();
	public Post addPost(Post newPost);
	public Post updatePost(Post post);
	public List<Post> findByTrainerUsername(String username);
	public int deletePost(int post_Id);
	public List<Post> findByTradePokemon(int tradePokemon);
//	public List<Post> findByUsernameTradepokemon(String username, int tradePokemon);	
}
