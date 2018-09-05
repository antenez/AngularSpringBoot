package com.enox.angular.demo.tasks.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enox.angular.demo.tasks.domain.Task;
import com.enox.angular.demo.tasks.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
	
	//	Spring 4.3+ not need @Autowired
	TaskService taskService;
	
	public TaskController(TaskService taskService) {
		super();
		this.taskService = taskService;
	}
	
	@GetMapping( value = {"","/"})
	public Iterable<Task> list(){
		return taskService.getListOfTasks();
	}

}
