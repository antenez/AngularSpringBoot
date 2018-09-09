package com.enox.angular.demo.tasks.service;

import org.springframework.stereotype.Service;

import com.enox.angular.demo.tasks.domain.Task;
import com.enox.angular.demo.tasks.repository.TaskRepository;
@Service
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
	@Override
	public Task saveTask (Task entity) {
		return taskRepository.save(entity);
	}

}
