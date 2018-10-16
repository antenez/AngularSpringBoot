package com.enox.angular.demo.tasks;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.enox.angular.demo.tasks.domain.Task;
import com.enox.angular.demo.tasks.service.TaskService;

@SpringBootApplication
public class TasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);
	}
	
	@Bean
	CommandLineRunner runner(TaskService taskService) {
		return args->{
			taskService.saveTask(new Task(1L,"Task One",LocalDate.now(),true));
			taskService.saveTask(new Task(2L,"Task Two",LocalDate.now().plus(2, ChronoUnit.DAYS),false));
			taskService.saveTask(new Task(3L,"Task Three",LocalDate.now().plus(3, ChronoUnit.DAYS),false));
			taskService.saveTask(new Task(4L,"Task Three",LocalDate.now().plus(4, ChronoUnit.DAYS),false));
			taskService.saveTask(new Task(5L,"Task Two",LocalDate.now().plus(5, ChronoUnit.DAYS),false));
			taskService.saveTask(new Task(6L,"Task Two",LocalDate.now().plus(6, ChronoUnit.DAYS),false));
			taskService.saveTask(new Task(7L,"Task Two",LocalDate.now().plus(7, ChronoUnit.DAYS),false));
			taskService.saveTask(new Task(8L,"Task Two",LocalDate.now().plus(8, ChronoUnit.DAYS),false));
		
		
		}; 
	}
}
