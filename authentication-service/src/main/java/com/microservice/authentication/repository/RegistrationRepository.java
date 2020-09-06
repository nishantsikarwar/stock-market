package com.microservice.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.authentication.model.User;

public interface RegistrationRepository extends JpaRepository<User, Integer> {

	public User findByUserName(String userName);

	public User findByUserNameAndPassword(String userName, String password);
}
