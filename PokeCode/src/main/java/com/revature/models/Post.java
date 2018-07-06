package com.revature.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Component
@Entity
@Table(name="POST")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Post implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="postSequence")
	@SequenceGenerator(allocationSize=1, name="postSequence", sequenceName="SQ_POST_PK")
	@Column
	private int Post_Id;
	
	@Column
	private String description;
	
	@Column(name="trade_pokemon")
	private int tradePokemon;
	
	@Column
	private int receive_pokemon;
	
	@Column
	private String status;
	
	@ManyToOne
	@JoinColumn(name="trainer_Id")
	Trainer trainer;

	public Post() {
		super();
	}

	public Post(int post_Id, String description, int trade_pokemon, int receive_pokemon, String status,
			Trainer trainer) {
		super();
		Post_Id = post_Id;
		this.description = description;
		this.tradePokemon = trade_pokemon;
		this.receive_pokemon = receive_pokemon;
		this.status = status;
		this.trainer = trainer;
	}

	public int getPost_Id() {
		return Post_Id;
	}

	public void setPost_Id(int post_Id) {
		Post_Id = post_Id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getTrade_pokemon() {
		return tradePokemon;
	}

	public void setTrade_pokemon(int trade_pokemon) {
		this.tradePokemon = trade_pokemon;
	}

	public int getReceive_pokemon() {
		return receive_pokemon;
	}

	public void setReceive_pokemon(int receive_pokemon) {
		this.receive_pokemon = receive_pokemon;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Post_Id;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + receive_pokemon;
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		result = prime * result + tradePokemon;
		result = prime * result + ((trainer == null) ? 0 : trainer.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Post other = (Post) obj;
		if (Post_Id != other.Post_Id)
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (receive_pokemon != other.receive_pokemon)
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		if (tradePokemon != other.tradePokemon)
			return false;
		if (trainer == null) {
			if (other.trainer != null)
				return false;
		} else if (!trainer.equals(other.trainer))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Post [Post_Id=" + Post_Id + ", description=" + description + ", tradePokemon=" + tradePokemon
				+ ", receive_pokemon=" + receive_pokemon + ", status=" + status + ", trainer=" + trainer + "]";
	}

}
