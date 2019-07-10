package com.example.demo.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mytodos")
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	private String title;
	private boolean completed;
	private LocalDateTime creationTime;

	@Override
	public String toString() {
		return "Todo [id=" + id + ", title=" + title + ", completed=" + completed + ", creationTime=" + creationTime+ "]";
	}

	public Todo() {
	}

	public Todo(String title) {
		super();
//		this.id = id;
		this.title = title;
		this.creationTime = LocalDateTime.now(); // Asia/Kolkata
		System.out.println("the local date time is "+LocalDateTime.now());
	}

	public int getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public LocalDateTime getCreationTime() {
		return creationTime;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setCreationTime(LocalDateTime creationTime) {
		this.creationTime = creationTime;
	}
	
}
