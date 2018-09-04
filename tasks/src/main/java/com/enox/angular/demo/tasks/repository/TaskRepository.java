package com.enox.angular.demo.tasks.repository;

import org.springframework.data.repository.CrudRepository;

import com.enox.angular.demo.tasks.domain.Task;

public interface TaskRepository extends CrudRepository<Task, Long>{

}
