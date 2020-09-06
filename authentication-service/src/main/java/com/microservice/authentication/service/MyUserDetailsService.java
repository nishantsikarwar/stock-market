//package com.microservice.authentication.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.microservice.authentication.model.MyUserDetails;
//import com.microservice.authentication.model.User;
//import com.microservice.authentication.repository.RegistrationRepository;
//
//@Service
//public class MyUserDetailsService implements UserDetailsService {
//
//	@Autowired
//	RegistrationRepository repo;
//
//	@Override
//	public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
////		System.out.println(emailId);
//		User user = repo.findByEmailId(emailId);
//		System.out.println(user);
//		
//		if (user == null) {
//			throw new UsernameNotFoundException("Not Found");
//		}
//
//		return new MyUserDetails(user);
//		// return user.map(MyUserDetails::new).get();
//	}
//
//}
