package com.enox.angular.demo.tasks.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Task {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	@JsonFormat(pattern="YYYY-MM-DD")
	private LocalDateTime dueDate;
	private Boolean completed;	

	public Task() {}


	public Task(Long id, String name, LocalDateTime localDateTime, Boolean completed) {
		super();
		this.id = id;
		this.name = name;
		this.dueDate = localDateTime;
		this.completed = completed;
	}
}
