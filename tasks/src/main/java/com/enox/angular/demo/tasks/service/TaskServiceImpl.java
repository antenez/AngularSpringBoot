package com.enox.angular.demo.tasks.service;

import com.enox.angular.demo.tasks.domain.Task;
import com.enox.angular.demo.tasks.repository.TaskRepository;

public class TaskServiceImpl implements TaskService {

//	Spring 4.3+ not need @Autowired
	private TaskRepository taskRepository;
	
	public TaskServiceImpl(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}
	
	@Override
	public Iterable<Task> getListOfTasks() {
		return taskRepository.findAll();
	}

}
