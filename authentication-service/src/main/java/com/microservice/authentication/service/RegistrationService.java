package com.microservice.authentication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.authentication.model.User;
import com.microservice.authentication.repository.RegistrationRepository;

@Service
public class RegistrationService {

	@Autowired
	private RegistrationRepository repo;

	public User saveUser(User user) {
		return repo.save(user);
	}

	public User fetchUserByUserName(String userName) {
		return repo.findByUserName(userName);
	}

	public User fetchUserByUserNameAndPassword(String userName, String password) {
		return repo.findByUserNameAndPassword(userName, password);
	}
}
