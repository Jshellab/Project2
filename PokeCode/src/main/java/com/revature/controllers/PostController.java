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

import com.revature.models.Post;
import com.revature.services.PostService;

@Controller
@CrossOrigin
@RequestMapping("/posts")
public class PostController {

	@Autowired
	PostService postService;
	
	//Added GET method to the /posts page to recieve list of all posts
	//Used for the posts funtionality to see all trade requests
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Post> findAllPosts(){
		return postService.findAllPosts();
	}
	
	//Added GET method to the /posts/{username} page to revieve list of all posts by a specific user
	//Used on the user's homepage, populates table of posts
	@GetMapping(value="/{username}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Post> findByTrainerUsername(@PathVariable("username") String username) {
		return postService.findByTrainerUsername(username);
	}
	
	//Added GET method to the /posts/pokedex/{tradePokemon} page to receive list of posts of
	//a specific pokemon, not currently implemented
	@GetMapping(value="pokedex/{tradePokemon}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Post> findByTradePokemon(@PathVariable("tradePokemon") int tradePokemon) {
		return postService.findByTradePokemon(tradePokemon);
	}
	
//	@GetMapping(value="/{username}/{tradePokemon}", produces=MediaType.APPLICATION_JSON_VALUE)
//	@ResponseBody
//	public List<Post> findByUsernameTradepokemon(@PathVariable("username") String username, @PathVariable("tradePokemon") int tradePokemon) {
//		return postService.findByTradeUsernameTradeokemon(tradePokemon);
//	}	
	
	//Added PATCH method to the /posts page
	//Not currently used, planned to be used on updateing posts after closed
	@PatchMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Post updatePost(@RequestBody Post p) {
		return postService.updatePost(p);
	}
	
	//Added POST method to the /posts page
	//Used whe creating posts from the home page
	@PostMapping(produces=MediaType.APPLICATION_JSON_VALUE, consumes=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Post createPost(@RequestBody Post p) {
		return postService.addPost(p);
	}
	
	//Added DELETE method to the /posts/delete/{id} to delete a post by the unique ID
	//Not currently used, planned to be used when posts are withdrawn
	@DeleteMapping(value="delete/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int deletePost(@PathVariable("id") int post_Id) {
		return postService.deletePost(post_Id);
	}
	
}
