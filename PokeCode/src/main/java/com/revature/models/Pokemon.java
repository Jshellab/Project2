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
@Table(name="POKEMON")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Pokemon implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="pokemonSequence")
	@SequenceGenerator(allocationSize=1, name="pokemonSequence", sequenceName="SQ_POKEMON_PK")
	@Column
	private int Pokemon_Id;
	
	@Column
	private String nickname;
	
	@Column
	private int box;
	
	@Column
	private int poke_number;
	
	@ManyToOne
//	(cascade=CascadeType.ALL)  
//	@OnDelete(action = OnDeleteAction.CASCADE)
	@JoinColumn(name="trainer_Id")
	Trainer trainer;

	public Pokemon() {
		super();
	}

	public Pokemon(int pokemon_Id, String nickname, int box, int poke_number, Trainer trainer) {
		super();
		Pokemon_Id = pokemon_Id;
		this.nickname = nickname;
		this.box = box;
		this.poke_number = poke_number;
		this.trainer = trainer;
	}

	public int getPokemon_Id() {
		return Pokemon_Id;
	}

	public void setPokemon_Id(int pokemon_Id) {
		Pokemon_Id = pokemon_Id;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public int getBox() {
		return box;
	}

	public void setBox(int box) {
		this.box = box;
	}

	public int getPoke_number() {
		return poke_number;
	}

	public void setPoke_number(int poke_number) {
		this.poke_number = poke_number;
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
		result = prime * result + Pokemon_Id;
		result = prime * result + box;
		result = prime * result + ((nickname == null) ? 0 : nickname.hashCode());
		result = prime * result + poke_number;
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
		Pokemon other = (Pokemon) obj;
		if (Pokemon_Id != other.Pokemon_Id)
			return false;
		if (box != other.box)
			return false;
		if (nickname == null) {
			if (other.nickname != null)
				return false;
		} else if (!nickname.equals(other.nickname))
			return false;
		if (poke_number != other.poke_number)
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
		return "Pokemon [Pokemon_Id=" + Pokemon_Id + ", nickname=" + nickname + ", box=" + box + ", poke_number="
				+ poke_number + ", trainer=" + trainer + "]";
	}
	
}
