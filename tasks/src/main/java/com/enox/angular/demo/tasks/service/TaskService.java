package com.enox.angular.demo.tasks.service;

import com.enox.angular.demo.tasks.domain.Task;

public interface TaskService {

	Iterable<Task> getListOfTasks();

}
