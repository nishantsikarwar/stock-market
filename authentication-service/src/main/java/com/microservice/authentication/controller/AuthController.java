package com.microservice.authentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.authentication.model.Test;
import com.microservice.authentication.model.User;
import com.microservice.authentication.service.RegistrationService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

	@Autowired
	private RegistrationService service;

	@GetMapping("/test")
	public String test() {
		return "Test";
	}
	
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user) throws Exception {

		String tempUserName = user.getUserName();
		if (tempUserName != null && !"".equals(tempUserName)) {
			User userobj = service.fetchUserByUserName(tempUserName);
			if (userobj != null) {
				throw new Exception("user with " + tempUserName + " is already exist");
			}
		}

		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}

	@PostMapping("/loginuser")
	public User loginUser(@RequestBody User user) throws Exception {
		String userName = user.getUserName();
		String password = user.getPassword();
		User userObj = null;
		if (userName != null && password != null) {
			userObj = service.fetchUserByUserNameAndPassword(userName, password);
		}

		if (userObj == null) {
			throw new Exception("Bad Credentials");
		}
		return userObj;
	}

}
